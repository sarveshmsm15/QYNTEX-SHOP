LUXE CRAFT — 3D Neo-Morphic E-Commerce Platform
File Structure
plain
luxe-craft/
├── index.html          # Main HTML (linked to css/styles.css & js/app.js)
├── css/
│   └── styles.css      # All neomorphic, 3D, modal & checkout styles
├── js/
│   └── app.js          # 100 products, cart, auth, address, checkout logic
└── assets/
    └── images/         # Place your product images here
Features
100 Products
Kitchenware (25): Spoons, tumblers, bottles, plates, knives, pans, boards, etc.
Ceramics (25): Plates, cups, mugs, bowls, vases, teapots, planters, etc.
Leather Goods (25): Purses, bags, shoes, wallets, belts, accessories, etc.
Fashion (25): Dresses, blazers, trousers, sweaters, coats, etc. in Bento Grid
Buy Now / Checkout Flow
Cart Sidebar — Add items, adjust quantities, remove items, see subtotal/shipping/total
Auth Modal — Login / Sign Up with tabs, form validation, Google button placeholder
Address Modal — Full shipping form (name, phone, street, city, state, ZIP, country), save to localStorage
Checkout Modal — Order summary, payment method selection (Card / PayPal / Apple Pay), tax calculation
Success Modal — Order confirmation with order ID
Design System
Neomorphism (soft UI) with 3D depth
CSS perspective(1000px) + transform-style: preserve-3d
Mouse-tracking card tilts
Liquid glass price badges with shimmer animation
Floating ambient orbs with parallax scroll
Staggered entrance animations
Fully responsive (mobile/tablet/desktop)
Tech Stack
HTML5
CSS3 (Vanilla, no frameworks)
Vanilla JavaScript ES6+
localStorage for cart, user, and address persistence
No external dependencies except Google Fonts (Inter)
How to Use
Open index.html in any modern browser
All data persists in localStorage (cart, login, address)
Replace emoji placeholders in product cards with actual <img> tags when ready
The checkout flow is frontend-only; connect to a backend for production
Customization
Edit product data in js/app.js → products object
Change colors in css/styles.css → :root variables
Add real payment gateway integration in placeOrder() function