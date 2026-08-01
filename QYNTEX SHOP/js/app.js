/* ============================================
   LUXE CRAFT - 100 Products + Checkout System
   ============================================ */

/* ============================================
   PRODUCT DATA (100 Products)
   ============================================ */
const products = {
    kitchen: [
        { id: 1, name: "Neo Spoon Set", desc: "Matte titanium finish, ergonomic grip, set of 6", price: 34, icon: "🥄" },
        { id: 2, name: "Glass Tumbler", desc: "Borosilicate glass, neomorphic base, 350ml", price: 28, icon: "🥤" },
        { id: 3, name: "Ceramic Water Bottle", desc: "Insulated ceramic, 500ml capacity, leak-proof", price: 45, icon: "💧" },
        { id: 4, name: "Dinner Plate Set", desc: "Set of 4 minimalist ceramic plates, 10-inch", price: 89, icon: "🍽️" },
        { id: 5, name: "Chef's Knife Pro", desc: "Damascus steel, walnut handle, 8-inch blade", price: 120, icon: "🔪" },
        { id: 6, name: "Copper Frying Pan", desc: "Tri-ply copper core, non-stick, 28cm", price: 145, icon: "🍳" },
        { id: 7, name: "Bamboo Cutting Board", desc: "End-grain bamboo, juice groove, 45x30cm", price: 38, icon: "🎋" },
        { id: 8, name: "Stainless Whisk", desc: "Balloon whisk, silicone-coated wires, 12-inch", price: 18, icon: "🥢" },
        { id: 9, name: "Cast Iron Skillet", desc: "Pre-seasoned, 26cm, oven-safe to 260°C", price: 65, icon: "🥘" },
        { id: 10, name: "Silicone Spatula Set", desc: "Heat-resistant to 230°C, set of 3", price: 22, icon: "🥄" },
        { id: 11, name: "Mortar & Pestle", desc: "Granite stone, 14cm diameter, unpolished", price: 42, icon: "⚗️" },
        { id: 12, name: "Tea Infuser Bottle", desc: "Double-wall glass, stainless filter, 400ml", price: 32, icon: "🍵" },
        { id: 13, name: "Salad Spinner", desc: "Manual crank, BPA-free, 5L capacity", price: 28, icon: "🥗" },
        { id: 14, name: "Measuring Cup Set", desc: "Stainless steel, nested set of 5, engraved", price: 24, icon: "📏" },
        { id: 15, name: "Olive Oil Dispenser", desc: "Glass with pour spout, 500ml, drip-free", price: 26, icon: "🫒" },
        { id: 16, name: "Pasta Maker Machine", desc: "Manual roller, 7 thickness settings, steel", price: 89, icon: "🍝" },
        { id: 17, name: "Kitchen Timer", desc: "Magnetic, digital display, loud alarm", price: 16, icon: "⏱️" },
        { id: 18, name: "Spice Rack Carousel", desc: "Rotating, 16 jars included, bamboo base", price: 55, icon: "🧂" },
        { id: 19, name: "Dutch Oven Pot", desc: "Enamel cast iron, 5.5L, gradient purple", price: 195, icon: "🍲" },
        { id: 20, name: "Citrus Juicer", desc: "Manual press, cast aluminum, dishwasher safe", price: 35, icon: "🍋" },
        { id: 21, name: "Bread Proofing Basket", desc: "Round banneton, rattan, 25cm diameter", price: 22, icon: "🍞" },
        { id: 22, name: "Ice Cube Tray Set", desc: "Silicone, large cubes, set of 2 trays", price: 14, icon: "🧊" },
        { id: 23, name: "Grater & Zester", desc: "Microplane, stainless, ergonomic handle", price: 19, icon: "🧀" },
        { id: 24, name: "Rolling Pin", desc: "French tapered, maple wood, 50cm", price: 32, icon: "🥧" },
        { id: 25, name: "Apron Linen", desc: "Cross-back design, stone-washed linen, 4 pockets", price: 48, icon: "👨‍🍳" }
    ],
    ceramics: [
        { id: 26, name: "Artisan Dinner Plate", desc: "Hand-painted stoneware, 10-inch, reactive glaze", price: 52, icon: "🏺" },
        { id: 27, name: "Clay Coffee Cup", desc: "Textured clay with raw edge, 250ml", price: 24, icon: "☕" },
        { id: 28, name: "Ceramic Serving Bowl", desc: "Deep serving bowl, reactive glaze, 2L", price: 38, icon: "🥣" },
        { id: 29, name: "Tea Mug Set", desc: "Set of 2 with bamboo lids, 350ml each", price: 42, icon: "🍵" },
        { id: 30, name: "Porcelain Vase", desc: "Matte white, sculptural form, 30cm tall", price: 68, icon: "🌸" },
        { id: 31, name: "Ceramic Teapot", desc: "Stoneware, built-in infuser, 1.2L", price: 75, icon: "🫖" },
        { id: 32, name: "Appetizer Plate Set", desc: "Set of 6, gold rim, 6-inch", price: 58, icon: "🍰" },
        { id: 33, name: "Ramen Bowl", desc: "Large ceramic, 1.5L, chopstick rest built-in", price: 34, icon: "🍜" },
        { id: 34, name: "Candle Holder Pair", desc: "Speckled stoneware, fits taper candles", price: 28, icon: "🕯️" },
        { id: 35, name: "Plant Pot Set", desc: "Set of 3, drainage holes, terracotta", price: 45, icon: "🪴" },
        { id: 36, name: "Butter Dish", desc: "Covered, stoneware, fits standard sticks", price: 22, icon: "🧈" },
        { id: 37, name: "Salt & Pepper Shakers", desc: "Wheel-thrown, matching set, cork stoppers", price: 26, icon: "🧂" },
        { id: 38, name: "Ceramic Pitcher", desc: "Water jug, 1.5L, hand-dipped glaze", price: 48, icon: "🏺" },
        { id: 39, name: "Sake Set", desc: "1 bottle + 4 cups, traditional blue pattern", price: 55, icon: "🍶" },
        { id: 40, name: "Jewelry Dish", desc: "Ring tray, marbled clay, gold accent", price: 18, icon: "💍" },
        { id: 41, name: "Espresso Cup Set", desc: "Set of 4, stackable, 80ml each", price: 36, icon: "☕" },
        { id: 42, name: "Ceramic Canister", desc: "Airtight lid, coffee storage, 800ml", price: 32, icon: "☕" },
        { id: 43, name: "Soap Dispenser", desc: "Refillable, pump top, glazed stoneware", price: 24, icon: "🧼" },
        { id: 44, name: "Wall Planter", desc: "Hanging, geometric shape, 15cm", price: 38, icon: "🌿" },
        { id: 45, name: "Incense Holder", desc: "Lotus shape, ash catcher, ceramic", price: 16, icon: "🪷" },
        { id: 46, name: "Ceramic Coaster Set", desc: "Set of 6, cork backing, abstract design", price: 28, icon: "🍺" },
        { id: 47, name: "Gravy Boat", desc: "Stoneware, 500ml, matching underplate", price: 30, icon: "🍗" },
        { id: 48, name: "Egg Cup Set", desc: "Set of 4, footed base, pastel colors", price: 20, icon: "🥚" },
        { id: 49, name: "Ceramic Clock", desc: "Wall clock, silent movement, 30cm", price: 65, icon: "🕐" },
        { id: 50, name: "Desk Organizer", desc: "3 compartments, pen holder, glazed finish", price: 35, icon: "✏️" }
    ],
    leather: [
        { id: 51, name: "Mini Leather Purse", desc: "Full-grain leather, brass clasp, crossbody", price: 120, icon: "👜" },
        { id: 52, name: "Laptop Briefcase", desc: "Fits 16-inch, padded compartments, tan", price: 195, icon: "💼" },
        { id: 53, name: "Oxford Leather Shoes", desc: "Hand-stitched, vegetable tanned, size 7-12", price: 240, icon: "👞" },
        { id: 54, name: "Gym Duffel Bag", desc: "Water-resistant lining, shoe pocket, 45L", price: 165, icon: "🎒" },
        { id: 55, name: "Bifold Wallet", desc: "RFID blocking, 8 card slots, black", price: 65, icon: "👛" },
        { id: 56, name: "Leather Belt", desc: "Reversible, black/brown, automatic buckle", price: 48, icon: "🎗️" },
        { id: 57, name: "Card Holder", desc: "Slim, 6 cards, pull-tab, cognac", price: 35, icon: "💳" },
        { id: 58, name: "Weekender Bag", desc: "Full-grain, 60L capacity, detachable strap", price: 280, icon: "🧳" },
        { id: 59, name: "Leather Backpack", desc: "Roll-top, laptop sleeve, water-resistant", price: 220, icon: "🎒" },
        { id: 60, name: "Watch Strap", desc: "Quick-release, 20mm, Italian leather", price: 42, icon: "⌚" },
        { id: 61, name: "Passport Holder", desc: "RFID, 4 card slots, hand-burnished", price: 38, icon: "🛂" },
        { id: 62, name: "Key Organizer", desc: "Compact, holds 7 keys, leather wrap", price: 28, icon: "🔑" },
        { id: 63, name: "Messenger Bag", desc: "Canvas + leather trim, 15-inch laptop", price: 145, icon: "💼" },
        { id: 64, name: "Leather Gloves", desc: "Touchscreen compatible, fleece-lined", price: 55, icon: "🧤" },
        { id: 65, name: "Desk Pad", desc: "Full-grain, 90x45cm, mouse-friendly", price: 78, icon: "🖱️" },
        { id: 66, name: "Sunglasses Case", desc: "Hard shell, suede lining, magnetic close", price: 32, icon: "🕶️" },
        { id: 67, name: "Tote Bag", desc: "Unlined, shoulder straps, natural tan", price: 95, icon: "🛍️" },
        { id: 68, name: "AirPods Case", desc: "Snap closure, carabiner, hand-dyed", price: 25, icon: "🎧" },
        { id: 69, name: "Luggage Tag Set", desc: "Set of 2, privacy flap, brass hardware", price: 22, icon: "🏷️" },
        { id: 70, name: "Journal Cover", desc: "A5 size, refillable, pen loop, embossable", price: 58, icon: "📓" },
        { id: 71, name: "Camera Strap", desc: "Neoprene padded, adjustable, vintage brown", price: 45, icon: "📷" },
        { id: 72, name: "Cigar Case", desc: "Holds 3, cedar-lined, humidifier", price: 85, icon: "🚬" },
        { id: 73, name: "Leather Apron", desc: "Barista style, cross-back, tool pockets", price: 110, icon: "👨‍🍳" },
        { id: 74, name: "Wine Carrier", desc: "2-bottle, insulated, shoulder strap", price: 68, icon: "🍷" },
        { id: 75, name: "Bracelet Cuff", desc: "Hand-stamped, adjustable, unisex", price: 38, icon: "📿" }
    ],
    fashion: [
        { id: 76, name: "Linen Summer Dress", desc: "Breathable linen, midi length, sage green", price: 145, size: "large", icon: "👗" },
        { id: 77, name: "Silk Evening Gown", desc: "Floor-length, cowl neck, champagne", price: 320, size: "tall", icon: "👘" },
        { id: 78, name: "Cotton Midi Dress", desc: "Puff sleeves, floral print, belted", price: 98, size: "wide", icon: "👚" },
        { id: 79, name: "Velvet Wrap Dress", desc: "Long sleeve, tie waist, deep plum", price: 175, size: "normal", icon: "🥻" },
        { id: 80, name: "Boho Maxi Dress", desc: "Tiered skirt, off-shoulder, paisley", price: 130, size: "large", icon: "🧥" },
        { id: 81, name: "Minimal Shift Dress", desc: "Structured crepe, knee-length, black", price: 115, size: "wide", icon: "🦺" },
        { id: 82, name: "Knit Cardigan", desc: "Oversized, cable knit, cream", price: 88, size: "normal", icon: "🧶" },
        { id: 83, name: "Tailored Blazer", desc: "Single-breasted, wool blend, navy", price: 210, size: "wide", icon: "🧥" },
        { id: 84, name: "Wide Leg Trousers", desc: "High-waist, pleated front, camel", price: 125, size: "tall", icon: "👖" },
        { id: 85, name: "Silk Blouse", desc: "Button-front, relaxed fit, ivory", price: 135, size: "normal", icon: "👔" },
        { id: 86, name: "Pleated Skirt", desc: "Midi length, metallic sheen, rose gold", price: 110, size: "large", icon: "👗" },
        { id: 87, name: "Cashmere Sweater", desc: "Crew neck, ribbed cuffs, charcoal", price: 195, size: "normal", icon: "🧥" },
        { id: 88, name: "Denim Jacket", desc: "Vintage wash, boxy fit, distressed", price: 145, size: "wide", icon: "🧥" },
        { id: 89, name: "Palazzo Pants", desc: "Flowy, elastic waist, tropical print", price: 95, size: "tall", icon: "👖" },
        { id: 90, name: "Wrap Top", desc: "V-neck, tie side, striped cotton", price: 78, size: "normal", icon: "👚" },
        { id: 91, name: "Trench Coat", desc: "Double-breasted, water-resistant, beige", price: 265, size: "large", icon: "🧥" },
        { id: 92, name: "Cocktail Dress", desc: "Sequin bodice, A-line skirt, midnight blue", price: 240, size: "normal", icon: "👗" },
        { id: 93, name: "Linen Shirt", desc: "Relaxed fit, camp collar, white", price: 85, size: "wide", icon: "👔" },
        { id: 94, name: "Jumpsuit", desc: "Wide-leg, belted waist, emerald", price: 155, size: "tall", icon: "👖" },
        { id: 95, name: "Puffer Vest", desc: "Lightweight, quilted, stand collar, olive", price: 110, size: "normal", icon: "🧥" },
        { id: 96, name: "Satin Slip Dress", desc: "Bias cut, lace trim, blush pink", price: 125, size: "large", icon: "👗" },
        { id: 97, name: "Cropped Sweater", desc: "Ribbed, mock neck, balloon sleeves, mauve", price: 92, size: "normal", icon: "🧶" },
        { id: 98, name: "Paperbag Shorts", desc: "High-rise, belted, linen blend, sand", price: 68, size: "wide", icon: "🩳" },
        { id: 99, name: "Maxi Skirt", desc: "Tiered, elastic waist, block print", price: 105, size: "tall", icon: "👗" },
        { id: 100, name: "Oversized Scarf", desc: "Wool-cashmere, fringed, plaid", price: 75, size: "normal", icon: "🧣" }
    ]
};

/* ============================================
   STATE MANAGEMENT
   ============================================ */
let cart = [];
let currentUser = null;
let savedAddress = null;
let currentAuthTab = 'login';

// Load from localStorage
function loadState() {
    try {
        const savedCart = localStorage.getItem('luxeCart');
        const savedUser = localStorage.getItem('luxeUser');
        const savedAddr = localStorage.getItem('luxeAddress');
        if (savedCart) cart = JSON.parse(savedCart);
        if (savedUser) currentUser = JSON.parse(savedUser);
        if (savedAddr) savedAddress = JSON.parse(savedAddr);
    } catch (e) { console.log('No saved state'); }
}

function saveCart() {
    localStorage.setItem('luxeCart', JSON.stringify(cart));
}

function saveUser() {
    if (currentUser) localStorage.setItem('luxeUser', JSON.stringify(currentUser));
    else localStorage.removeItem('luxeUser');
}

function saveAddress() {
    if (savedAddress) localStorage.setItem('luxeAddress', JSON.stringify(savedAddress));
}

/* ============================================
   RENDER FUNCTIONS
   ============================================ */
function renderProducts(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    products[category].forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="product-image">
                <div style="font-size:80px; opacity:0.3;">${product.icon}</div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-footer">
                    <span class="liquid-price">$${product.price}</span>
                    <button class="neo-btn" style="padding:10px 20px; font-size:12px;" onclick="addToCart(${product.id}, '${category}')">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
        container.appendChild(card);
    });
}

function renderBentoGrid() {
    const container = document.getElementById('fashionGrid');
    if (!container) return;
    container.innerHTML = '';
    const sizeMap = { 'large': 'large', 'tall': 'tall', 'wide': 'wide', 'normal': '' };

    products.fashion.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = `bento-card ${sizeMap[product.size] || ''}`;
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="bento-image">
                <div style="font-size:100px; opacity:0.2;">${product.icon}</div>
            </div>
            <div class="bento-overlay">
                <h3>${product.name}</h3>
                <span class="liquid-price">$${product.price}</span>
            </div>
        `;
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
        card.addEventListener('click', () => addToCart(product.id, 'fashion'));
        container.appendChild(card);
    });
}

/* ============================================
   3D TILT LOGIC
   ============================================ */
function handleTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.02)`;
}

function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
}

/* ============================================
   CART LOGIC
   ============================================ */
function addToCart(productId, category) {
    const product = products[category].find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1, category });
    }
    saveCart();
    updateCart();
    showToast(`${product.name} added to cart!`);
}

function updateQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCart();
}

function updateCart() {
    const countEl = document.getElementById('cartCount');
    const itemsEl = document.getElementById('cartItems');
    const subtotalEl = document.getElementById('cartSubtotal');
    const shippingEl = document.getElementById('cartShipping');
    const totalEl = document.getElementById('cartTotal');

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    countEl.textContent = totalQty;

    if (cart.length === 0) {
        itemsEl.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Your cart is empty</p>
                <p style="font-size:13px; margin-top:8px;">Add some beautiful items!</p>
            </div>`;
        subtotalEl.textContent = '$0.00';
        shippingEl.textContent = '$0.00';
        totalEl.textContent = '$0.00';
        return;
    }

    itemsEl.innerHTML = cart.map((item, i) => `
        <div class="cart-item">
            <div class="cart-item-img">${item.icon}</div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price}</p>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="updateQty(${i}, -1)">−</button>
                <span style="font-weight:600; min-width:20px; text-align:center;">${item.qty}</span>
                <button class="qty-btn" onclick="updateQty(${i}, 1)">+</button>
            </div>
            <button class="close-cart" style="width:32px; height:32px; flex-shrink:0;" onclick="removeFromCart(${i})">×</button>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const shipping = subtotal > 150 ? 0 : 12;
    const total = subtotal + shipping;

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
}

function toggleCart() {
    document.getElementById('cartOverlay').classList.toggle('active');
    document.body.style.overflow = document.getElementById('cartOverlay').classList.contains('active') ? 'hidden' : '';
}

/* ============================================
   CHECKOUT FLOW
   ============================================ */
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    toggleCart();
    if (!currentUser) {
        openAuthModal();
    } else {
        openAddressModal();
    }
}

/* ============================================
   AUTH MODAL
   ============================================ */
function openAuthModal() {
    document.getElementById('authOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    switchAuthTab('login');
}

function closeAuthModal() {
    document.getElementById('authOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function switchAuthTab(tab) {
    currentAuthTab = tab;
    document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
    document.getElementById('tabSignup').classList.toggle('active', tab === 'signup');
    document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
    document.getElementById('signupForm').classList.toggle('hidden', tab !== 'signup');
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showToast('Please fill in all fields');
        return;
    }

    // Simulate login
    currentUser = { email, name: email.split('@')[0], id: Date.now() };
    saveUser();
    updateUserUI();
    closeAuthModal();
    showToast(`Welcome back, ${currentUser.name}!`);

    // If cart has items, go to address
    if (cart.length > 0) {
        setTimeout(() => openAddressModal(), 400);
    }
}

function handleSignup() {
    const firstName = document.getElementById('signupFirstName').value.trim();
    const lastName = document.getElementById('signupLastName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirmPassword').value;
    const agree = document.getElementById('agreeTerms').checked;

    if (!firstName || !lastName || !email || !password) {
        showToast('Please fill in all required fields');
        return;
    }
    if (password.length < 8) {
        showToast('Password must be at least 8 characters');
        return;
    }
    if (password !== confirm) {
        showToast('Passwords do not match');
        return;
    }
    if (!agree) {
        showToast('Please agree to the terms');
        return;
    }

    currentUser = { email, name: `${firstName} ${lastName}`, id: Date.now() };
    saveUser();
    updateUserUI();
    closeAuthModal();
    showToast(`Welcome to LUXE CRAFT, ${firstName}!`);

    if (cart.length > 0) {
        setTimeout(() => openAddressModal(), 400);
    }
}

function handleLogout() {
    currentUser = null;
    saveUser();
    updateUserUI();
    showToast('Signed out successfully');
    document.getElementById('userDropdown').classList.remove('active');
}

function updateUserUI() {
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const logoutBtn = document.getElementById('logoutBtn');

    if (currentUser) {
        userName.textContent = currentUser.name;
        userEmail.textContent = currentUser.email;
        logoutBtn.style.display = 'flex';
    } else {
        userName.textContent = 'Guest';
        userEmail.textContent = 'Not signed in';
        logoutBtn.style.display = 'none';
    }
}

/* ============================================
   ADDRESS MODAL
   ============================================ */
function openAddressModal() {
    document.getElementById('addressOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';

    // Pre-fill if saved address exists
    if (savedAddress) {
        document.getElementById('addrFirstName').value = savedAddress.firstName || '';
        document.getElementById('addrLastName').value = savedAddress.lastName || '';
        document.getElementById('addrPhone').value = savedAddress.phone || '';
        document.getElementById('addrStreet').value = savedAddress.street || '';
        document.getElementById('addrApt').value = savedAddress.apt || '';
        document.getElementById('addrCity').value = savedAddress.city || '';
        document.getElementById('addrState').value = savedAddress.state || '';
        document.getElementById('addrZip').value = savedAddress.zip || '';
        document.getElementById('addrCountry').value = savedAddress.country || 'US';
    }
}

function closeAddressModal() {
    document.getElementById('addressOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function saveAddressAndContinue() {
    const firstName = document.getElementById('addrFirstName').value.trim();
    const lastName = document.getElementById('addrLastName').value.trim();
    const phone = document.getElementById('addrPhone').value.trim();
    const street = document.getElementById('addrStreet').value.trim();
    const city = document.getElementById('addrCity').value.trim();
    const state = document.getElementById('addrState').value.trim();
    const zip = document.getElementById('addrZip').value.trim();
    const country = document.getElementById('addrCountry').value;

    if (!firstName || !lastName || !phone || !street || !city || !state || !zip || !country) {
        showToast('Please fill in all required fields');
        return;
    }

    savedAddress = { firstName, lastName, phone, street, apt: document.getElementById('addrApt').value.trim(), city, state, zip, country };

    if (document.getElementById('saveAddress').checked) {
        saveAddress();
    }

    closeAddressModal();
    openCheckoutModal();
}

/* ============================================
   CHECKOUT / PAYMENT MODAL
   ============================================ */
function openCheckoutModal() {
    document.getElementById('checkoutOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCheckoutSummary();
}

function closeCheckoutModal() {
    document.getElementById('checkoutOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function renderCheckoutSummary() {
    const itemsContainer = document.getElementById('checkoutItems');
    const addressDisplay = document.getElementById('checkoutAddressDisplay');

    // Items
    itemsContainer.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.icon} ${item.name} x${item.qty}</span>
            <span style="font-weight:600;">$${(item.price * item.qty).toFixed(2)}</span>
        </div>
    `).join('');

    // Address
    if (savedAddress) {
        addressDisplay.innerHTML = `
            <p><strong>${savedAddress.firstName} ${savedAddress.lastName}</strong></p>
            <p>${savedAddress.street}${savedAddress.apt ? ', ' + savedAddress.apt : ''}</p>
            <p>${savedAddress.city}, ${savedAddress.state} ${savedAddress.zip}</p>
            <p>${savedAddress.country}</p>
            <p style="margin-top:4px; opacity:0.7;">📞 ${savedAddress.phone}</p>
        `;
    }

    // Totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const shipping = subtotal > 150 ? 0 : 12;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('checkoutTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
}

function placeOrder() {
    const orderId = 'LC-' + Date.now().toString(36).toUpperCase();
    const total = document.getElementById('checkoutTotal').textContent;

    closeCheckoutModal();

    // Show success
    document.getElementById('orderDetails').innerHTML = `
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Total:</strong> ${total}</p>
        <p><strong>Items:</strong> ${cart.reduce((s, i) => s + i.qty, 0)}</p>
        <p><strong>Shipping to:</strong> ${savedAddress ? savedAddress.city + ', ' + savedAddress.country : 'N/A'}</p>
        <p style="margin-top:8px; font-size:12px; opacity:0.6;">A confirmation email has been sent to ${currentUser ? currentUser.email : 'your email'}.</p>
    `;

    document.getElementById('successOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSuccessAndReset() {
    document.getElementById('successOverlay').classList.remove('active');
    document.body.style.overflow = '';
    cart = [];
    saveCart();
    updateCart();
}

/* ============================================
   USER DROPDOWN
   ============================================ */
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('userDropdown');
    const userIcon = document.querySelector('.user-icon');
    if (dropdown && userIcon && !dropdown.contains(e.target) && !userIcon.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

document.querySelector('.user-icon')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = document.getElementById('userDropdown');
    if (currentUser) {
        dropdown.classList.toggle('active');
    } else {
        openAuthModal();
    }
});

/* ============================================
   TOAST
   ============================================ */
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ============================================
   SCROLL UTILS
   ============================================ */
function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// Scroll Reveal
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, observerOptions);

// Parallax on scroll for floating orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.floating-orb').forEach((orb, i) => {
        const speed = 0.3 + (i * 0.15);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderProducts('kitchen', 'kitchenGrid');
    renderProducts('ceramics', 'ceramicsGrid');
    renderProducts('leather', 'leatherGrid');
    renderBentoGrid();
    updateCart();
    updateUserUI();

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Payment option selection
    document.querySelectorAll('.payment-option input').forEach(radio => {
        radio.addEventListener('change', function() {
            document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));
            this.closest('.payment-option').classList.add('active');
        });
    });
});