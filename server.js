/* ============================================
   LUXE CRAFT BACKEND
   Express + SQLite + Stripe + Google OAuth 2.0
   ============================================ */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Passport & Session
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Session setup
app.use(session({
    secret: process.env.SESSION_SECRET || 'luxe-craft-secret-2026',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    const user = {
        id: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName,
        photo: profile.photos[0]?.value || null,
        provider: 'google'
    };
    return done(null, user);
}));

/* ============================================
   GOOGLE AUTH ROUTES
   ============================================ */
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/index.html?auth=failed' }),
    (req, res) => {
        res.redirect('/index.html?auth=success');
    }
);

app.get('/api/user', (req, res) => {
    if (req.isAuthenticated && req.isAuthenticated()) {
        res.json({ loggedIn: true, user: req.user });
    } else {
        res.json({ loggedIn: false });
    }
});

app.get('/api/logout', (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ error: 'Logout failed' });
        req.session.destroy();
        res.json({ success: true, message: 'Logged out' });
    });
});

// Initialize SQLite Database
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) console.error('DB Error:', err);
    else console.log('✅ Connected to SQLite database');
});

// Create Tables
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id TEXT UNIQUE,
        customer_email TEXT,
        customer_name TEXT,
        customer_phone TEXT,
        shipping_address TEXT,
        items TEXT,
        subtotal REAL,
        shipping REAL,
        tax REAL,
        total REAL,
        payment_status TEXT DEFAULT 'pending',
        status TEXT DEFAULT 'processing',
        stripe_session_id TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS inquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        phone TEXT,
        message TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    console.log('✅ Database tables initialized');
});

/* ============================================
   NOTIFICATION SERVICE
   ============================================ */
function sendOrderNotification(order) {
    const msg = `🛒 NEW ORDER RECEIVED!\n\nOrder: ${order.order_id}\nCustomer: ${order.customer_name}\nEmail: ${order.customer_email}\nPhone: ${order.customer_phone}\nTotal: $${order.total.toFixed(2)}\nItems: ${order.items.length}\n\nStatus: ${order.status}`;

    console.log('\n' + '='.repeat(50));
    console.log(msg);
    console.log('='.repeat(50) + '\n');

    return true;
}

function sendCustomerConfirmation(order) {
    const msg = `Hi ${order.customer_name}, your order ${order.order_id} for $${order.total.toFixed(2)} has been received and is being processed. We'll notify you when it ships!`;
    console.log(`📧 Customer confirmation for ${order.customer_email}:`);
    console.log(msg);
    return true;
}

/* ============================================
   STRIPE: CREATE CHECKOUT SESSION
   ============================================ */
app.post('/api/create-checkout-session', async (req, res) => {
    try {
        const { items, address, customerEmail, customerName, customerPhone } = req.body;

        if (!items || !items.length) {
            return res.status(400).json({ error: 'Cart is empty' });
        }

        const subtotal = items.reduce((s, i) => s + (i.price * i.qty), 0);
        const shipping = subtotal > 150 ? 0 : 12;
        const tax = subtotal * 0.08;
        const total = subtotal + shipping + tax;

        const orderId = 'LC-' + Date.now().toString(36).toUpperCase();

        const lineItems = items.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                    description: item.desc,
                },
                unit_amount: Math.round(item.price * 100),
            },
            quantity: item.qty,
        }));

        if (shipping > 0) {
            lineItems.push({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Shipping',
                        description: 'Standard delivery',
                    },
                    unit_amount: Math.round(shipping * 100),
                },
                quantity: 1,
            });
        }

        if (tax > 0) {
            lineItems.push({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Tax (8%)',
                        description: 'Sales tax',
                    },
                    unit_amount: Math.round(tax * 100),
                },
                quantity: 1,
            });
        }

        const orderData = {
            order_id: orderId,
            customer_email: customerEmail || 'guest@luxecraft.com',
            customer_name: customerName || `${address.firstName} ${address.lastName}`,
            customer_phone: address.phone,
            shipping_address: JSON.stringify(address),
            items: JSON.stringify(items),
            subtotal,
            shipping,
            tax,
            total,
            payment_status: 'pending',
            status: 'processing'
        };

        db.run(`INSERT INTO orders 
            (order_id, customer_email, customer_name, customer_phone, shipping_address, items, subtotal, shipping, tax, total, payment_status, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [orderData.order_id, orderData.customer_email, orderData.customer_name, orderData.customer_phone,
             orderData.shipping_address, orderData.items, orderData.subtotal, orderData.shipping, 
             orderData.tax, orderData.total, orderData.payment_status, orderData.status],
            async function(err) {
                if (err) {
                    console.error('DB Insert Error:', err);
                    return res.status(500).json({ error: 'Failed to create order' });
                }

                const session = await stripe.checkout.sessions.create({
                    payment_method_types: ['card'],
                    line_items: lineItems,
                    mode: 'payment',
                    success_url: `${process.env.BASE_URL}/index.html?success=true&order_id=${orderId}&session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${process.env.BASE_URL}/index.html?cancelled=true&order_id=${orderId}`,
                    customer_email: customerEmail,
                    metadata: {
                        order_id: orderId,
                        customer_name: orderData.customer_name
                    }
                });

                db.run(`UPDATE orders SET stripe_session_id = ? WHERE order_id = ?`, 
                    [session.id, orderId]);

                res.json({ 
                    success: true, 
                    sessionUrl: session.url,
                    orderId: orderId 
                });
            }
        );
    } catch (error) {
        console.error('Stripe Error:', error);
        res.status(500).json({ error: 'Payment initialization failed' });
    }
});

/* ============================================
   VERIFY PAYMENT & CONFIRM ORDER
   ============================================ */
app.post('/api/verify-payment', async (req, res) => {
    try {
        const { session_id, order_id } = req.body;

        const session = await stripe.checkout.sessions.retrieve(session_id);

        if (session.payment_status === 'paid') {
            db.run(`UPDATE orders SET payment_status = 'paid', status = 'processing' WHERE order_id = ?`, 
                [order_id], 
                function(err) {
                    if (err) {
                        return res.status(500).json({ error: 'Database update failed' });
                    }

                    db.get(`SELECT * FROM orders WHERE order_id = ?`, [order_id], (err, order) => {
                        if (!err && order) {
                            try {
                                order.items = JSON.parse(order.items);
                                order.shipping_address = JSON.parse(order.shipping_address);
                            } catch(e) {}
                            sendOrderNotification(order);
                            sendCustomerConfirmation(order);
                        }
                    });

                    res.json({ 
                        success: true, 
                        message: 'Payment verified and order confirmed',
                        orderId: order_id 
                    });
                }
            );
        } else {
            res.status(400).json({ error: 'Payment not completed' });
        }
    } catch (error) {
        console.error('Verification Error:', error);
        res.status(500).json({ error: 'Payment verification failed' });
    }
});

/* ============================================
   GET ORDER DETAILS
   ============================================ */
app.get('/api/order/:orderId', (req, res) => {
    db.get(`SELECT * FROM orders WHERE order_id = ?`, [req.params.orderId], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: 'Order not found' });

        try { row.items = JSON.parse(row.items); } catch(e) {}
        try { row.shipping_address = JSON.parse(row.shipping_address); } catch(e) {}
        res.json(row);
    });
});

/* ============================================
   GET ALL ORDERS (Admin)
   ============================================ */
app.get('/api/orders', (req, res) => {
    db.all(`SELECT * FROM orders ORDER BY created_at DESC`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        rows.forEach(row => {
            try { row.items = JSON.parse(row.items); } catch(e) {}
            try { row.shipping_address = JSON.parse(row.shipping_address); } catch(e) {}
        });
        res.json(rows);
    });
});

/* ============================================
   WHATSAPP / CONTACT INQUIRY
   ============================================ */
app.post('/api/inquiry', (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email and message are required' });
    }

    db.run(`INSERT INTO inquiries (name, email, phone, message) VALUES (?, ?, ?, ?)`,
        [name, email, phone || '', message],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });

            console.log(`📩 New inquiry from ${name} (${email}): ${message}`);

            res.json({ 
                success: true, 
                message: 'Inquiry received! We will contact you shortly.',
                inquiryId: this.lastID 
            });
        }
    );
});

/* ============================================
   START SERVER
   ============================================ */
app.listen(PORT, () => {
    console.log(`\n🚀 LUXE CRAFT Server running on http://localhost:${PORT}`);
    console.log(`📦 API Endpoints:`);
    console.log(`   GET  /auth/google`);
    console.log(`   GET  /auth/google/callback`);
    console.log(`   GET  /api/user`);
    console.log(`   GET  /api/logout`);
    console.log(`   POST /api/create-checkout-session`);
    console.log(`   POST /api/verify-payment`);
    console.log(`   GET  /api/order/:orderId`);
    console.log(`   GET  /api/orders`);
    console.log(`   POST /api/inquiry`);
    console.log(`\n💳 Stripe mode: ${process.env.STRIPE_SECRET_KEY?.startsWith('sk_test') ? 'TEST' : 'LIVE'}`);
    console.log(`🔐 Google OAuth: ${process.env.GOOGLE_CLIENT_ID ? 'CONFIGURED' : 'NOT CONFIGURED'}`);
});