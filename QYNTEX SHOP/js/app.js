/* ============================================
   LUXE CRAFT - 100 Products + Full E-Commerce
   ============================================ */

/* ============================================
   PRODUCT DATA (100 Products)
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
let savedAddress = null;
let currentAuthTab = 'login';

function loadState() {
    try {
        const savedCart = localStorage.getItem('luxeCart');
        const savedWishlist = localStorage.getItem('luxeWishlist');
        const savedUser = localStorage.getItem('luxeUser');
        const savedAddr = localStorage.getItem('luxeAddress');
        if (savedCart) cart = JSON.parse(savedCart);
        if (savedWishlist) wishlist = JSON.parse(savedWishlist);
        if (savedUser) currentUser = JSON.parse(savedUser);
        if (savedAddr) savedAddress = JSON.parse(savedAddr);
    } catch (e) { console.log('No saved state'); }
}
function saveCart() { localStorage.setItem('luxeCart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('luxeWishlist', JSON.stringify(wishlist)); }
function saveUser() {
    if (currentUser) localStorage.setItem('luxeUser', JSON.stringify(currentUser));
    else localStorage.removeItem('luxeUser');
}
function saveAddress() {
    if (savedAddress) localStorage.setItem('luxeAddress', JSON.stringify(savedAddress));
}

/* ============================================
   UTILS
   ============================================ */
function getAllProducts() {
    return [...products.kitchen, ...products.ceramics, ...products.leather, ...products.fashion];
}

function findProduct(id) {
    return getAllProducts().find(p => p.id === id);
}

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
    return `<span class="product-badge badge-${badge}">${labels[badge] || badge}</span>`;
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
        card.style.animationDelay = `${index * 0.04}s`;
        const inWishlist = wishlist.includes(product.id);
        card.innerHTML = `
            ${getBadgeHTML(product.badge)}
            <button class="wishlist-btn ${inWishlist ? 'active' : ''}" data-id="${product.id}" aria-label="Add to wishlist">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="${inWishlist ? '#e74c3c' : 'none'}" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
            <div class="product-image">
                <div style="font-size:72px; opacity:0.25;">${product.icon}</div>
                <button class="neo-btn quick-view-trigger" data-id="${product.id}" style="padding:8px 16px; font-size:11px;">Quick View</button>
            </div>
            <div class="product-info">
                <div class="star-rating">${formatStars(product.rating)}<span class="rating-count">(${product.reviews})</span></div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-footer">
                    <span class="liquid-price">$${product.price}</span>
                    <button class="neo-btn add-cart-btn" data-id="${product.id}" data-cat="${category}" style="padding:10px 18px; font-size:12px;">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
        container.appendChild(card);
    });
    attachProductListeners();
}

function renderBentoGrid() {
    const container = document.getElementById('fashionGrid');
    if (!container) return;
    container.innerHTML = '';
    const sizeMap = { large: 'large', tall: 'tall', wide: 'wide', normal: '' };
    products.fashion.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = `bento-card ${sizeMap[product.size] || ''}`;
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="bento-image">
                <div style="font-size:90px; opacity:0.18;">${product.icon}</div>
            </div>
            <div class="bento-overlay">
                <h3>${product.name}</h3>
                <div class="star-rating" style="margin-bottom:6px;">${formatStars(product.rating)}</div>
                <span class="liquid-price">$${product.price}</span>
            </div>
        `;
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
        card.addEventListener('click', () => addToCart(product.id, 'fashion'));
        container.appendChild(card);
    });
}

function attachProductListeners() {
    document.querySelectorAll('.add-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const cat = btn.dataset.cat;
            addToCart(id, cat);
        });
    });
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleWishlist(parseInt(btn.dataset.id));
        });
    });
    document.querySelectorAll('.quick-view-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openQuickView(parseInt(btn.dataset.id));
        });
    });
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
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(16px) scale(1.02)`;
}
function resetTilt(e) {
    e.currentTarget.style.transform = '';
}

/* ============================================
   CART
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
    updateCartUI();
    showToast(`✅ ${product.name} added to cart!`, 'success');
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
    showToast(`🗑️ ${name} removed from cart`, 'info');
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
    if (itemCountEl) itemCountEl.textContent = `(${totalQty} items)`;

    if (cart.length === 0) {
        itemsEl.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p style="font-weight:600; margin-bottom:4px;">Your cart is empty</p>
                <p style="font-size:13px;">Add some beautiful items to get started!</p>
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
                <button class="qty-btn" data-action="minus" data-index="${i}">−</button>
                <span style="font-weight:600; min-width:20px; text-align:center; font-size:13px;">${item.qty}</span>
                <button class="qty-btn" data-action="plus" data-index="${i}">+</button>
            </div>
            <button class="close-cart remove-item" data-index="${i}" style="width:32px; height:32px; flex-shrink:0;">×</button>
        </div>
    `).join('');

    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.index);
            const delta = btn.dataset.action === 'plus' ? 1 : -1;
            updateQty(idx, delta);
        });
    });
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.index)));
    });

    const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    const shipping = subtotal > 150 ? 0 : 12;
    const total = subtotal + shipping;
    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
}

function toggleCart(show) {
    const overlay = document.getElementById('cartOverlay');
    if (show === undefined) show = !overlay.classList.contains('active');
    overlay.classList.toggle('active', show);
    document.body.style.overflow = show ? 'hidden' : '';
}

/* ============================================
   WISHLIST
   ============================================ */
function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    const product = findProduct(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast(`💔 ${product.name} removed from wishlist`, 'info');
    } else {
        wishlist.push(productId);
        showToast(`❤️ ${product.name} added to wishlist!`, 'success');
    }
    saveWishlist();
    updateWishlistUI();
    renderProducts('kitchen', 'kitchenGrid');
    renderProducts('ceramics', 'ceramicsGrid');
    renderProducts('leather', 'leatherGrid');
}

function updateWishlistUI() {
    const badge = document.getElementById('wishlistBadge');
    if (badge) badge.textContent = wishlist.length;
}

/* ============================================
   QUICK VIEW
   ============================================ */
function openQuickView(productId) {
    const product = findProduct(productId);
    if (!product) return;
    const content = document.getElementById('quickViewContent');
    content.innerHTML = `
        <div class="quick-view-image">
            <div style="font-size:100px; opacity:0.3;">${product.icon}</div>
        </div>
        <div class="quick-view-info">
            ${getBadgeHTML(product.badge)}
            <h3>${product.name}</h3>
            <div class="star-rating">${formatStars(product.rating)}<span class="rating-count">${product.reviews} reviews</span></div>
            <p>${product.desc}</p>
            <span class="liquid-price">$${product.price}</span>
            <div class="quick-view-actions">
                <button class="neo-btn primary add-cart-btn-qv" data-id="${product.id}" style="flex:1;">Add to Cart</button>
                <button class="neo-btn wishlist-btn-qv" data-id="${product.id}">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="${wishlist.includes(product.id) ? '#e74c3c' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
            </div>
        </div>
    `;
    document.getElementById('quickViewOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';

    content.querySelector('.add-cart-btn-qv').addEventListener('click', () => {
        const cat = Object.keys(products).find(k => products[k].some(p => p.id === productId));
        addToCart(productId, cat);
        closeQuickView();
    });
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
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    toggleCart(false);
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
    document.getElementById('loginFormElement').classList.toggle('hidden', tab !== 'login');
    document.getElementById('signupFormElement').classList.toggle('hidden', tab !== 'signup');
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    if (!email || !password) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    currentUser = { email, name: email.split('@')[0], id: Date.now() };
    saveUser();
    updateUserUI();
    closeAuthModal();
    showToast(`👋 Welcome back, ${currentUser.name}!`, 'success');
    if (cart.length > 0) setTimeout(() => openAddressModal(), 300);
}

function handleSignup() {
    const firstName = document.getElementById('signupFirstName').value.trim();
    const lastName = document.getElementById('signupLastName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirmPassword').value;
    const agree = document.getElementById('agreeTerms').checked;

    if (!firstName || !lastName || !email || !password) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    if (password.length < 8) {
        showToast('Password must be at least 8 characters', 'error');
        return;
    }
    if (password !== confirm) {
        showToast('Passwords do not match', 'error');
        return;
    }
    if (!agree) {
        showToast('Please agree to the terms', 'error');
        return;
    }
    currentUser = { email, name: `${firstName} ${lastName}`, id: Date.now() };
    saveUser();
    updateUserUI();
    closeAuthModal();
    showToast(`🎉 Welcome to LUXE CRAFT, ${firstName}!`, 'success');
    if (cart.length > 0) setTimeout(() => openAddressModal(), 300);
}

function handleLogout() {
    currentUser = null;
    saveUser();
    updateUserUI();
    showToast('Signed out successfully', 'info');
    document.getElementById('userDropdown').classList.remove('active');
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

/* ============================================
   ADDRESS MODAL
   ============================================ */
function openAddressModal() {
    document.getElementById('addressOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
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
        showToast('Please fill in all required fields', 'error');
        return;
    }
    savedAddress = { firstName, lastName, phone, street, apt: document.getElementById('addrApt').value.trim(), city, state, zip, country };
    if (document.getElementById('saveAddress').checked) saveAddress();
    closeAddressModal();
    openCheckoutModal();
}

/* ============================================
   CHECKOUT / PAYMENT
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

    itemsContainer.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.icon} ${item.name} x${item.qty}</span>
            <span style="font-weight:600;">$${(item.price * item.qty).toFixed(2)}</span>
        </div>
    `).join('');

    if (savedAddress) {
        addressDisplay.innerHTML = `
            <p><strong>${savedAddress.firstName} ${savedAddress.lastName}</strong></p>
            <p>${savedAddress.street}${savedAddress.apt ? ', ' + savedAddress.apt : ''}</p>
            <p>${savedAddress.city}, ${savedAddress.state} ${savedAddress.zip}</p>
            <p>${savedAddress.country}</p>
            <p style="margin-top:4px; opacity:0.7;">📞 ${savedAddress.phone}</p>
        `;
    }

    const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
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
    updateCartUI();
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
    if (!query.trim()) {
        resultsContainer.innerHTML = '';
        return;
    }
    const all = getAllProducts();
    const filtered = all.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.desc.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);

    if (filtered.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align:center; opacity:0.5; padding:20px;">No products found</p>';
        return;
    }

    resultsContainer.innerHTML = filtered.map(p => {
        const cat = Object.keys(products).find(k => products[k].some(x => x.id === p.id));
        return `
            <div class="search-result-item" data-id="${p.id}" data-cat="${cat}">
                <span class="result-icon">${p.icon}</span>
                <div class="result-info">
                    <h4>${p.name}</h4>
                    <p>${p.desc.substring(0, 40)}...</p>
                </div>
                <span class="result-price">$${p.price}</span>
            </div>
        `;
    }).join('');

    resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            const id = parseInt(item.dataset.id);
            const cat = item.dataset.cat;
            addToCart(id, cat);
            closeSearch();
        });
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
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
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
   EVENT LISTENERS (ALL ATTACHED IN INIT)
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

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Parallax orbs
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.floating-orb').forEach((orb, i) => {
            const speed = 0.3 + (i * 0.15);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
        // Navbar shrink
        const navbar = document.getElementById('navbar');
        if (scrolled > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        // Back to top
        const backToTop = document.getElementById('backToTop');
        if (scrolled > 600) backToTop.classList.add('visible');
        else backToTop.classList.remove('visible');
    });

    // Nav links - smooth scroll, prevent default
    document.querySelectorAll('a[data-nav]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href').replace('#', '');
            scrollToSection(id);
            closeMobileMenu();
        });
    });

    // Hero buttons
    document.getElementById('heroExplore').addEventListener('click', () => scrollToSection('kitchen'));
    document.getElementById('heroNew').addEventListener('click', () => scrollToSection('fashion'));

    // Cart
    document.getElementById('cartToggle').addEventListener('click', () => toggleCart(true));
    document.getElementById('cartClose').addEventListener('click', () => toggleCart(false));
    document.getElementById('cartOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('cartOverlay')) toggleCart(false);
    });
    document.getElementById('continueShoppingBtn').addEventListener('click', () => toggleCart(false));
    document.getElementById('checkoutBtn').addEventListener('click', proceedToCheckout);

    // Auth
    document.getElementById('userToggle').addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentUser) {
            document.getElementById('userDropdown').classList.toggle('active');
        } else {
            openAuthModal();
        }
    });
    document.getElementById('authClose').addEventListener('click', closeAuthModal);
    document.getElementById('authOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('authOverlay')) closeAuthModal();
    });
    document.getElementById('tabLogin').addEventListener('click', () => switchAuthTab('login'));
    document.getElementById('tabSignup').addEventListener('click', () => switchAuthTab('signup'));
    document.getElementById('loginSubmit').addEventListener('click', handleLogin);
    document.getElementById('signupSubmit').addEventListener('click', handleSignup);
    document.getElementById('googleLogin').addEventListener('click', () => showToast('Google login coming soon', 'info'));
    document.getElementById('guestCheckoutBtn').addEventListener('click', () => {
        closeAuthModal();
        setTimeout(() => openAddressModal(), 300);
    });

    // Address
    document.getElementById('addressClose').addEventListener('click', closeAddressModal);
    document.getElementById('addressOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('addressOverlay')) closeAddressModal();
    });
    document.getElementById('addressBack').addEventListener('click', () => {
        closeAddressModal();
        if (!currentUser) openAuthModal();
    });
    document.getElementById('addressContinue').addEventListener('click', saveAddressAndContinue);

    // Checkout
    document.getElementById('checkoutClose').addEventListener('click', closeCheckoutModal);
    document.getElementById('checkoutOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('checkoutOverlay')) closeCheckoutModal();
    });
    document.getElementById('checkoutBack').addEventListener('click', () => {
        closeCheckoutModal();
        openAddressModal();
    });
    document.getElementById('editAddressBtn').addEventListener('click', () => {
        closeCheckoutModal();
        openAddressModal();
    });
    document.getElementById('placeOrderBtn').addEventListener('click', placeOrder);

    // Success
    document.getElementById('successClose').addEventListener('click', closeSuccessAndReset);
    document.getElementById('successOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('successOverlay')) closeSuccessAndReset();
    });

    // Quick View
    document.getElementById('quickViewClose').addEventListener('click', closeQuickView);
    document.getElementById('quickViewOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('quickViewOverlay')) closeQuickView();
    });

    // Search
    document.getElementById('searchToggle').addEventListener('click', openSearch);
    document.getElementById('searchClose').addEventListener('click', closeSearch);
    document.getElementById('searchOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('searchOverlay')) closeSearch();
    });
    document.getElementById('searchInput').addEventListener('input', (e) => handleSearch(e.target.value));
    document.getElementById('searchInput').addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSearch();
    });

    // Mobile Menu
    document.getElementById('mobileMenuBtn').addEventListener('click', openMobileMenu);
    document.getElementById('mobileClose').addEventListener('click', closeMobileMenu);
    document.getElementById('mobileOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('mobileOverlay')) closeMobileMenu();
    });
    document.getElementById('mobileLoginBtn').addEventListener('click', () => {
        closeMobileMenu();
        setTimeout(() => openAuthModal(), 300);
    });

    // User dropdown close on outside click
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('userDropdown');
        const userToggle = document.getElementById('userToggle');
        if (dropdown && userToggle && !dropdown.contains(e.target) && !userToggle.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // User menu items
    document.getElementById('menuOrders').addEventListener('click', () => showToast('Orders page coming soon', 'info'));
    document.getElementById('menuAddresses').addEventListener('click', () => {
        document.getElementById('userDropdown').classList.remove('active');
        openAddressModal();
    });
    document.getElementById('menuWishlist').addEventListener('click', () => showToast(`You have ${wishlist.length} items in your wishlist`, 'info'));
    document.getElementById('menuSettings').addEventListener('click', () => showToast('Settings coming soon', 'info'));
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    // Promo bar
    document.getElementById('promoClose').addEventListener('click', () => {
        document.getElementById('promoBar').style.display = 'none';
        document.getElementById('navbar').style.top = '20px';
    });

    // Back to top
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Newsletter
    document.getElementById('newsletterBtn').addEventListener('click', () => {
        const email = document.getElementById('newsletterEmail').value.trim();
        if (!email || !email.includes('@')) {
            showToast('Please enter a valid email', 'error');
            return;
        }
        showToast('🎉 Subscribed! Check your inbox for 10% off.', 'success');
        document.getElementById('newsletterEmail').value = '';
    });

    // Prevent native form submission (page reload) on all forms with type="submit" buttons.
    // The actual logic is handled by the click listeners bound above; this just stops
    // the browser's default navigate/reload behavior.
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
});