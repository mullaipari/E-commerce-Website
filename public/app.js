// 32 High-Quality E-commerce Products with Verified Dynamic Standard Sourcing Images
const products = [
    // Electronics (8)
    { id: 1, name: "Apple iPhone 15 Pro Max (Titanium)", category: "Electronics", price: 139900, img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500", desc: "Grade 5 Titanium design, A17 Pro chip architecture, ultimate 48MP camera setup system." },
    { id: 2, name: "HP Laptop 15s Ryzen 5 Pro", category: "Electronics", price: 42990, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500", desc: "8GB RAM, 512GB ultra NVMe SSD, 15.6-inch FHD Micro-edge display panel." },
    { id: 3, name: "Sony WH-1000XM4 Noise Cancellation", category: "Electronics", price: 19990, img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500", desc: "Industry-leading active dual noise sensor audio headset with 30-hour battery capability." },
    { id: 4, name: "Samsung Galaxy S24 Ultra AI", category: "Electronics", price: 124999, img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500", desc: "Advanced Titanium frame shell hosting integrated Live Translate Note assist AI features." },
    { id: 5, name: "Apple iPad Air M2 Chip", category: "Electronics", price: 59900, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500", desc: "Liquid Retina crystal display backed by computing capability of Apple M2 silicon layer." },
    { id: 6, name: "Boat Wave Call Calling Smartwatch", category: "Electronics", price: 1499, img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500", desc: "Bluetooth dialer matrix hosting advanced fitness heart rate wellness trackers." },
    { id: 7, name: "Marshall Acton III Bluetooth Speaker", category: "Electronics", price: 24999, img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500", desc: "Classic rock look acoustic audio soundstage home signature speaker setup." },
    { id: 8, name: "SanDisk 128GB HighSpeed PenDrive", category: "Electronics", price: 849, img: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=500", desc: "USB 3.1 ultra data transfer interface storage architecture system layer." },

    // Fashion (6)
    { id: 9, name: "Men's Casual Slim Fit Premium Shirt", category: "Fashion", price: 699, img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500", desc: "100% Pure luxury cotton threads tailored crisp for formal or casual meetings." },
    { id: 10, name: "Women's Floral Flared Summer Dress", category: "Fashion", price: 1299, img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500", desc: "Flowing breathable design look pattern garment structure perfect for evening outings." },
    { id: 11, name: "Unisex Western Rugged Denim Jacket", category: "Fashion", price: 1899, img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500", desc: "Heavy vintage style blue wash buttoned standard premium denim outer utility apparel." },
    { id: 12, name: "Casual Cotton Regular Chinos Trouser", category: "Fashion", price: 999, img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500", desc: "Stretchable slim-fit weave pants optimized for heavy corporate office usage comfort." },
    { id: 13, name: "Classic Aviator UV Protection Sunglasses", category: "Fashion", price: 1450, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", desc: "Metallic frame dark tint polarization shielding harmful solar ultraviolet rays." },
    { id: 14, name: "Premium Leather Minimal Wallet Black", category: "Fashion", price: 799, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500", desc: "Bifold clean finish architecture containing dedicated RFID data blocking layers." },

    // Shoes (5)
    { id: 15, name: "Nike Air Max Athlete Running Shoes", category: "Shoes", price: 8495, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", desc: "High octane performance spring sole structure protecting joints during treadmill jogging sprints." },
    { id: 16, name: "Puma Casual Minimalist White Sneakers", category: "Shoes", price: 2499, img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500", desc: "Clean leather exterior profile forming the absolute standard modern trend look pairing." },
    { id: 17, name: "Adidas Alpha Cushion Walkers", category: "Shoes", price: 3299, img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500", desc: "Flexible mesh air circulation weave coupled with impact-absorbing foam architecture." },
    { id: 18, name: "Woodland Rugged Waterproof Leather Boots", category: "Shoes", price: 4195, img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500", desc: "Heavy terrain nubuck build configuration perfect for high elevation forest hiking." },
    { id: 19, name: "Red Tape Slip-On Sports Walking Shoes", category: "Shoes", price: 1699, img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500", desc: "Memory foam custom adaptive bed layout for easy pain-free steps daily usage." },

    // Kitchen (5)
    { id: 20, name: "Prestige Granite Non-Stick Frying Pan", category: "Kitchen", price: 850, img: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=500", desc: "Triple layered PFOA-free robust coating structure supporting non-fat healthy egg omelettes." },
    { id: 21, name: "Pigeon Fast Boil Electric Kettle 1.5L", category: "Kitchen", price: 625, img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcStffdiARuJJh3BIW8FLFLYsiKwMNAJpnL4m1ScZNZrCp0h8-nIEd_XkTiw58t0", desc: "Instant heating 1500W element safe shutoff mechanism hot water tea beverage machine." },
    { id: 22, name: "Stainless Steel Laser Cut Chef Knife", category: "Kitchen", price: 450, img: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500", desc: "Perfect balanced high carbon structure edge tool for razor sharp onion vegetable slicing." },
    { id: 23, name: "Kent 3-Speed High Rotation Mixer Grinder", category: "Kitchen", price: 2999, img: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=500", desc: "Heavy continuous torque copper motor coupled with wet and dry stainless grinding jars." },
    { id: 24, name: "Borosil Vacuum Insulated Thermal Flask", category: "Kitchen", price: 920, img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500", desc: "Dual copper layer encapsulation keeping coffee scalding hot for up to 24 straight hours." },

    // Cosmetics (5)
    { id: 25, name: "Philips Luxury Keratin Hair Straightener", category: "Cosmetics", price: 1699, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJOtwU3m1iTXN4lSP3L3eJnfuZP1oLK7FCXRlft-lrXrxeozDYBfSslvv99ml", desc: "Smooth ceramic plates system diffusing ionic conditioning to shield locks from frizz damage." },
    { id: 26, name: "Matte Long Lasting Red Liquid Lipstick", category: "Cosmetics", price: 399, img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500", desc: "Highly pigmented rich dynamic fluid application drying into beautiful transfer-proof shield." },
    { id: 27, name: "Lakme 9to5 Complexion Base CC Cream", category: "Cosmetics", price: 299, img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500", desc: "Moisturizing skin styling layer tint packed with active SPF 30 sun blocker protective arrays." },
    { id: 28, name: "Nivea Nourishing Body Lotion Milk Cream", category: "Cosmetics", price: 340, img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500", desc: "Deep moisture serum dynamic formulation repair matrix targeting intense dry epidermal tissues." },
    { id: 29, name: "Premium Charcoal Deep Clean Face Wash", category: "Cosmetics", price: 249, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500", desc: "Activated carbon lattice drawing out embedded blackheads dust microparticles cleanly." },

    // Toys (3)
    { id: 30, name: "Premium Velvet Fluffy Plush Teddy Bear", category: "Toys", price: 599, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRp0iCxIjA3PPZ6yq7QA5eSpUKFFsnaiEDEJp24Hh2J1PsIKH-ElFbJA1hYP_", desc: "Soft non-toxic fabric material stuffed toy bear providing ultimate safe cuddle playtime for kids." },
    { id: 31, name: "High Speed Rechargeable RC Monster Truck", category: "Toys", price: 1199, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=500", desc: "Shock absorber suspension rugged tire build controlled via precise 2.4Ghz tracking pad." },
    { id: 32, name: "Educational Wooden Blocks Architecture Set", category: "Toys", price: 899, img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSH87yIADO12tSDKJxBZJRhPvSPaIISysX8AHquseK0BVBIFqYKM5wgg9Q_yBGv", desc: "Multi-colored solid wood logs improving infant coordination geometric balancing capacity." }
];

let cart = [];
let orders = JSON.parse(localStorage.getItem('shopy_orders')) || [];
let currentUser = null;
let isLoginMode = true;
let directBuyItem = null;

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="${type==='success'?'fas fa-check-circle':'fas fa-exclamation-circle'}"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

function renderProducts(productsToDisplay) {
    const grid = document.getElementById('productsGrid');
    if(productsToDisplay.length === 0) {
        grid.innerHTML = `<h3 style='grid-column:1/-1; text-align:center; padding:50px; color:#777;'>No matching products found inside SHOPY STORE!</h3>`;
        return;
    }
    grid.innerHTML = productsToDisplay.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}" onclick="viewProduct(${p.id})">
            <h3 onclick="viewProduct(${p.id})">${p.name}</h3>
            <div class="price">₹${p.price.toLocaleString('en-IN')}</div>
            <button class="view-details-btn" onclick="viewProduct(${p.id})">View Details</button>
            <div class="btn-group">
                <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
                <button class="buy-btn" onclick="buyNow(${p.id})">Buy Now</button>
            </div>
        </div>
    `).join('');
}

function filterCategory(category) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    if (category === 'all') return renderProducts(products);
    renderProducts(products.filter(p => p.category === category));
}

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    renderProducts(products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)));
}

function handleSearchKeyPress(event) { if (event.key === 'Enter') { searchProducts(); } }

function viewProduct(id) {
    const p = products.find(prod => prod.id === id);
    document.getElementById('productModalBody').innerHTML = `
        <span class="close-btn" onclick="closeModal('productModal')">&times;</span>
        <div style="text-align:center;">
            <img src="${p.img}" style="max-width:100%; height:200px; object-fit:contain; margin-bottom:12px;">
            <h2>${p.name}</h2>
            <p style="color:#2874f0; margin:4px 0; font-weight:bold;">${p.category}</p>
            <p style="margin:10px 0; font-size:14px; color:#555; line-height:1.4;">${p.desc}</p>
            <h3 style="font-size:22px; margin-bottom:12px;">₹${p.price.toLocaleString('en-IN')}</h3>
            <div class="btn-group">
                <button class="add-btn" style="padding:12px;" onclick="addToCart(${p.id}); closeModal('productModal');">Add to Cart</button>
                <button class="buy-btn" style="padding:12px;" onclick="buyNow(${p.id}); closeModal('productModal');">Buy Now</button>
            </div>
        </div>
    `;
    document.getElementById('productModal').style.display = 'flex';
}

function addToCart(id) {
    const p = products.find(prod => prod.id === id);
    cart.push(p);
    updateCart();
    showToast(`"${p.name}" added to cart!`);
}

function updateCart() {
    document.getElementById('cartCount').innerText = cart.length;
    document.getElementById('cartItems').innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
            <img src="${item.img}">
            <div style="flex:1; margin-left:10px;">
                <h4 style="font-size:12px; text-overflow:ellipsis; max-width:180px; overflow:hidden; white-space:nowrap;">${item.name}</h4>
                <p style="font-weight:bold; font-size:13px;">₹${item.price.toLocaleString('en-IN')}</p>
            </div>
            <i class="fas fa-trash" style="color:#ff4444; cursor:pointer;" onclick="removeFromCart(${idx})"></i>
        </div>
    `).join('');
    document.getElementById('cartTotal').innerText = cart.reduce((sum, item) => sum + item.price, 0).toLocaleString('en-IN');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
    showToast("Item removed from cart.", "error");
}

function toggleCart() { document.getElementById('cartSidebar').classList.toggle('active'); }
function buyNow(id) { directBuyItem = products.find(prod => prod.id === id); openPayment(true); }

function openPayment(isDirectBuy) {
    let amt = isDirectBuy && directBuyItem ? directBuyItem.price : cart.reduce((sum, item) => sum + item.price, 0);
    if (amt === 0) return showToast("Checkout balance is empty!", "error");
    document.getElementById('paymentAmount').innerText = amt.toLocaleString('en-IN');
    document.getElementById('paymentModal').style.display = 'flex';
}

function processPayment() {
    const name = document.getElementById('payName').value;
    const phone = document.getElementById('payPhone').value;
    const address = document.getElementById('payAddress').value;
    const pin = document.getElementById('payPincode').value;
    const method = document.querySelector('input[name="payMethod"]:checked').value;

    if(!name || !phone || !address || !pin) return showToast("Please completely fill delivery mapping info!", "error");
    if(phone.length < 10 || pin.length < 6) return showToast("Verify 10-digit Phone & 6-digit Pincode!", "error");

    let boughtItems = directBuyItem ? [directBuyItem] : [...cart];

    if(method === "UPI") {
        document.getElementById('gpayModal').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('gpayModal').style.display = 'none';
            saveOrder(name, address, method, boughtItems);
        }, 3500);
    } else {
        saveOrder(name, address, method, boughtItems);
    }
}

// User-Specific Isolation Corrections Fix Done!
function saveOrder(name, address, method, items) {
    const totalCost = document.getElementById('paymentAmount').innerText;
    const activeUser = currentUser ? currentUser : "Guest"; // User tracing mapping anchor logic
    
    const orderRecord = {
        orderId: "SHOPY-OD" + Math.floor(100000 + Math.random() * 900000),
        username: activeUser, 
        date: new Date().toLocaleDateString('en-IN'),
        items: items,
        total: totalCost,
        address: address,
        status: "Dispatched via " + method
    };
    
    orders.unshift(orderRecord);
    localStorage.setItem('shopy_orders', JSON.stringify(orders));
    showToast("Order Placed Successfully! Sent to My Orders.", "success");
    
    if (!directBuyItem) { cart = []; updateCart(); toggleCart(); }
    closePayment();
    renderOrders();
}

function renderOrders() {
    const container = document.getElementById('ordersContainer');
    const activeUser = currentUser ? currentUser : "Guest";
    
    // User Separation Tracking Filter
    const userSpecificOrders = orders.filter(o => o.username === activeUser);

    if(userSpecificOrders.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:20px; color:#666;">No purchases captured yet for [${activeUser}] account!</p>`;
        return;
    }
    
    container.innerHTML = userSpecificOrders.map(o => `
        <div class="order-box" id="box-${o.orderId}">
            <div class="order-header">
                <span><strong>ID:</strong> ${o.orderId}</span>
                <span><strong>User Account:</strong> ${o.username}</span>
                <span><strong>Date:</strong> ${o.date}</span>
            </div>
            <div style="font-size:13px; margin-bottom:5px; display:flex; justify-content:space-between; align-items:center;">
                <div><strong>Status:</strong> <span id="status-${o.orderId}" style="color:${o.status.includes('Cancelled')?'#f44336':'#388e3c'}; font-weight:bold;">${o.status}</span></div>
                ${!o.status.includes('Cancelled') ? `<button onclick="cancelOrder('${o.orderId}')" style="background:#ff4444; color:white; border:none; padding:4px 10px; font-size:11px; font-weight:bold; cursor:pointer; border-radius:2px;">Cancel Order</button>` : ''}
            </div>
            ${o.items.map(i => `
                <div class="order-product">
                    <img src="${i.img}">
                    <span style="font-size:13px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:280px;">${i.name}</span>
                    <span style="font-weight:bold; font-size:13px; margin-left:auto;">₹${i.price.toLocaleString('en-IN')}</span>
                </div>
            `).join('')}
            <div style="text-align:right; font-weight:bold; font-size:14px; margin-top:8px; border-top:1px dashed #eee; padding-top:5px;">Grand Total: ₹${o.total}</div>
        </div>
    `).join('');
}

function cancelOrder(orderId) {
    const orderIndex = orders.findIndex(o => o.orderId === orderId);
    if(orderIndex !== -1) {
        orders[orderIndex].status = "Cancelled by User";
        localStorage.setItem('shopy_orders', JSON.stringify(orders));
        showToast("Order Cancelled Successfully.", "error");
        renderOrders();
    }
}

function toggleOrdersModal() {
    const modal = document.getElementById('ordersModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
    if(modal.style.display === 'flex') renderOrders();
}

function closePayment() { document.getElementById('paymentModal').style.display = 'none'; directBuyItem = null; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

function toggleAuthModal() {
    if (currentUser) {
        currentUser = null;
        document.getElementById('userDisplay').innerText = '';
        document.getElementById('ordersBtn').style.display = 'none';
        document.getElementById('authBtn').innerText = 'Login';
        showToast("Logged out secure channel session.");
        renderProducts(products);
    } else {
        document.getElementById('authModal').style.display = document.getElementById('authModal').style.display === 'flex' ? 'none' : 'flex';
    }
}

function switchAuthMode() {
    isLoginMode = !isLoginMode;
    document.getElementById('modalTitle').innerText = isLoginMode ? "Account Login" : "Secure Registration";
    
    const container = document.getElementById('authFields');
    if(!isLoginMode) {
        container.innerHTML = `
            <input type="text" id="authUsername" placeholder="Create Unique Username" required>
            <input type="email" id="authEmail" placeholder="Enter Email ID Address" required>
            <input type="password" id="authPassword" placeholder="Set AlphaNumeric Password" required>
        `;
    } else {
        container.innerHTML = `
            <input type="text" id="authUsername" placeholder="Username" required>
            <input type="password" id="authPassword" placeholder="Password" required>
        `;
    }
    document.getElementById('toggleText').innerText = isLoginMode ? "Don't have an account? Register" : "Already have an account? Login";
}

async function handleAuth() {
    const username = document.getElementById('authUsername').value;
    const password = document.getElementById('authPassword').value;
    
    if(!username.trim() || !password.trim()) return showToast("Please input valid strings inside fields!", "error");

    const endpoint = isLoginMode ? '/api/login' : '/api/register';
    const payload = isLoginMode ? { username, password } : { username, password, email: document.getElementById('authEmail').value };
    
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        
        if (response.ok) {
            if (isLoginMode) {
                currentUser = data.username;
                document.getElementById('userDisplay').innerText = `Welcome, ${currentUser}`;
                document.getElementById('ordersBtn').style.display = 'inline-block';
                document.getElementById('authBtn').innerText = 'Logout';
                closeModal('authModal');
                showToast("Login validation authorized successful!");
            } else {
                showToast("Registration Complete! Proceed with login secure credentials.", "success");
                switchAuthMode(); 
            }
        } else { showToast(data.message, "error"); }
    } catch (error) {
        console.error(error);
        if(isLoginMode) {
            currentUser = username;
            document.getElementById('userDisplay').innerText = `Welcome, ${currentUser}`;
            document.getElementById('ordersBtn').style.display = 'inline-block';
            document.getElementById('authBtn').innerText = 'Logout';
            closeModal('authModal');
            showToast("Server Offline. Local Simulation Active.");
        } else {
            showToast("Registration Simulated. Click switch to login.", "success");
            switchAuthMode();
        }
    }
}

setInterval(() => {
    let t = document.getElementById('timer').innerText.split(':');
    let m = parseInt(t[0]), s = parseInt(t[1]);
    if(s === 0) { m--; s = 59; } else { s--; }
    document.getElementById('timer').innerText = (m<10?'0'+m:m) + ":" + (s<10?'0'+s:s);
}, 1000);

renderProducts(products);