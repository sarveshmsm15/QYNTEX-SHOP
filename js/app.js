/* ============================================
   LUXE CRAFT - 100 Products + Full E-Commerce
   ============================================ */

const products = {
    kitchen: [
        { id: 1, name: "Neo Spoon Set", desc: "Matte titanium finish, ergonomic grip, set of 6", price: 34, icon: "🥄", rating: 4.8, reviews: 124, badge: "bestseller" },
        { id: 2, name: "Glass Tumbler", desc: "Borosilicate glass, neomorphic base, 350ml", price: 28, icon: "🥤", rating: 4.5, reviews: 89 },
        { id: 3, name: "Ceramic Water Bottle", desc: "Insulated ceramic, 500ml capacity, leak-proof", price: 45, icon: "💧", rating: 4.7, reviews: 210, badge: "new" },
        { id: 4, name: "Dinner Plate Set", desc: "Set of 4 minimalist ceramic plates, 10-inch", price: 89, icon: "🍽️", rating: 4.9, reviews: 342 },
        { id: 5, name: "Chef's Knife Pro", desc: "Damascus steel, walnut handle, 8-inch blade", price: 120, icon: "🔪", rating: 4.8, reviews: 156 },
        { id: 6, name: "Copper Frying Pan", desc: "Tri-ply copper core, non-stick, 28cm", price: 145, icon: "🍳", rating: 4.6, reviews: 98 },
        { id: 7, name: "Bamboo Cutting Board", desc: "End-grain bamboo, juice groove, 45x30cm", price: 38, icon: "🎋", rating: 4.4, reviews: 67 },
        { id: 8, name: "Stainless Whisk", desc: "Balloon whisk, silicone-coated wires, 12-inch", price: 18, icon: "🥢", rating: 4.3, reviews: 45 },
        { id: 9, name: "Cast Iron Skillet", desc: "Pre-seasoned, 26cm, oven-safe to 260°C", price: 65, icon: "🥘", rating: 4.7, reviews: 189 },
        { id: 10, name: "Silicone Spatula Set", desc: "Heat-resistant to 230°C, set of 3", price: 22, icon: "🥄", rating: 4.5, reviews: 112 },
        { id: 11, name: "Mortar & Pestle", desc: "Granite stone, 14cm diameter, unpolished", price: 42, icon: "⚗️", rating: 4.6, reviews: 78 },
        { id: 12, name: "Tea Infuser Bottle", desc: "Double-wall glass, stainless filter, 400ml", price: 32, icon: "🍵", rating: 4.4, reviews: 56 },
        { id: 13, name: "Salad Spinner", desc: "Manual crank, BPA-free, 5L capacity", price: 28, icon: "🥗", rating: 4.2, reviews: 34 },
        { id: 14, name: "Measuring Cup Set", desc: "Stainless steel, nested set of 5, engraved", price: 24, icon: "📏", rating: 4.5, reviews: 91 },
        { id: 15, name: "Olive Oil Dispenser", desc: "Glass with pour spout, 500ml, drip-free", price: 26, icon: "🫒", rating: 4.3, reviews: 48 },
        { id: 16, name: "Pasta Maker Machine", desc: "Manual roller, 7 thickness settings, steel", price: 89, icon: "🍝", rating: 4.7, reviews: 134 },
        { id: 17, name: "Kitchen Timer", desc: "Magnetic, digital display, loud alarm", price: 16, icon: "⏱️", rating: 4.1, reviews: 23 },
        { id: 18, name: "Spice Rack Carousel", desc: "Rotating, 16 jars included, bamboo base", price: 55, icon: "🧂", rating: 4.6, reviews: 87 },
        { id: 19, name: "Dutch Oven Pot", desc: "Enamel cast iron, 5.5L, gradient purple", price: 195, icon: "🍲", rating: 4.9, reviews: 256, badge: "bestseller" },
        { id: 20, name: "Citrus Juicer", desc: "Manual press, cast aluminum, dishwasher safe", price: 35, icon: "🍋", rating: 4.4, reviews: 62 },
        { id: 21, name: "Bread Proofing Basket", desc: "Round banneton, rattan, 25cm diameter", price: 22, icon: "🍞", rating: 4.5, reviews: 41 },
        { id: 22, name: "Ice Cube Tray Set", desc: "Silicone, large cubes, set of 2 trays", price: 14, icon: "🧊", rating: 4.2, reviews: 29 },
        { id: 23, name: "Grater & Zester", desc: "Microplane, stainless, ergonomic handle", price: 19, icon: "🧀", rating: 4.6, reviews: 73 },
        { id: 24, name: "Rolling Pin", desc: "French tapered, maple wood, 50cm", price: 32, icon: "🥧", rating: 4.5, reviews: 55 },
        { id: 25, name: "Apron Linen", desc: "Cross-back design, stone-washed linen, 4 pockets", price: 48, icon: "👨‍🍳", rating: 4.7, reviews: 98, badge: "new" }
    ],
    ceramics: [
        { id: 26, name: "Artisan Dinner Plate", desc: "Hand-painted stoneware, 10-inch, reactive glaze", price: 52, icon: "🏺", rating: 4.8, reviews: 167 },
        { id: 27, name: "Clay Coffee Cup", desc: "Textured clay with raw edge, 250ml", price: 24, icon: "☕", rating: 4.6, reviews: 89 },
        { id: 28, name: "Ceramic Serving Bowl", desc: "Deep serving bowl, reactive glaze, 2L", price: 38, icon: "🥣", rating: 4.7, reviews: 112 },
        { id: 29, name: "Tea Mug Set", desc: "Set of 2 with bamboo lids, 350ml each", price: 42, icon: "🍵", rating: 4.5, reviews: 76 },
        { id: 30, name: "Porcelain Vase", desc: "Matte white, sculptural form, 30cm tall", price: 68, icon: "🌸", rating: 4.9, reviews: 203, badge: "bestseller" },
        { id: 31, name: "Ceramic Teapot", desc: "Stoneware, built-in infuser, 1.2L", price: 75, icon: "🫖", rating: 4.7, reviews: 145 },
        { id: 32, name: "Appetizer Plate Set", desc: "Set of 6, gold rim, 6-inch", price: 58, icon: "🍰", rating: 4.6, reviews: 67 },
        { id: 33, name: "Ramen Bowl", desc: "Large ceramic, 1.5L, chopstick rest built-in", price: 34, icon: "🍜", rating: 4.8, reviews: 198 },
        { id: 34, name: "Candle Holder Pair", desc: "Speckled stoneware, fits taper candles", price: 28, icon: "🕯️", rating: 4.3, reviews: 34 },
        { id: 35, name: "Plant Pot Set", desc: "Set of 3, drainage holes, terracotta", price: 45, icon: "🪴", rating: 4.5, reviews: 89 },
        { id: 36, name: "Butter Dish", desc: "Covered, stoneware, fits standard sticks", price: 22, icon: "🧈", rating: 4.2, reviews: 28 },
        { id: 37, name: "Salt & Pepper Shakers", desc: "Wheel-thrown, matching set, cork stoppers", price: 26, icon: "🧂", rating: 4.4, reviews: 51 },
        { id: 38, name: "Ceramic Pitcher", desc: "Water jug, 1.5L, hand-dipped glaze", price: 48, icon: "🏺", rating: 4.6, reviews: 74 },
        { id: 39, name: "Sake Set", desc: "1 bottle + 4 cups, traditional blue pattern", price: 55, icon: "🍶", rating: 4.7, reviews: 92 },
        { id: 40, name: "Jewelry Dish", desc: "Ring tray, marbled clay, gold accent", price: 18, icon: "💍", rating: 4.5, reviews: 63 },
        { id: 41, name: "Espresso Cup Set", desc: "Set of 4, stackable, 80ml each", price: 36, icon: "☕", rating: 4.6, reviews: 47 },
        { id: 42, name: "Ceramic Canister", desc: "Airtight lid, coffee storage, 800ml", price: 32, icon: "☕", rating: 4.4, reviews: 38 },
        { id: 43, name: "Soap Dispenser", desc: "Refillable, pump top, glazed stoneware", price: 24, icon: "🧼", rating: 4.3, reviews: 29 },
        { id: 44, name: "Wall Planter", desc: "Hanging, geometric shape, 15cm", price: 38, icon: "🌿", rating: 4.5, reviews: 56, badge: "new" },
        { id: 45, name: "Incense Holder", desc: "Lotus shape, ash catcher, ceramic", price: 16, icon: "🪷", rating: 4.2, reviews: 22 },
        { id: 46, name: "Ceramic Coaster Set", desc: "Set of 6, cork backing, abstract design", price: 28, icon: "🍺", rating: 4.4, reviews: 41 },
        { id: 47, name: "Gravy Boat", desc: "Stoneware, 500ml, matching underplate", price: 30, icon: "🍗", rating: 4.3, reviews: 33 },
        { id: 48, name: "Egg Cup Set", desc: "Set of 4, footed base, pastel colors", price: 20, icon: "🥚", rating: 4.1, reviews: 19 },
        { id: 49, name: "Ceramic Clock", desc: "Wall clock, silent movement, 30cm", price: 65, icon: "🕐", rating: 4.6, reviews: 78 },
        { id: 50, name: "Desk Organizer", desc: "3 compartments, pen holder, glazed finish", price: 35, icon: "✏️", rating: 4.4, reviews: 45 }
    ],
    leather: [
        { id: 51, name: "Mini Leather Purse", desc: "Full-grain leather, brass clasp, crossbody", price: 120, icon: "👜", rating: 4.8, reviews: 234, badge: "bestseller" },
        { id: 52, name: "Laptop Briefcase", desc: "Fits 16-inch, padded compartments, tan", price: 195, icon: "💼", rating: 4.7, reviews: 189 },
        { id: 53, name: "Oxford Leather Shoes", desc: "Hand-stitched, vegetable tanned, size 7-12", price: 240, icon: "👞", rating: 4.9, reviews: 312 },
        { id: 54, name: "Gym Duffel Bag", desc: "Water-resistant lining, shoe pocket, 45L", price: 165, icon: "🎒", rating: 4.6, reviews: 145 },
        { id: 55, name: "Bifold Wallet", desc: "RFID blocking, 8 card slots, black", price: 65, icon: "👛", rating: 4.7, reviews: 178 },
        { id: 56, name: "Leather Belt", desc: "Reversible, black/brown, automatic buckle", price: 48, icon: "🎗️", rating: 4.5, reviews: 92 },
        { id: 57, name: "Card Holder", desc: "Slim, 6 cards, pull-tab, cognac", price: 35, icon: "💳", rating: 4.6, reviews: 87 },
        { id: 58, name: "Weekender Bag", desc: "Full-grain, 60L capacity, detachable strap", price: 280, icon: "🧳", rating: 4.8, reviews: 156 },
        { id: 59, name: "Leather Backpack", desc: "Roll-top, laptop sleeve, water-resistant", price: 220, icon: "🎒", rating: 4.7, reviews: 134 },
        { id: 60, name: "Watch Strap", desc: "Quick-release, 20mm, Italian leather", price: 42, icon: "⌚", rating: 4.4, reviews: 56 },
        { id: 61, name: "Passport Holder", desc: "RFID, 4 card slots, hand-burnished", price: 38, icon: "🛂", rating: 4.5, reviews: 73 },
        { id: 62, name: "Key Organizer", desc: "Compact, holds 7 keys, leather wrap", price: 28, icon: "🔑", rating: 4.3, reviews: 41 },
        { id: 63, name: "Messenger Bag", desc: "Canvas + leather trim, 15-inch laptop", price: 145, icon: "💼", rating: 4.6, reviews: 98 },
        { id: 64, name: "Leather Gloves", desc: "Touchscreen compatible, fleece-lined", price: 55, icon: "🧤", rating: 4.4, reviews: 62 },
        { id: 65, name: "Desk Pad", desc: "Full-grain, 90x45cm, mouse-friendly", price: 78, icon: "🖱️", rating: 4.7, reviews: 45 },
        { id: 66, name: "Sunglasses Case", desc: "Hard shell, suede lining, magnetic close", price: 32, icon: "🕶️", rating: 4.3, reviews: 34 },
        { id: 67, name: "Tote Bag", desc: "Unlined, shoulder straps, natural tan", price: 95, icon: "🛍️", rating: 4.6, reviews: 112 },
        { id: 68, name: "AirPods Case", desc: "Snap closure, carabiner, hand-dyed", price: 25, icon: "🎧", rating: 4.2, reviews: 28 },
        { id: 69, name: "Luggage Tag Set", desc: "Set of 2, privacy flap, brass hardware", price: 22, icon: "🏷️", rating: 4.1, reviews: 19 },
        { id: 70, name: "Journal Cover", desc: "A5 size, refillable, pen loop, embossable", price: 58, icon: "📓", rating: 4.5, reviews: 67 },
        { id: 71, name: "Camera Strap", desc: "Neoprene padded, adjustable, vintage brown", price: 45, icon: "📷", rating: 4.6, reviews: 54 },
        { id: 72, name: "Cigar Case", desc: "Holds 3, cedar-lined, humidifier", price: 85, icon: "🚬", rating: 4.4, reviews: 32 },
        { id: 73, name: "Leather Apron", desc: "Barista style, cross-back, tool pockets", price: 110, icon: "👨‍🍳", rating: 4.7, reviews: 78 },
        { id: 74, name: "Wine Carrier", desc: "2-bottle, insulated, shoulder strap", price: 68, icon: "🍷", rating: 4.5, reviews: 46 },
        { id: 75, name: "Bracelet Cuff", desc: "Hand-stamped, adjustable, unisex", price: 38, icon: "📿", rating: 4.3, reviews: 29, badge: "new" }
    ],
    fashion: [
        { id: 76, name: "Linen Summer Dress", desc: "Breathable linen, midi length, sage green", price: 145, size: "large", icon: "👗", rating: 4.7, reviews: 198 },
        { id: 77, name: "Silk Evening Gown", desc: "Floor-length, cowl neck, champagne", price: 320, size: "tall", icon: "👘", rating: 4.9, reviews: 256, badge: "bestseller" },
        { id: 78, name: "Cotton Midi Dress", desc: "Puff sleeves, floral print, belted", price: 98, size: "wide", icon: "👚", rating: 4.6, reviews: 134 },
        { id: 79, name: "Velvet Wrap Dress", desc: "Long sleeve, tie waist, deep plum", price: 175, size: "normal", icon: "🥻", rating: 4.8, reviews: 167 },
        { id: 80, name: "Boho Maxi Dress", desc: "Tiered skirt, off-shoulder, paisley", price: 130, size: "large", icon: "🧥", rating: 4.5, reviews: 98 },
        { id: 81, name: "Minimal Shift Dress", desc: "Structured crepe, knee-length, black", price: 115, size: "wide", icon: "🦺", rating: 4.6, reviews: 112 },
        { id: 82, name: "Knit Cardigan", desc: "Oversized, cable knit, cream", price: 88, size: "normal", icon: "🧶", rating: 4.7, reviews: 145 },
        { id: 83, name: "Tailored Blazer", desc: "Single-breasted, wool blend, navy", price: 210, size: "wide", icon: "🧥", rating: 4.8, reviews: 189 },
        { id: 84, name: "Wide Leg Trousers", desc: "High-waist, pleated front, camel", price: 125, size: "tall", icon: "👖", rating: 4.5, reviews: 87 },
        { id: 85, name: "Silk Blouse", desc: "Button-front, relaxed fit, ivory", price: 135, size: "normal", icon: "👔", rating: 4.6, reviews: 103 },
        { id: 86, name: "Pleated Skirt", desc: "Midi length, metallic sheen, rose gold", price: 110, size: "large", icon: "👗", rating: 4.4, reviews: 76 },
        { id: 87, name: "Cashmere Sweater", desc: "Crew neck, ribbed cuffs, charcoal", price: 195, size: "normal", icon: "🧥", rating: 4.9, reviews: 234 },
        { id: 88, name: "Denim Jacket", desc: "Vintage wash, boxy fit, distressed", price: 145, size: "wide", icon: "🧥", rating: 4.6, reviews: 156 },
        { id: 89, name: "Palazzo Pants", desc: "Flowy, elastic waist, tropical print", price: 95, size: "tall", icon: "👖", rating: 4.3, reviews: 67 },
        { id: 90, name: "Wrap Top", desc: "V-neck, tie side, striped cotton", price: 78, size: "normal", icon: "👚", rating: 4.5, reviews: 89 },
        { id: 91, name: "Trench Coat", desc: "Double-breasted, water-resistant, beige", price: 265, size: "large", icon: "🧥", rating: 4.8, reviews: 198 },
        { id: 92, name: "Cocktail Dress", desc: "Sequin bodice, A-line skirt, midnight blue", price: 240, size: "normal", icon: "👗", rating: 4.7, reviews: 145 },
        { id: 93, name: "Linen Shirt", desc: "Relaxed fit, camp collar, white", price: 85, size: "wide", icon: "👔", rating: 4.5, reviews: 112 },
        { id: 94, name: "Jumpsuit", desc: "Wide-leg, belted waist, emerald", price: 155, size: "tall", icon: "👖", rating: 4.6, reviews: 134 },
        { id: 95, name: "Puffer Vest", desc: "Lightweight, quilted, stand collar, olive", price: 110, size: "normal", icon: "🧥", rating: 4.4, reviews: 78 },
        { id: 96, name: "Satin Slip Dress", desc: "Bias cut, lace trim, blush pink", price: 125, size: "large", icon: "👗", rating: 4.7, reviews: 167 },
        { id: 97, name: "Cropped Sweater", desc: "Ribbed, mock neck, balloon sleeves, mauve", price: 92, size: "normal", icon: "🧶", rating: 4.5, reviews: 95 },
        { id: 98, name: "Paperbag Shorts", desc: "High-rise, belted, linen blend, sand", price: 68, size: "wide", icon: "🩳", rating: 4.3, reviews: 56 },
        { id: 99, name: "Maxi Skirt", desc: "Tiered, elastic waist, block print", price: 105, size: "tall", icon: "👗", rating: 4.6, reviews: 123 },
        { id: 100, name: "Oversized Scarf", desc: "Wool-cashmere, fringed, plaid", price: 75, size: "normal", icon: "🧣", rating: 4.5, reviews: 87 }
    ]
};

/* ============================================
   STATE
   ============================================ */
let cart = [];
let wishlist = [];
let currentUser = null;
let savedAddresses = [];
let orders = [];
let settings = {};
let currentPage = 'shop';
let currentAuthTab = 'login';
let currentOrderFilter = 'all';
let currentCheckoutAddress = null;

function loadState() {
    try {
        const savedCart = localStorage.getItem('luxeCart');
        const savedWishlist = localStorage.getItem('luxeWishlist');
        const savedUser = localStorage.getItem('luxeUser');
        const savedAddr = localStorage.getItem('luxeAddresses');
        const savedOrders = localStorage.getItem('luxeOrders');
        const savedSettings = localStorage.getItem('luxeSettings');
        if (savedCart) cart = JSON.parse(savedCart);
        if (savedWishlist) wishlist = JSON.parse(savedWishlist);
        if (savedUser) currentUser = JSON.parse(savedUser);
        if (savedAddr) savedAddresses = JSON.parse(savedAddr);
        if (savedOrders) orders = JSON.parse(savedOrders);
        if (savedSettings) settings = JSON.parse(savedSettings);
    } catch (e) { console.log('No saved state'); }
}
function saveCart() { localStorage.setItem('luxeCart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('luxeWishlist', JSON.stringify(wishlist)); }
function saveUser() {
    if (currentUser) localStorage.setItem('luxeUser', JSON.stringify(currentUser));
    else localStorage.removeItem('luxeUser');
}
function saveAddresses() { localStorage.setItem('luxeAddresses', JSON.stringify(savedAddresses)); }
function saveOrders() { localStorage.setItem('luxeOrders', JSON.stringify(orders)); }
function saveSettings() { localStorage.setItem('luxeSettings', JSON.stringify(settings)); }

/* ============================================
   BACKEND API HELPERS
   ============================================ */
async function apiPost(endpoint, data) {
    const res = await fetch(`${window.API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include'
    });
    return res.json();
}

async function apiGet(endpoint) {
    const res = await fetch(`${window.API_BASE}${endpoint}`, { credentials: 'include' });
    return res.json();
}


/* ============================================
   UTILS
   ============================================ */
function getAllProducts() {
    return [...products.kitchen, ...products.ceramics, ...products.leather, ...products.fashion];
}
function findProduct(id) { return getAllProducts().find(p => p.id === id); }
function getProductCategory(id) { return Object.keys(products).find(k => products[k].some(p => p.id === id)); }

function formatStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) html += '<span class="star">★</span>';
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) html += '<span class="star">★</span>';
        else html += '<span class="star empty">★</span>';
    }
    return html;
}
function getBadgeHTML(badge) {
    if (!badge) return '';
    const labels = { new: 'New', bestseller: 'Best Seller', sale: 'Sale' };
    return '<span class="product-badge badge-' + badge + '">' + (labels[badge] || badge) + '</span>';
}

/* ============================================
   ROUTER
   ============================================ */
function showPage(page) {
    currentPage = page;
    document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(page + 'View');
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.overflow = '';
    if (page === 'orders') renderOrders();
    if (page === 'wishlist') renderWishlistPage();
    if (page === 'settings') loadSettings();
}

/* ============================================
   RENDER PRODUCTS
   ============================================ */
function renderProducts(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    products[category].forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = (index * 0.04) + 's';
        const inWishlist = wishlist.includes(product.id);
        card.innerHTML =
            getBadgeHTML(product.badge) +
            '<button class="wishlist-btn ' + (inWishlist ? 'active' : '') + '" data-id="' + product.id + '" aria-label="Add to wishlist">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="' + (inWishlist ? '#e74c3c' : 'none') + '" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>' +
            '</button>' +
            '<div class="product-image"><div style="font-size:72px; opacity:0.25;">' + product.icon + '</div><button class="neo-btn quick-view-trigger" data-id="' + product.id + '" style="padding:8px 16px; font-size:11px;">Quick View</button></div>' +
            '<div class="product-info">' +
            '<div class="star-rating">' + formatStars(product.rating) + '<span class="rating-count">(' + product.reviews + ')</span></div>' +
            '<h3 class="product-title">' + product.name + '</h3>' +
            '<p class="product-desc">' + product.desc + '</p>' +
            '<div class="product-footer"><span class="liquid-price">$' + product.price + '</span><button class="neo-btn add-cart-btn" data-id="' + product.id + '" data-cat="' + category + '" style="padding:10px 18px; font-size:12px;">Add to Cart</button></div>' +
            '</div>';
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
        container.appendChild(card);
    });
}

function renderBentoGrid() {
    const container = document.getElementById('fashionGrid');
    if (!container) return;
    container.innerHTML = '';
    const sizeMap = { large: 'large', tall: 'tall', wide: 'wide', normal: '' };
    products.fashion.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'bento-card ' + (sizeMap[product.size] || '');
        card.style.animationDelay = (index * 0.05) + 's';
        card.dataset.id = product.id;
        card.innerHTML =
            '<div class="bento-image"><div style="font-size:90px; opacity:0.18;">' + product.icon + '</div></div>' +
            '<div class="bento-overlay"><h3>' + product.name + '</h3><div class="star-rating" style="margin-bottom:6px;">' + formatStars(product.rating) + '</div><span class="liquid-price">$' + product.price + '</span></div>';
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
        container.appendChild(card);
    });
}

/* ============================================
   EVENT DELEGATION (Fixes Wishlist Bug)
   ============================================ */
function initEventDelegation() {
    const grids = ['kitchenGrid', 'ceramicsGrid', 'leatherGrid', 'wishlistGrid'];
    grids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', handleGridClick);
    });
    const fashionGrid = document.getElementById('fashionGrid');
    if (fashionGrid) fashionGrid.addEventListener('click', handleFashionClick);
}

function handleGridClick(e) {
    const btn = e.target.closest('.add-cart-btn');
    if (btn) { e.stopPropagation(); addToCart(parseInt(btn.dataset.id), btn.dataset.cat); return; }
    const wishBtn = e.target.closest('.wishlist-btn');
    if (wishBtn) { e.stopPropagation(); toggleWishlist(parseInt(wishBtn.dataset.id)); return; }
    const qvBtn = e.target.closest('.quick-view-trigger');
    if (qvBtn) { e.stopPropagation(); openQuickView(parseInt(qvBtn.dataset.id)); return; }
}

function handleFashionClick(e) {
    const card = e.target.closest('.bento-card');
    if (card && !e.target.closest('button')) {
        const id = parseInt(card.dataset.id);
        if (id) addToCart(id, 'fashion');
    }
}

/* ============================================
   3D TILT
   ============================================ */
function handleTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -8;
    const ry = ((x - cx) / cx) * 8;
    card.style.transform = 'perspective(1000px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateZ(16px) scale(1.02)';
}
function resetTilt(e) { e.currentTarget.style.transform = ''; }

/* ============================================
   CART
   ============================================ */
function addToCart(productId, category) {
    const product = products[category].find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) { existing.qty += 1; }
    else { cart.push({ ...product, qty: 1, category }); }
    saveCart();
    updateCartUI();
    showToast('✅ ' + product.name + ' added to cart!', 'success');
}

function updateQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    saveCart();
    updateCartUI();
}
function removeFromCart(index) {
    const name = cart[index].name;
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast('🗑️ ' + name + ' removed from cart', 'info');
}

function updateCartUI() {
    const countEl = document.getElementById('cartCount');
    const itemsEl = document.getElementById('cartItems');
    const subtotalEl = document.getElementById('cartSubtotal');
    const shippingEl = document.getElementById('cartShipping');
    const totalEl = document.getElementById('cartTotal');
    const itemCountEl = document.getElementById('cartItemCount');
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    countEl.textContent = totalQty;
    if (itemCountEl) itemCountEl.textContent = '(' + totalQty + ' items)';

    if (cart.length === 0) {
        itemsEl.innerHTML = '<div class="empty-cart"><div class="empty-cart-icon">🛒</div><p style="font-weight:600; margin-bottom:4px;">Your cart is empty</p><p style="font-size:13px;">Add some beautiful items to get started!</p></div>';
        subtotalEl.textContent = '$0.00'; shippingEl.textContent = '$0.00'; totalEl.textContent = '$0.00';
        return;
    }
    itemsEl.innerHTML = cart.map((item, i) =>
        '<div class="cart-item"><div class="cart-item-img">' + item.icon + '</div><div class="cart-item-info"><h4>' + item.name + '</h4><p>$' + item.price + '</p></div>' +
        '<div class="cart-item-qty"><button class="qty-btn" data-action="minus" data-index="' + i + '">−</button><span style="font-weight:600; min-width:20px; text-align:center; font-size:13px;">' + item.qty + '</span><button class="qty-btn" data-action="plus" data-index="' + i + '">+</button></div>' +
        '<button class="close-cart remove-item" data-index="' + i + '" style="width:32px; height:32px; flex-shrink:0;">×</button></div>'
    ).join('');

    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => { const idx = parseInt(btn.dataset.index); const delta = btn.dataset.action === 'plus' ? 1 : -1; updateQty(idx, delta); });
    });
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.index)));
    });

    const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    const shipping = subtotal > 150 ? 0 : 12;
    const total = subtotal + shipping;
    subtotalEl.textContent = '$' + subtotal.toFixed(2);
    shippingEl.textContent = shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2);
    totalEl.textContent = '$' + total.toFixed(2);
}

function toggleCart(show) {
    const overlay = document.getElementById('cartOverlay');
    if (show === undefined) show = !overlay.classList.contains('active');
    overlay.classList.toggle('active', show);
    document.body.style.overflow = show ? 'hidden' : '';
}

/* ============================================
   WISHLIST (Fixed - No Duplicate Listeners)
   ============================================ */
function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    const product = findProduct(productId);
    if (!product) return;
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast('💔 ' + product.name + ' removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        showToast('❤️ ' + product.name + ' added to wishlist!', 'success');
    }
    saveWishlist();
    updateWishlistUI();
    updateWishlistButtons(productId);
    if (currentPage === 'wishlist') renderWishlistPage();
}

function updateWishlistButtons(productId) {
    const isActive = wishlist.includes(productId);
    document.querySelectorAll('.wishlist-btn[data-id="' + productId + '"]').forEach(btn => {
        btn.classList.toggle('active', isActive);
        const svg = btn.querySelector('svg');
        if (svg) svg.setAttribute('fill', isActive ? '#e74c3c' : 'none');
    });
}

function updateWishlistUI() {
    const badge = document.getElementById('wishlistBadge');
    if (badge) badge.textContent = wishlist.length;
}

function renderWishlistPage() {
    const grid = document.getElementById('wishlistGrid');
    const empty = document.getElementById('wishlistEmpty');
    if (!grid) return;
    grid.innerHTML = '';
    if (wishlist.length === 0) {
        grid.style.display = 'none';
        if (empty) empty.style.display = 'block';
        return;
    }
    grid.style.display = 'grid';
    if (empty) empty.style.display = 'none';
    wishlist.forEach((id, index) => {
        const product = findProduct(id);
        if (!product) return;
        const cat = getProductCategory(id);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = (index * 0.04) + 's';
        card.innerHTML =
            '<button class="wishlist-btn active" data-id="' + product.id + '" aria-label="Remove from wishlist"><svg width="16" height="16" viewBox="0 0 24 24" fill="#e74c3c" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>' +
            '<div class="product-image"><div style="font-size:72px; opacity:0.25;">' + product.icon + '</div><button class="neo-btn quick-view-trigger" data-id="' + product.id + '" style="padding:8px 16px; font-size:11px;">Quick View</button></div>' +
            '<div class="product-info"><div class="star-rating">' + formatStars(product.rating) + '<span class="rating-count">(' + product.reviews + ')</span></div><h3 class="product-title">' + product.name + '</h3><p class="product-desc">' + product.desc + '</p>' +
            '<div class="product-footer"><span class="liquid-price">$' + product.price + '</span><button class="neo-btn add-cart-btn" data-id="' + product.id + '" data-cat="' + cat + '" style="padding:10px 18px; font-size:12px;">Add to Cart</button></div></div>';
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
        grid.appendChild(card);
    });
}

/* ============================================
   QUICK VIEW
   ============================================ */
function openQuickView(productId) {
    const product = findProduct(productId);
    if (!product) return;
    const content = document.getElementById('quickViewContent');
    content.innerHTML =
        '<div class="quick-view-image"><div style="font-size:100px; opacity:0.3;">' + product.icon + '</div></div>' +
        '<div class="quick-view-info">' + getBadgeHTML(product.badge) + '<h3>' + product.name + '</h3>' +
        '<div class="star-rating">' + formatStars(product.rating) + '<span class="rating-count">' + product.reviews + ' reviews</span></div>' +
        '<p>' + product.desc + '</p><span class="liquid-price">$' + product.price + '</span>' +
        '<div class="quick-view-actions"><button class="neo-btn primary add-cart-btn-qv" data-id="' + product.id + '" style="flex:1;">Add to Cart</button>' +
        '<button class="neo-btn wishlist-btn-qv" data-id="' + product.id + '"><svg width="18" height="18" viewBox="0 0 24 24" fill="' + (wishlist.includes(product.id) ? '#e74c3c' : 'none') + '" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button></div></div>';
    document.getElementById('quickViewOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    content.querySelector('.add-cart-btn-qv').addEventListener('click', () => { const cat = getProductCategory(productId); addToCart(productId, cat); closeQuickView(); });
    content.querySelector('.wishlist-btn-qv').addEventListener('click', () => toggleWishlist(productId));
}
function closeQuickView() {
    document.getElementById('quickViewOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

/* ============================================
   CHECKOUT FLOW
   ============================================ */
function proceedToCheckout() {
    if (cart.length === 0) { showToast('Your cart is empty!', 'error'); return; }
    toggleCart(false);
    if (!currentUser) { openAuthModal(); }
    else { openAddressModal(); }
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
    document.getElementById('loginFormElement').classList.toggle('hidden', tab !== 'login');
    document.getElementById('signupFormElement').classList.toggle('hidden', tab !== 'signup');
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    if (!email || !password) { showToast('Please fill in all fields', 'error'); return; }
    currentUser = { email, name: email.split('@')[0], id: Date.now() };
    saveUser();
    addLoginHistory('MacBook Pro — Chrome');
    updateUserUI();
    closeAuthModal();
    showToast('👋 Welcome back, ' + currentUser.name + '!', 'success');
    generateDemoOrders();
    if (cart.length > 0) setTimeout(() => openAddressModal(), 300);
}

function handleSignup() {
    const firstName = document.getElementById('signupFirstName').value.trim();
    const lastName = document.getElementById('signupLastName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirmPassword').value;
    const agree = document.getElementById('agreeTerms').checked;
    if (!firstName || !lastName || !email || !password) { showToast('Please fill in all required fields', 'error'); return; }
    if (password.length < 8) { showToast('Password must be at least 8 characters', 'error'); return; }
    if (password !== confirm) { showToast('Passwords do not match', 'error'); return; }
    if (!agree) { showToast('Please agree to the terms', 'error'); return; }
    currentUser = { email, name: firstName + ' ' + lastName, id: Date.now() };
    saveUser();
    addLoginHistory('MacBook Pro — Chrome');
    updateUserUI();
    closeAuthModal();
    showToast('🎉 Welcome to LUXE CRAFT, ' + firstName + '!', 'success');
    generateDemoOrders();
    if (cart.length > 0) setTimeout(() => openAddressModal(), 300);
}

function handleLogout() {
    fetch('http://localhost:3000/api/logout', { credentials: 'include' })
        .then(() => {
            currentUser = null;
            saveUser();
            updateUserUI();
            showToast('Signed out successfully', 'info');
            document.getElementById('userDropdown').classList.remove('active');
            showPage('shop');
        })
        .catch(() => {
            currentUser = null;
            saveUser();
            updateUserUI();
            showPage('shop');
        });
}

function updateUserUI() {
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const logoutBtn = document.getElementById('logoutBtn');
    if (currentUser) {
        userName.textContent = currentUser.name;
        userEmail.textContent = currentUser.email;
        if (logoutBtn) logoutBtn.style.display = 'flex';
    } else {
        userName.textContent = 'Guest';
        userEmail.textContent = 'Not signed in';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

function addLoginHistory(device) {
    if (!settings.loginHistory) settings.loginHistory = [];
    settings.loginHistory.unshift({ device, date: new Date().toLocaleString() });
    if (settings.loginHistory.length > 5) settings.loginHistory.pop();
    saveSettings();
}

/* ============================================
   ADDRESS MODAL (Checkout)
   ============================================ */
function openAddressModal() {
    document.getElementById('addressOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    if (savedAddresses.length > 0) {
        const addr = savedAddresses[0];
        document.getElementById('addrFirstName').value = addr.firstName || '';
        document.getElementById('addrLastName').value = addr.lastName || '';
        document.getElementById('addrPhone').value = addr.phone || '';
        document.getElementById('addrStreet').value = addr.street || '';
        document.getElementById('addrApt').value = addr.apt || '';
        document.getElementById('addrCity').value = addr.city || '';
        document.getElementById('addrState').value = addr.state || '';
        document.getElementById('addrZip').value = addr.zip || '';
        document.getElementById('addrCountry').value = addr.country || 'US';
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
        showToast('Please fill in all required fields', 'error'); return;
    }
    const newAddr = { firstName, lastName, phone, street, apt: document.getElementById('addrApt').value.trim(), city, state, zip, country };
    if (document.getElementById('saveAddress').checked) {
        savedAddresses.unshift(newAddr);
        saveAddresses();
    }
    closeAddressModal();
    openCheckoutModal(newAddr);
}

/* ============================================
   CHECKOUT / PAYMENT
   ============================================ */
function openCheckoutModal(address) {
    currentCheckoutAddress = address;
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
    itemsContainer.innerHTML = cart.map(item =>
        '<div class="checkout-item"><span>' + item.icon + ' ' + item.name + ' x' + item.qty + '</span><span style="font-weight:600;">$' + (item.price * item.qty).toFixed(2) + '</span></div>'
    ).join('');
    if (currentCheckoutAddress) {
        addressDisplay.innerHTML =
            '<p><strong>' + currentCheckoutAddress.firstName + ' ' + currentCheckoutAddress.lastName + '</strong></p>' +
            '<p>' + currentCheckoutAddress.street + (currentCheckoutAddress.apt ? ', ' + currentCheckoutAddress.apt : '') + '</p>' +
            '<p>' + currentCheckoutAddress.city + ', ' + currentCheckoutAddress.state + ' ' + currentCheckoutAddress.zip + '</p>' +
            '<p>' + currentCheckoutAddress.country + '</p>' +
            '<p style="margin-top:4px; opacity:0.7;">📞 ' + currentCheckoutAddress.phone + '</p>';
    }
    const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    const shipping = subtotal > 150 ? 0 : 12;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    document.getElementById('checkoutSubtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2);
    document.getElementById('checkoutTax').textContent = '$' + tax.toFixed(2);
    document.getElementById('checkoutTotal').textContent = '$' + total.toFixed(2);
}

function closeSuccessAndReset() {
    document.getElementById('successOverlay').classList.remove('active');
    document.body.style.overflow = '';
    cart = [];
    saveCart();
    updateCartUI();
}

/* ============================================
   ORDERS PAGE
   ============================================ */
function generateDemoOrders() {
    if (orders.length > 0) return;
    const all = getAllProducts();
    const statuses = ['delivered', 'shipped', 'processing'];
    const now = new Date();
    for (let i = 0; i < 3; i++) {
        const numItems = 2 + Math.floor(Math.random() * 3);
        const items = [];
        for (let j = 0; j < numItems; j++) {
            const p = all[Math.floor(Math.random() * all.length)];
            items.push({ ...p, qty: 1 + Math.floor(Math.random() * 2), category: getProductCategory(p.id) });
        }
        const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
        const shipping = subtotal > 150 ? 0 : 12;
        const tax = subtotal * 0.08;
        const date = new Date(now);
        date.setDate(date.getDate() - (i * 14 + Math.floor(Math.random() * 7)));
        orders.push({
            id: 'LC-' + date.getTime().toString(36).toUpperCase(),
            date: date.toISOString().split('T')[0],
            status: statuses[i % statuses.length],
            items, subtotal, shipping, tax,
            total: subtotal + shipping + tax,
            address: savedAddresses[0] || { firstName: 'John', lastName: 'Doe', street: '123 Main St', city: 'New York', state: 'NY', zip: '10001', country: 'US' },
            tracking: '1Z' + Math.random().toString(36).substr(2, 9).toUpperCase()
        });
    }
    saveOrders();
}

function renderOrders() {
    const list = document.getElementById('ordersList');
    const stats = document.getElementById('ordersStats');
    if (!list) return;
    const filtered = currentOrderFilter === 'all' ? orders : orders.filter(o => o.status === currentOrderFilter);
    const counts = { all: orders.length, processing: 0, shipped: 0, delivered: 0, cancelled: 0 };
    orders.forEach(o => { if (counts[o.status] !== undefined) counts[o.status]++; });
    if (stats) {
        stats.innerHTML =
            '<div class="stat-card"><h4>' + counts.all + '</h4><p>Total Orders</p></div>' +
            '<div class="stat-card"><h4>' + counts.processing + '</h4><p>Processing</p></div>' +
            '<div class="stat-card"><h4>' + counts.shipped + '</h4><p>Shipped</p></div>' +
            '<div class="stat-card"><h4>' + counts.delivered + '</h4><p>Delivered</p></div>';
    }
    if (filtered.length === 0) {
        list.innerHTML = "<div class=\"empty-state\"><div class=\"empty-state-icon\">📦</div><h3>No orders found</h3><p>You have not placed any orders yet. Start shopping!</p><button type=\"button\" class=\"neo-btn primary\" onclick=\"showPage('shop'); scrollToSection('kitchen');\" style=\"margin-top:10px;\">Shop Now</button></div>";
        return;
    }
    list.innerHTML = filtered.map(order => {
        const trackingSteps = ['Order Placed', 'Processing', 'Shipped', 'Delivered'];
        const stepIndex = { processing: 1, shipped: 2, delivered: 3, cancelled: -1 }[order.status] || 0;
        const trackingHTML = order.status === 'cancelled' ? '' :
            '<div class="tracking-bar">' + trackingSteps.map((step, i) =>
                '<div class="tracking-step ' + (i < stepIndex ? 'completed' : '') + ' ' + (i === stepIndex ? 'active' : '') + '"><div class="tracking-dot">' + (i < stepIndex ? '✓' : (i + 1)) + '</div><div class="tracking-label">' + step + '</div></div>'
            ).join('') + '</div>';
        return '<div class="order-card">' +
            '<div class="order-header"><div class="order-meta"><h4>' + order.id + '</h4><p>Placed on ' + new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) + ' • ' + order.items.reduce((s, i) => s + i.qty, 0) + ' items</p></div>' +
            '<span class="order-status status-' + order.status + '">' + order.status + '</span></div>' +
            trackingHTML +
            '<div class="order-items-preview">' + order.items.slice(0, 4).map(i => '<div class="order-item-pill"><span>' + i.icon + '</span> ' + i.name + ' x' + i.qty + '</div>').join('') + (order.items.length > 4 ? '<div class="order-item-pill" style="opacity:0.6;">+' + (order.items.length - 4) + ' more</div>' : '') + '</div>' +
            '<div class="order-footer"><span class="order-total">$' + order.total.toFixed(2) + '</span><div class="order-actions"><button class="neo-btn" onclick="reorderItems(\'' + order.id + '\')">🔄 Reorder</button><button class="neo-btn" onclick="showToast(\'Tracking: ' + order.tracking + '\', \'info\')">📍 Track</button></div></div></div>';
    }).join('');
}

function reorderItems(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    order.items.forEach(item => {
        const cat = item.category || getProductCategory(item.id);
        const existing = cart.find(c => c.id === item.id);
        if (existing) existing.qty += item.qty;
        else cart.push({ ...item, category: cat });
    });
    saveCart();
    updateCartUI();
    showToast('🔄 ' + order.items.length + ' items added to cart', 'success');
    toggleCart(true);
}

/* ============================================
   SETTINGS PAGE
   ============================================ */
function loadSettings() {
    if (!currentUser) {
        showToast('Please sign in to access settings', 'error');
        showPage('shop');
        openAuthModal();
        return;
    }
    const nameParts = (currentUser.name || '').split(' ');
    document.getElementById('setFirstName').value = nameParts[0] || '';
    document.getElementById('setLastName').value = nameParts.slice(1).join(' ') || '';
    document.getElementById('setEmail').value = currentUser.email || '';
    document.getElementById('setPhone').value = settings.profile?.phone || '';
    renderSettingsAddresses();
    const notif = settings.notifications || { orders: true, shipping: true, promotions: false, newsletter: true };
    document.querySelectorAll('.toggle-switch[data-setting]').forEach(toggle => {
        const key = toggle.dataset.setting;
        toggle.classList.toggle('active', notif[key] !== false);
    });
    document.getElementById('prefCurrency').value = settings.preferences?.currency || 'USD';
    document.getElementById('prefLanguage').value = settings.preferences?.language || 'en';
    const history = settings.loginHistory || [];
    const list = document.getElementById('loginHistoryList');
    if (list) {
        list.innerHTML = history.length === 0 ? '<p>No recent login activity</p>' : history.map(h => '<div>🖥️ ' + h.device + ' — ' + h.date + '</div>').join('');
    }
}

function renderSettingsAddresses() {
    const container = document.getElementById('settingsAddressesList');
    if (!container) return;
    if (savedAddresses.length === 0) {
        container.innerHTML = '<p style="opacity:0.6; font-size:14px;">No saved addresses yet.</p>';
        return;
    }
    container.innerHTML = savedAddresses.map((addr, i) =>
        '<div class="address-card"><div class="address-card-info"><p class="addr-name">' + addr.firstName + ' ' + addr.lastName + '</p><p>' + addr.street + (addr.apt ? ', ' + addr.apt : '') + '</p><p>' + addr.city + ', ' + addr.state + ' ' + addr.zip + '</p><p>' + addr.country + '</p></div>' +
        '<div class="address-card-actions"><button onclick="deleteAddress(' + i + ')" title="Delete">🗑️</button></div></div>'
    ).join('');
}

function deleteAddress(index) {
    savedAddresses.splice(index, 1);
    saveAddresses();
    renderSettingsAddresses();
    showToast('Address removed', 'info');
}

function saveNewAddress() {
    const firstName = document.getElementById('newAddrFirstName').value.trim();
    const lastName = document.getElementById('newAddrLastName').value.trim();
    const street = document.getElementById('newAddrStreet').value.trim();
    const city = document.getElementById('newAddrCity').value.trim();
    const state = document.getElementById('newAddrState').value.trim();
    const zip = document.getElementById('newAddrZip').value.trim();
    const country = document.getElementById('newAddrCountry').value;
    if (!firstName || !lastName || !street || !city || !state || !zip) {
        showToast('Please fill in all required fields', 'error'); return;
    }
    savedAddresses.unshift({ firstName, lastName, street, apt: document.getElementById('newAddrApt').value.trim(), city, state, zip, country });
    saveAddresses();
    renderSettingsAddresses();
    document.getElementById('addressFormInline').style.display = 'none';
    showToast('Address saved', 'success');
}

/* ============================================
   SEARCH
   ============================================ */
function openSearch() {
    document.getElementById('searchOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('searchInput').focus(), 100);
}
function closeSearch() {
    document.getElementById('searchOverlay').classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}
function handleSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    if (!query.trim()) { resultsContainer.innerHTML = ''; return; }
    const all = getAllProducts();
    const filtered = all.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase())).slice(0, 8);
    if (filtered.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align:center; opacity:0.5; padding:20px;">No products found</p>';
        return;
    }
    resultsContainer.innerHTML = filtered.map(p => {
        const cat = getProductCategory(p.id);
        return '<div class="search-result-item" data-id="' + p.id + '" data-cat="' + cat + '"><span class="result-icon">' + p.icon + '</span><div class="result-info"><h4>' + p.name + '</h4><p>' + p.desc.substring(0, 40) + '...</p></div><span class="result-price">$' + p.price + '</span></div>';
    }).join('');
    resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => { const id = parseInt(item.dataset.id); const cat = item.dataset.cat; addToCart(id, cat); closeSearch(); });
    });
}

/* ============================================
   MOBILE MENU
   ============================================ */
function openMobileMenu() {
    document.getElementById('mobileOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
    document.getElementById('mobileOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

/* ============================================
   TOAST
   ============================================ */
function showToast(message, type) {
    type = type || 'info';
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.innerHTML = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* ============================================
   NAVIGATION & SCROLL
   ============================================ */
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        const offset = 100;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
}


/* ============================================
   STRIPE CHECKOUT & PAYMENT RETURN
   ============================================ */
function placeOrder() {
    if (cart.length === 0) { showToast('Your cart is empty!', 'error'); return; }

    const btn = document.getElementById('placeOrderBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '⏳ Redirecting to Secure Payment...';
    btn.disabled = true;

    const orderPayload = {
        items: cart.map(i => ({ id: i.id, name: i.name, desc: i.desc, price: i.price, qty: i.qty, icon: i.icon })),
        address: currentCheckoutAddress,
        customerEmail: currentUser ? currentUser.email : 'guest@luxecraft.com',
        customerName: currentUser ? currentUser.name : `${currentCheckoutAddress.firstName} ${currentCheckoutAddress.lastName}`,
        customerPhone: currentCheckoutAddress.phone
    };

    apiPost('/create-checkout-session', orderPayload)
        .then(data => {
            btn.disabled = false;
            btn.innerHTML = originalText;

            if (data.success && data.sessionUrl) {
                localStorage.setItem('pendingOrderId', data.orderId);
                window.location.href = data.sessionUrl;
            } else {
                showToast(data.error || 'Payment setup failed', 'error');
            }
        })
        .catch(err => {
            console.error(err);
            btn.disabled = false;
            btn.innerHTML = originalText;
            showToast('Connection error. Please try again.', 'error');
        });
}

function handlePaymentReturn() {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const cancelled = urlParams.get('cancelled');
    const orderId = urlParams.get('order_id');
    const sessionId = urlParams.get('session_id');

    if (success === 'true' && orderId && sessionId) {
        apiPost('/verify-payment', { session_id: sessionId, order_id: orderId })
            .then(data => {
                if (data.success) {
                    document.getElementById('orderDetails').innerHTML =
                        '<div class="order-received-banner">🎉 Your order has been received and confirmed!</div>' +
                        '<p><strong>Order ID:</strong> ' + orderId + '</p>' +
                        '<p><strong>Status:</strong> Payment Confirmed ✅</p>' +
                        '<p><strong>Items:</strong> ' + cart.reduce((s, i) => s + i.qty, 0) + '</p>' +
                        '<p style="margin-top:8px; font-size:12px; opacity:0.6;">A confirmation email has been sent. We will notify you when your order ships!</p>';
                    document.getElementById('successOverlay').classList.add('active');
                    document.body.style.overflow = 'hidden';

                    cart = [];
                    saveCart();
                    updateCartUI();
                    localStorage.removeItem('pendingOrderId');
                    generateDemoOrders();
                }
            })
            .catch(err => {
                showToast('Payment verified! Confirmation loading...', 'success');
            });

        window.history.replaceState({}, document.title, window.location.pathname);
    } else if (cancelled === 'true') {
        showToast('Payment cancelled. Your cart is saved.', 'info');
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

/* ============================================
   WHATSAPP INQUIRY
   ============================================ */
function initWhatsApp() {
    const btn = document.getElementById('whatsappBtn');
    const overlay = document.getElementById('whatsappOverlay');
    const close = document.getElementById('whatsappClose');
    const form = document.getElementById('whatsappForm');

    if (!btn) return;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('waName').value.trim();
        const email = document.getElementById('waEmail').value.trim();
        const phone = document.getElementById('waPhone').value.trim();
        const message = document.getElementById('waMessage').value.trim();

        apiPost('/inquiry', { name, email, phone, message })
            .then(data => {
                if (data.success) {
                    showToast('Inquiry sent! Opening WhatsApp...', 'success');
                }
            })
            .catch(() => {
                showToast('Opening WhatsApp...', 'info');
            });

        const text = `Hi LUXE CRAFT!%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone || 'N/A')}%0A%0A*Message:*%0A${encodeURIComponent(message)}`;
        const waUrl = `https://wa.me/${window.WHATSAPP_NUMBER}?text=${text}`;

        setTimeout(() => {
            window.open(waUrl, '_blank');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            form.reset();
        }, 800);
    });
}

/* ============================================
   FETCH REAL ORDERS FROM BACKEND
   ============================================ */
async function fetchBackendOrders() {
    try {
        const data = await apiGet('/orders');
        if (Array.isArray(data) && data.length > 0) {
            orders = data.map(o => ({
                id: o.order_id,
                date: o.created_at ? o.created_at.split('T')[0] : new Date().toISOString().split('T')[0],
                status: o.status || 'processing',
                items: Array.isArray(o.items) ? o.items : JSON.parse(o.items || '[]'),
                subtotal: o.subtotal || 0,
                shipping: o.shipping || 0,
                tax: o.tax || 0,
                total: o.total || 0,
                address: typeof o.shipping_address === 'string' ? JSON.parse(o.shipping_address) : o.shipping_address,
                tracking: '1Z' + Math.random().toString(36).substr(2, 9).toUpperCase()
            }));
            saveOrders();
        }
    } catch (e) {
        console.log('Backend orders not available, using local');
    }
}
async function checkSession() {
    try {
        const res = await fetch('http://localhost:3000/api/user', { credentials: 'include' });
        const data = await res.json();
        if (data.loggedIn && data.user) {
            currentUser = {
                id: data.user.id,
                email: data.user.email,
                name: data.user.name,
                photo: data.user.photo
            };
            saveUser();
            updateUserUI();
            addLoginHistory('MacBook Pro — Chrome');
        }
    } catch (e) {
        console.log('No active session');
    }
}
/* ============================================
   EVENT LISTENERS
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderProducts('kitchen', 'kitchenGrid');
    renderProducts('ceramics', 'ceramicsGrid');
    renderProducts('leather', 'leatherGrid');
    renderBentoGrid();
    updateCartUI();
    updateUserUI();
    updateWishlistUI();
    initEventDelegation();

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Parallax orbs + navbar shrink + back to top
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.floating-orb').forEach((orb, i) => {
            const speed = 0.3 + (i * 0.15);
            orb.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
        });
        const navbar = document.getElementById('navbar');
        if (scrolled > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        const backToTop = document.getElementById('backToTop');
        if (scrolled > 600) backToTop.classList.add('visible');
        else backToTop.classList.remove('visible');
    });

    // Nav links - smooth scroll
    document.querySelectorAll('a[data-nav]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href').replace('#', '');
            showPage('shop');
            setTimeout(() => scrollToSection(id), 100);
            closeMobileMenu();
        });
    });

    // Logo click -> home
    document.getElementById('navLogo').addEventListener('click', () => showPage('shop'));

    // Hero buttons
    document.getElementById('heroExplore').addEventListener('click', () => scrollToSection('kitchen'));
    document.getElementById('heroNew').addEventListener('click', () => scrollToSection('fashion'));

    // Cart
    document.getElementById('cartToggle').addEventListener('click', () => toggleCart(true));
    document.getElementById('cartClose').addEventListener('click', () => toggleCart(false));
    document.getElementById('cartOverlay').addEventListener('click', (e) => { if (e.target === document.getElementById('cartOverlay')) toggleCart(false); });
    document.getElementById('continueShoppingBtn').addEventListener('click', () => toggleCart(false));
    document.getElementById('checkoutBtn').addEventListener('click', proceedToCheckout);

    // Auth
    document.getElementById('userToggle').addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentUser) { document.getElementById('userDropdown').classList.toggle('active'); }
        else { openAuthModal(); }
    });
    document.getElementById('authClose').addEventListener('click', closeAuthModal);
    document.getElementById('authOverlay').addEventListener('click', (e) => { if (e.target === document.getElementById('authOverlay')) closeAuthModal(); });
    document.getElementById('tabLogin').addEventListener('click', () => switchAuthTab('login'));
    document.getElementById('tabSignup').addEventListener('click', () => switchAuthTab('signup'));
    document.getElementById('loginSubmit').addEventListener('click', handleLogin);
    document.getElementById('signupSubmit').addEventListener('click', handleSignup);
    document.getElementById('googleLogin').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/auth/google';
});
    document.getElementById('guestCheckoutBtn').addEventListener('click', () => { closeAuthModal(); setTimeout(() => openAddressModal(), 300); });

    // Address
    document.getElementById('addressClose').addEventListener('click', closeAddressModal);
    document.getElementById('addressOverlay').addEventListener('click', (e) => { if (e.target === document.getElementById('addressOverlay')) closeAddressModal(); });
    document.getElementById('addressBack').addEventListener('click', () => { closeAddressModal(); if (!currentUser) openAuthModal(); });
    document.getElementById('addressContinue').addEventListener('click', saveAddressAndContinue);

    // Checkout
    document.getElementById('checkoutClose').addEventListener('click', closeCheckoutModal);
    document.getElementById('checkoutOverlay').addEventListener('click', (e) => { if (e.target === document.getElementById('checkoutOverlay')) closeCheckoutModal(); });
    document.getElementById('checkoutBack').addEventListener('click', () => { closeCheckoutModal(); openAddressModal(); });
    document.getElementById('editAddressBtn').addEventListener('click', () => { closeCheckoutModal(); openAddressModal(); });
    document.getElementById('placeOrderBtn').addEventListener('click', placeOrder);

    // Success
    document.getElementById('successClose').addEventListener('click', closeSuccessAndReset);
    document.getElementById('successOverlay').addEventListener('click', (e) => { if (e.target === document.getElementById('successOverlay')) closeSuccessAndReset(); });

    // Quick View
    document.getElementById('quickViewClose').addEventListener('click', closeQuickView);
    document.getElementById('quickViewOverlay').addEventListener('click', (e) => { if (e.target === document.getElementById('quickViewOverlay')) closeQuickView(); });

    // Search
    document.getElementById('searchToggle').addEventListener('click', openSearch);
    document.getElementById('searchClose').addEventListener('click', closeSearch);
    document.getElementById('searchOverlay').addEventListener('click', (e) => { if (e.target === document.getElementById('searchOverlay')) closeSearch(); });
    document.getElementById('searchInput').addEventListener('input', (e) => handleSearch(e.target.value));
    document.getElementById('searchInput').addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); });

    // Mobile Menu
    document.getElementById('mobileMenuBtn').addEventListener('click', openMobileMenu);
    document.getElementById('mobileClose').addEventListener('click', closeMobileMenu);
    document.getElementById('mobileOverlay').addEventListener('click', (e) => { if (e.target === document.getElementById('mobileOverlay')) closeMobileMenu(); });
    document.getElementById('mobileLoginBtn').addEventListener('click', () => { closeMobileMenu(); setTimeout(() => openAuthModal(), 300); });
    document.getElementById('mobileOrdersLink').addEventListener('click', (e) => { e.preventDefault(); closeMobileMenu(); showPage('orders'); });
    document.getElementById('mobileWishlistLink').addEventListener('click', (e) => { e.preventDefault(); closeMobileMenu(); showPage('wishlist'); });
    document.getElementById('mobileSettingsLink').addEventListener('click', (e) => { e.preventDefault(); closeMobileMenu(); showPage('settings'); });

    // User dropdown close on outside click
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('userDropdown');
        const userToggle = document.getElementById('userToggle');
        if (dropdown && userToggle && !dropdown.contains(e.target) && !userToggle.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // User menu items
    document.getElementById('menuOrders').addEventListener('click', () => { document.getElementById('userDropdown').classList.remove('active'); showPage('orders'); });
    document.getElementById('menuAddresses').addEventListener('click', () => {
        document.getElementById('userDropdown').classList.remove('active');
        showPage('settings');
        setTimeout(() => switchSettingsTab('addresses'), 200);
    });
    document.getElementById('menuWishlist').addEventListener('click', () => { document.getElementById('userDropdown').classList.remove('active'); showPage('wishlist'); });
    document.getElementById('menuSettings').addEventListener('click', () => { document.getElementById('userDropdown').classList.remove('active'); showPage('settings'); });
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    // Promo bar
    document.getElementById('promoClose').addEventListener('click', () => {
        document.getElementById('promoBar').style.display = 'none';
        document.getElementById('navbar').style.top = '20px';
    });

    // Back to top
    document.getElementById('backToTop').addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    // Newsletter
    document.getElementById('newsletterBtn').addEventListener('click', () => {
        const email = document.getElementById('newsletterEmail').value.trim();
        if (!email || !email.includes('@')) { showToast('Please enter a valid email', 'error'); return; }
        showToast('🎉 Subscribed! Check your inbox for 10% off.', 'success');
        document.getElementById('newsletterEmail').value = '';
    });

    // Prevent native form submission
    ['newsletterForm', 'loginFormElement', 'signupFormElement', 'addressFormElement'].forEach(id => {
        const form = document.getElementById(id);
        if (form) form.addEventListener('submit', (e) => e.preventDefault());
    });

    // Payment option selection
    document.querySelectorAll('.payment-option input').forEach(radio => {
        radio.addEventListener('change', function() {
            document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));
            this.closest('.payment-option').classList.add('active');
        });
    });

    // Order tabs
    document.getElementById('ordersTabs').addEventListener('click', (e) => {
        const btn = e.target.closest('.neo-btn');
        if (!btn) return;
        document.querySelectorAll('#ordersTabs .neo-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentOrderFilter = btn.dataset.filter;
        renderOrders();
    });

    // Settings tabs
    document.querySelectorAll('.settings-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchSettingsTab(btn.dataset.tab));
    });

    // Settings - Profile
    document.getElementById('saveProfileBtn').addEventListener('click', () => {
        const firstName = document.getElementById('setFirstName').value.trim();
        const lastName = document.getElementById('setLastName').value.trim();
        const email = document.getElementById('setEmail').value.trim();
        const phone = document.getElementById('setPhone').value.trim();
        if (!firstName || !email) { showToast('Please fill required fields', 'error'); return; }
        currentUser.name = firstName + ' ' + lastName;
        currentUser.email = email;
        if (!settings.profile) settings.profile = {};
        settings.profile.phone = phone;
        saveUser();
        saveSettings();
        updateUserUI();
        showToast('Profile updated', 'success');
    });

    // Settings - Addresses
    document.getElementById('addAddressBtn').addEventListener('click', () => {
        const form = document.getElementById('addressFormInline');
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    });
    document.getElementById('cancelNewAddressBtn').addEventListener('click', () => {
        document.getElementById('addressFormInline').style.display = 'none';
    });
    document.getElementById('saveNewAddressBtn').addEventListener('click', saveNewAddress);

    // Settings - Notifications
    document.querySelectorAll('.toggle-switch[data-setting]').forEach(toggle => {
        toggle.addEventListener('click', () => toggle.classList.toggle('active'));
    });
    document.getElementById('saveNotifBtn').addEventListener('click', () => {
        if (!settings.notifications) settings.notifications = {};
        document.querySelectorAll('.toggle-switch[data-setting]').forEach(toggle => {
            settings.notifications[toggle.dataset.setting] = toggle.classList.contains('active');
        });
        saveSettings();
        showToast('Notification preferences saved', 'success');
    });

    // Settings - Security
    document.getElementById('changePassBtn').addEventListener('click', () => {
        const current = document.getElementById('secCurrentPass').value;
        const newPass = document.getElementById('secNewPass').value;
        const confirm = document.getElementById('secConfirmPass').value;
        if (!current || !newPass || !confirm) { showToast('Please fill all password fields', 'error'); return; }
        if (newPass.length < 8) { showToast('Password must be at least 8 characters', 'error'); return; }
        if (newPass !== confirm) { showToast('Passwords do not match', 'error'); return; }
        showToast('Password updated successfully', 'success');
        document.getElementById('secCurrentPass').value = '';
        document.getElementById('secNewPass').value = '';
        document.getElementById('secConfirmPass').value = '';
    });

    // Settings - Preferences
    document.getElementById('savePrefsBtn').addEventListener('click', () => {
        if (!settings.preferences) settings.preferences = {};
        settings.preferences.currency = document.getElementById('prefCurrency').value;
        settings.preferences.language = document.getElementById('prefLanguage').value;
        saveSettings();
        showToast('Preferences saved', 'success');
    });

    // Backend integrations
    checkSession();
    handlePaymentReturn();
    initWhatsApp();
    fetchBackendOrders();
});

function switchSettingsTab(tab) {
    document.querySelectorAll('.settings-nav-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    document.querySelectorAll('.settings-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + tab));
}