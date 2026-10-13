/**
 * PERFUME PARADISE INDIA - E-COMMERCE JAVASCRIPT
 * Interactive Cart, Fragrance Pyramid Quick View, Live Search, Wishlist,
 * 50ml (₹599) & 20ml (₹299) Size Selectors, and Shipping Address Checkout
 */

// Fragrance Catalog Database with 50ml (₹599) and 20ml (₹299) sizing
const PRODUCTS_DATA = [
  {
    id: 'oud-al-noor',
    name: 'OUD AL NOOR',
    subtitle: 'Extrait de Parfum • Royal Cambodian Oud',
    category: 'mens',
    categoryName: "Men's & Unisex",
    price50ml: 599,
    price20ml: 299,
    originalPrice50ml: 999,
    originalPrice20ml: 499,
    image: 'assets/images/oud-al-noor.jpg',
    badge: 'Bestseller',
    badgeType: 'gold',
    longevity: '24+ Hours Longevity',
    concentration: '30% Pure Oil Extrait',
    topNotes: 'Royal Cambodian Oud, Wild Saffron, Bergamot',
    heartNotes: 'Taif Damask Rose, Smoked Incense, Nutmeg',
    baseNotes: 'Precious Ambergris, Dark Musk, Agarwood Resin',
    description: 'An aristocratic oriental symphony created from hand-selected aged Cambodian agarwood, cloaked in warm amber and royal Taif rose petals.'
  },
  {
    id: 'khalifa',
    name: 'KHALIFA',
    subtitle: 'Eau de Parfum • Royal Smoked Cedar & Amber',
    category: 'mens',
    categoryName: "Men's Luxury",
    price50ml: 599,
    price20ml: 299,
    originalPrice50ml: 999,
    originalPrice20ml: 499,
    image: 'assets/images/khalifa.jpg',
    badge: 'Trending',
    badgeType: 'emerald',
    longevity: '20+ Hours Longevity',
    concentration: '25% Non-Alcoholic Formulation',
    topNotes: 'Calabrian Bergamot, Pink Peppercorn, Cardamom',
    heartNotes: 'Smoked Atlas Cedarwood, Velvet Rose, French Lavender',
    baseNotes: 'Golden Amber Resin, Distilled Leather, White Moss',
    description: 'A sovereign fragrance embodying authority and effortless elegance. Robust cedarwood intermingles with velvety rose petals and warm glowing amber.'
  },
  {
    id: 'pineapple',
    name: 'PINEAPPLE',
    subtitle: 'Eau de Parfum • Vibrant Tropical Birch Smoke',
    category: 'unisex',
    categoryName: 'Unisex Signature',
    price50ml: 599,
    price20ml: 299,
    originalPrice50ml: 999,
    originalPrice20ml: 499,
    image: 'assets/images/pineapple.jpg',
    badge: 'Signature',
    badgeType: 'gold',
    longevity: '20+ Hours Longevity',
    concentration: '25% Non-Alcoholic Formulation',
    topNotes: 'Juicy Ripe Pineapple, Crisp Blackcurrant, Apple',
    heartNotes: 'Smoked Birch Wood, Moroccan Jasmine, Patchouli',
    baseNotes: 'Sensual Oakmoss, Clean White Musk, Ambergris',
    description: 'A dazzling burst of caramelized tropical pineapple fused with the rugged allure of birchwood smoke and magnetic musk.'
  },
  {
    id: 'my-signature',
    name: 'MY SIGNATURE',
    subtitle: 'Eau de Parfum • Golden Sandalwood & Cashmere',
    category: 'unisex',
    categoryName: 'Private Reserve',
    price50ml: 599,
    price20ml: 299,
    originalPrice50ml: 999,
    originalPrice20ml: 499,
    image: 'assets/images/my-signature.jpg',
    badge: 'Iconic Choice',
    badgeType: 'gold',
    longevity: '22+ Hours Longevity',
    concentration: '28% Extrait Concentration',
    topNotes: 'Sun-Drenched Bergamot, Spiced Saffron, Cardamom',
    heartNotes: 'Royal Cashmere Wood, Turkish Rose, Jasmine Sambac',
    baseNotes: 'Mysore Sandalwood, Bourbon Vanilla, Silken Musk',
    description: 'The epitome of Perfume Paradise craftsmanship. Warm creaminess of aged Mysore sandalwood layered over spiced cashmere and golden bourbon vanilla.'
  },
  {
    id: 'first-night',
    name: 'FIRST NIGHT',
    subtitle: 'Eau de Parfum • Romantic Damask Rose & Vanilla',
    category: 'womens',
    categoryName: "Women's Romance",
    price50ml: 599,
    price20ml: 299,
    originalPrice50ml: 999,
    originalPrice20ml: 499,
    image: 'assets/images/first-night.jpg',
    badge: 'Romantic',
    badgeType: 'emerald',
    longevity: '20+ Hours Longevity',
    concentration: '25% Non-Alcoholic Formulation',
    topNotes: 'Sparkling Lychee, Sweet Pink Peony, Dewy Greens',
    heartNotes: 'Crimson Damask Rose, French Vanilla Bean, Iris',
    baseNotes: 'Soft Cashmere Silk, Warm Amber Crystal, White Musk',
    description: 'An intoxicating romance bottled in crystal. Tender floral whispers wrapped in mouth-watering vanilla cream and lingering cashmere amber.'
  },
  {
    id: 'night-mood',
    name: 'NIGHT MOOD',
    subtitle: 'Eau de Parfum • Midnight Plum & Roasted Tonka',
    category: 'unisex',
    categoryName: 'Evening Extrait',
    price50ml: 599,
    price20ml: 299,
    originalPrice50ml: 999,
    originalPrice20ml: 499,
    image: 'assets/images/night-mood.jpg',
    badge: 'Sensual',
    badgeType: 'gold',
    longevity: '20+ Hours Longevity',
    concentration: '26% Concentrated Blend',
    topNotes: 'Midnight Dark Plum, Sweet Cinnamon, Bitter Almond',
    heartNotes: 'Roasted Tonka Bean, Turkish Espresso, Tobacco Flower',
    baseNotes: 'Dark Wood Oud, Liquid Benzoin, Smoked Amber',
    description: 'Conceived for intimate twilight rendezvous. Deep plum and warm spicy cardamom melt into roasted tonka and hypnotic woody embers.'
  },
  {
    id: 'bilal',
    name: 'BILAL',
    subtitle: 'Eau de Parfum • Sacred Frankincense & Taif Rose',
    category: 'attar',
    categoryName: 'Artisanal Attar & EDP',
    price50ml: 599,
    price20ml: 299,
    originalPrice50ml: 999,
    originalPrice20ml: 499,
    image: 'assets/images/bilal.jpg',
    badge: 'Arabian Heritage',
    badgeType: 'gold',
    longevity: '24+ Hours Longevity',
    concentration: '100% Non-Alcoholic Concentrated Oil',
    topNotes: 'Sweet Omani Luban, Saffron Threads, Cardamom',
    heartNotes: 'Pure Taif Rose Otto, Spiced Myrrh, Golden Honey',
    baseNotes: 'Aged Indian Oud, White Sandalwood, Royal Musk',
    description: 'A divine tribute to classical Arabian perfumery. Harmonious sacred frankincense infused with honeyed Taif rose and velvety royal musk.'
  },
  {
    id: 'quraishi',
    name: 'QURAISHI',
    subtitle: 'Eau de Parfum • Royal Dehn Al Oud & Black Amber',
    category: 'mens',
    categoryName: "Men's Royal",
    price50ml: 599,
    price20ml: 299,
    originalPrice50ml: 999,
    originalPrice20ml: 499,
    image: 'assets/images/quraishi.jpg',
    badge: 'Collector Choice',
    badgeType: 'emerald',
    longevity: '24+ Hours Longevity',
    concentration: '28% Extrait Concentration',
    topNotes: 'Smoky Cardamom, Sun-Dried Figs, Black Pepper',
    heartNotes: 'Aged Dehn Al Oud, Smoked Birch Leather, Iris',
    baseNotes: 'Royal Black Amber, Vetiver Java, Labdanum',
    description: 'A powerful, charismatic fragrance woven with vintage agarwood oils, dark smoky birch, and deep balsamic black amber.'
  },
  {
    id: 'romancia',
    name: 'ROMANCIA',
    subtitle: 'Eau de Parfum • Wild Crimson Berries & Sweet Rose',
    category: 'womens',
    categoryName: "Women's Luxe",
    price50ml: 599,
    price20ml: 299,
    originalPrice50ml: 999,
    originalPrice20ml: 499,
    image: 'assets/images/romancia.jpg',
    badge: 'Floral Luxe',
    badgeType: 'emerald',
    longevity: '20+ Hours Longevity',
    concentration: '25% Non-Alcoholic Formulation',
    topNotes: 'Crimson Raspberry, Sweet Pomegranate, Mandarin',
    heartNotes: 'Moroccan Centifolia Rose, Sambac Jasmine, Violet',
    baseNotes: 'Golden Amber Resin, Cedarwood, Whipped Vanilla',
    description: 'Playful yet undeniably regal. Lush red berries blend seamlessly into majestic blooming roses and comforting golden amber.'
  },
  {
    id: 'lovely',
    name: 'LOVELY',
    subtitle: 'Eau de Parfum • Soft Petals & Sweet Almond Cloud',
    category: 'womens',
    categoryName: 'Feminine Essence',
    price50ml: 599,
    price20ml: 299,
    originalPrice50ml: 999,
    originalPrice20ml: 499,
    image: 'assets/images/lovely.jpg',
    badge: 'Gentle Pure',
    badgeType: 'gold',
    longevity: '18+ Hours Longevity',
    concentration: '25% Non-Alcoholic Formulation',
    topNotes: 'White Peach, Bergamot Sparkle, Sweet Almond',
    heartNotes: 'White Lilies, Orange Blossom, Cotton Petals',
    baseNotes: 'Powdery White Musk, Light Sandalwood, Vanilla Pod',
    description: 'A soft luminous aura reminiscent of warm morning light on silk sheets, enriched with delicate petals and creamy sweet almonds.'
  },
  {
    id: 'dark-chocolate',
    name: 'DARK CHOCOLATE',
    subtitle: 'Eau de Parfum • Rich Cacao & Spiced Bourbon Amber',
    category: 'unisex',
    categoryName: 'Gourmand Luxe',
    price50ml: 599,
    price20ml: 299,
    originalPrice50ml: 999,
    originalPrice20ml: 499,
    image: 'assets/images/dark-chocolate.jpg',
    badge: 'Gourmand',
    badgeType: 'emerald',
    longevity: '20+ Hours Longevity',
    concentration: '25% Non-Alcoholic Formulation',
    topNotes: 'Dark Roasted Cacao, Bitter Orange, Roasted Hazelnut',
    heartNotes: 'Spiced Bourbon Vanilla, Coffee Blossom, Cinnamon',
    baseNotes: 'Warm Amber, Patchouli Leaves, Creamy Sandalwood',
    description: 'An addictive gourmand composition for sensory hedonists. Opulent bitter cocoa infused with caramelized vanilla and cozy spiced amber.'
  },
  {
    id: 'amira',
    name: 'AMIRA',
    subtitle: 'Eau de Parfum • Imperial Jasmine & Royal White Musk',
    category: 'womens',
    categoryName: "Princess Edition",
    price50ml: 599,
    price20ml: 299,
    originalPrice50ml: 999,
    originalPrice20ml: 499,
    image: 'assets/images/amira.jpg',
    badge: 'Royal Floral',
    badgeType: 'gold',
    longevity: '20+ Hours Longevity',
    concentration: '25% Non-Alcoholic Formulation',
    topNotes: 'Neroli Blossom, Juicy Pear, Sweet Saffron',
    heartNotes: 'Royal Arabian Jasmine, White Orchid, Magnolia',
    baseNotes: 'Regal White Musk, Cashmeran, Sandalwood Cream',
    description: 'Named after Arabian royalty ("Princess"). An intoxicating tribute to nocturnal jasmine crowned with velvety white musk and golden saffron.'
  }
];

// App State
let cart = JSON.parse(localStorage.getItem('pp_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('pp_wishlist')) || [];
let currentCategory = 'all';
let selectedProductSizes = {}; // Tracks chosen size per product card ('50ml' or '20ml')
let qvActiveSize = '50ml'; // Active size in Quick View modal

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  renderProducts();
  initHeroSwitcher();
  initCart();
  initQuickView();
  initLiveSearch();
  initNewsletter();
  updateHeaderBadges();
  loadSavedCustomerInfo();
});

/* ==========================================================================
   HEADER & NAVIGATION
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNavDrawer');
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  }
}

function updateHeaderBadges() {
  const cartBadge = document.getElementById('cartBadge');
  const wishlistBadge = document.getElementById('wishlistBadge');

  const totalCartCount = cart.reduce((acc, item) => acc + item.qty, 0);
  if (cartBadge) {
    cartBadge.textContent = totalCartCount;
    cartBadge.style.display = totalCartCount > 0 ? 'flex' : 'none';
  }

  if (wishlistBadge) {
    wishlistBadge.textContent = wishlist.length;
    wishlistBadge.style.display = wishlist.length > 0 ? 'flex' : 'none';
  }
}

/* ==========================================================================
   HERO INTERACTIVE SCENT SWITCHER
   ========================================================================== */
function initHeroSwitcher() {
  const thumbs = document.querySelectorAll('.hero-thumb-btn');
  const heroImg = document.getElementById('heroBottleImg');
  const heroTitle = document.getElementById('heroBottleTitle');
  const heroNotes = document.getElementById('heroBottleNotes');

  const heroPresets = {
    'my-signature': {
      title: 'MY SIGNATURE',
      notes: 'Sandalwood • Cashmere • Vanilla Saffron',
      src: 'assets/images/my-signature.jpg'
    },
    'night-mood': {
      title: 'NIGHT MOOD',
      notes: 'Midnight Plum • Spiced Tonka • Dark Wood',
      src: 'assets/images/night-mood.jpg'
    },
    'khalifa': {
      title: 'KHALIFA',
      notes: 'Smoked Cedarwood • Velvet Rose • Golden Amber',
      src: 'assets/images/khalifa.jpg'
    },
    'quraishi': {
      title: 'QURAISHI',
      notes: 'Royal Dehn Al Oud • Black Amber • Spiced Birch',
      src: 'assets/images/quraishi.jpg'
    }
  };

  thumbs.forEach(btn => {
    btn.addEventListener('click', () => {
      thumbs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const scentKey = btn.getAttribute('data-scent');
      const data = heroPresets[scentKey];
      if (data && heroImg) {
        heroImg.style.opacity = '0';
        setTimeout(() => {
          heroImg.src = data.src;
          heroTitle.textContent = data.title;
          heroNotes.textContent = data.notes;
          heroImg.style.opacity = '1';
        }, 200);
      }
    });
  });
}

/* ==========================================================================
   PRODUCTS RENDERING & SIZE SWITCHING (50ml ₹599 / 20ml ₹299)
   ========================================================================== */
function selectProductSize(productId, size) {
  selectedProductSizes[productId] = size;
  const card = document.querySelector(`.product-card[data-id="${productId}"]`);
  if (!card) return;

  const btn20 = card.querySelector('.btn-size-20');
  const btn50 = card.querySelector('.btn-size-50');
  const priceCurrent = card.querySelector('.product-price-current');
  const priceOriginal = card.querySelector('.product-price-original');

  if (size === '20ml') {
    if (btn20) btn20.classList.add('active');
    if (btn50) btn50.classList.remove('active');
    if (priceCurrent) priceCurrent.textContent = '₹299';
    if (priceOriginal) priceOriginal.textContent = '₹499';
  } else {
    if (btn50) btn50.classList.add('active');
    if (btn20) btn20.classList.remove('active');
    if (priceCurrent) priceCurrent.textContent = '₹599';
    if (priceOriginal) priceOriginal.textContent = '₹999';
  }
}

function renderProducts() {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  const filtered = currentCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === currentCategory);

  container.innerHTML = filtered.map(product => {
    const isWishlisted = wishlist.includes(product.id);
    const currSize = selectedProductSizes[product.id] || '50ml';
    const currPrice = currSize === '20ml' ? product.price20ml : product.price50ml;
    const currOrigPrice = currSize === '20ml' ? product.originalPrice20ml : product.originalPrice50ml;

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.name} Luxury Perfume" loading="lazy">
          
          <div class="product-badge-group">
            <span class="product-badge ${product.badgeType}">${product.badge}</span>
            <span class="product-badge emerald" style="font-size:0.58rem; background: rgba(7,35,24,0.85);">${product.longevity}</span>
          </div>

          <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}')" 
                  aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <button class="product-quick-view" onclick="openQuickView('${product.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path></svg>
            Quick View
          </button>
        </div>

        <div class="product-info">
          <div class="product-category-sub">${product.categoryName}</div>
          <h3 class="product-title">${product.name}</h3>
          
          <div class="product-notes-pill">
            <span>Notes:</span> ${product.topNotes.split(',')[0]}, ${product.heartNotes.split(',')[0]} & ${product.baseNotes.split(',')[0]}
          </div>

          <!-- Bottle Size Selector Buttons -->
          <div class="card-size-selector">
            <span class="card-size-label">Select Bottle Size:</span>
            <div class="size-btn-group">
              <button type="button" class="card-size-btn btn-size-20 ${currSize === '20ml' ? 'active' : ''}" onclick="selectProductSize('${product.id}', '20ml')">
                20ml • ₹299
              </button>
              <button type="button" class="card-size-btn btn-size-50 ${currSize === '50ml' ? 'active' : ''}" onclick="selectProductSize('${product.id}', '50ml')">
                50ml • ₹599
              </button>
            </div>
          </div>

          <div class="product-pricing-wrap">
            <span class="product-price-current">₹${currPrice.toLocaleString('en-IN')}</span>
            <span class="product-price-original">₹${currOrigPrice.toLocaleString('en-IN')}</span>
            <span class="product-discount-tag">40% OFF</span>
          </div>

          <div class="product-card-actions">
            <button class="btn-add-cart" onclick="addCurrentCardToCart('${product.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Setup filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderProducts();
    });
  });
}

function addCurrentCardToCart(productId) {
  const size = selectedProductSizes[productId] || '50ml';
  const price = size === '20ml' ? 299 : 599;
  addToCart(productId, size, price);
}

/* ==========================================================================
   CART SYSTEM WITH SHIPPING ADDRESS FORM
   ========================================================================== */
function initCart() {
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const modalBackdrop = document.getElementById('modalBackdrop');

  if (cartToggleBtn && cartDrawer) {
    cartToggleBtn.addEventListener('click', openCart);
  }
  if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', closeCart);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', () => {
      closeCart();
      closeQuickView();
      closeSearch();
      closeOrderModal();
    });
  }
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('active');
  document.getElementById('modalBackdrop').classList.add('active');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('active');
  if (!document.getElementById('orderSuccessModal').classList.contains('active')) {
    document.getElementById('modalBackdrop').classList.remove('active');
  }
}

function addToCart(productId, size = '50ml', price = null) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const itemPrice = price !== null 
    ? price 
    : (size.includes('20ml') ? product.price20ml : product.price50ml);

  const sizeLabel = size.includes('20ml') ? '20ml Luxury Pocket Spray' : (size.includes('50ml') ? '50ml Signature Flacon' : size);

  const existing = cart.find(item => item.id === productId && item.size === sizeLabel);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: itemPrice,
      image: product.image,
      size: sizeLabel,
      qty: 1
    });
  }

  saveCart();
  updateHeaderBadges();
  showToast(`Added ${product.name} (${sizeLabel.split(' ')[0]}) to bag!`);
  openCart();
}

function updateCartQty(index, change) {
  if (!cart[index]) return;
  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  renderCartItems();
  updateHeaderBadges();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCartItems();
  updateHeaderBadges();
  showToast('Item removed from bag');
}

function saveCart() {
  localStorage.setItem('pp_cart', JSON.stringify(cart));
}

function renderCartItems() {
  const container = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingMsgEl = document.getElementById('shippingProgressText');
  const shippingFillEl = document.getElementById('shippingProgressFill');
  const checkoutSection = document.getElementById('cartCheckoutSection');
  const checkoutBtn = document.getElementById('checkoutSubmitBtn');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-message">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto 16px; color:var(--gold-500);"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <h4 style="font-family:var(--font-serif-royal); margin-bottom:8px; color:var(--emerald-950);">Your Shopping Bag Is Empty</h4>
        <p style="font-size:0.84rem;">Select your favourite perfumes in 50ml (₹599) or 20ml (₹299).</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '₹0';
    if (shippingMsgEl) shippingMsgEl.innerHTML = 'Add <strong>₹999</strong> for <strong>Free Express Shipping across India</strong>';
    if (shippingFillEl) shippingFillEl.style.width = '0%';
    if (checkoutSection) checkoutSection.style.display = 'none';
    if (checkoutBtn) checkoutBtn.style.opacity = '0.6';
    return;
  }

  // If cart has items, display the address collection form
  if (checkoutSection) {
    checkoutSection.style.display = 'block';
  }
  if (checkoutBtn) {
    checkoutBtn.style.opacity = '1';
  }

  let subtotal = 0;
  container.innerHTML = cart.map((item, index) => {
    subtotal += item.price * item.qty;
    return `
      <div class="cart-item-card">
        <img class="cart-item-img" src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <div class="cart-item-notes" style="color:var(--gold-700); font-weight:600;">${item.size}</div>
          <div class="cart-item-bottom">
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
              <span class="cart-qty-num">${item.qty}</span>
              <button class="cart-qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
            </div>
            <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
          </div>
        </div>
        <button onclick="removeCartItem(${index})" style="color:var(--text-muted); padding:4px;" title="Remove">✕</button>
      </div>
    `;
  }).join('');

  if (subtotalEl) {
    subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  }

  // Free shipping threshold = ₹999
  const threshold = 999;
  if (subtotal >= threshold) {
    if (shippingMsgEl) shippingMsgEl.innerHTML = '🎉 You unlocked <strong>FREE Express Shipping across India!</strong>';
    if (shippingFillEl) shippingFillEl.style.width = '100%';
  } else {
    const diff = threshold - subtotal;
    if (shippingMsgEl) shippingMsgEl.innerHTML = `Add <strong>₹${diff.toLocaleString('en-IN')}</strong> more for <strong>FREE Express Shipping</strong>`;
    const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
    if (shippingFillEl) shippingFillEl.style.width = `${pct}%`;
  }
}

/* ==========================================================================
   ADDRESS FORM & ORDER CHECKOUT PROCESSING
   ========================================================================== */
function loadSavedCustomerInfo() {
  const saved = localStorage.getItem('pp_customer_info');
  if (!saved) return;
  try {
    const info = JSON.parse(saved);
    if (document.getElementById('custName')) document.getElementById('custName').value = info.name || '';
    if (document.getElementById('custPhone')) document.getElementById('custPhone').value = info.phone || '';
    if (document.getElementById('custAddress')) document.getElementById('custAddress').value = info.address || '';
    if (document.getElementById('custCity')) document.getElementById('custCity').value = info.city || '';
    if (document.getElementById('custPincode')) document.getElementById('custPincode').value = info.pincode || '';
  } catch (e) {
    // ignore
  }
}

function updatePayOption(radio) {
  document.querySelectorAll('.payment-option-card').forEach(c => c.classList.remove('active'));
  if (radio && radio.parentElement) {
    radio.parentElement.classList.add('active');
  }
}

function submitOrder() {
  if (cart.length === 0) {
    showToast('Your bag is empty! Please add a fragrance first.');
    return;
  }

  const nameInput = document.getElementById('custName');
  const phoneInput = document.getElementById('custPhone');
  const addressInput = document.getElementById('custAddress');
  const cityInput = document.getElementById('custCity');
  const pincodeInput = document.getElementById('custPincode');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';
  const city = cityInput ? cityInput.value.trim() : '';
  const pincode = pincodeInput ? pincodeInput.value.trim() : '';

  // Form Validation for All 5 Fields
  if (!name || name.length < 2) {
    showToast('Please enter your full name');
    if (nameInput) nameInput.focus();
    return;
  }

  const phoneClean = phone.replace(/[^0-9]/g, '');
  if (phoneClean.length !== 10) {
    showToast('Please enter a valid 10-digit mobile number');
    if (phoneInput) phoneInput.focus();
    return;
  }

  if (!address || address.length < 5) {
    showToast('Please enter your complete street address');
    if (addressInput) addressInput.focus();
    return;
  }

  if (!city || city.length < 2) {
    showToast('Please enter your city/town');
    if (cityInput) cityInput.focus();
    return;
  }

  const pinClean = pincode.replace(/[^0-9]/g, '');
  if (pinClean.length !== 6) {
    showToast('Please enter a valid 6-digit Indian PIN code');
    if (pincodeInput) pincodeInput.focus();
    return;
  }

  const payMethodRadio = document.querySelector('input[name="payMethod"]:checked');
  const payMethod = payMethodRadio ? payMethodRadio.value : 'Cash on Delivery (COD)';

  // Save for future orders
  localStorage.setItem('pp_customer_info', JSON.stringify({
    name,
    phone: phoneClean,
    address,
    city,
    pincode: pinClean
  }));

  // Generate Order
  const orderId = 'PP-' + Math.floor(100000 + Math.random() * 900000);
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  // Build WhatsApp pre-filled message
  const itemsText = cart.map(i => `• ${i.name} (${i.size}) x ${i.qty} = ₹${(i.price * i.qty).toLocaleString('en-IN')}`).join('\n');
  const waMessage = 
`👑 *PERFUME PARADISE INDIA - NEW ORDER* 👑
---------------------------------------
*Order ID:* ${orderId}
*Payment Mode:* ${payMethod}

📦 *ORDERED FRAGRANCES:*
${itemsText}

💰 *TOTAL PAYABLE:* ₹${subtotal.toLocaleString('en-IN')}

📍 *DELIVERY ADDRESS:*
*Name:* ${name}
*Phone:* ${phoneClean}
*Address:* ${address}
*City:* ${city}
*Pincode:* ${pinClean}

Please confirm and dispatch my order. Thank you!`;

  const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(waMessage)}`;

  // Populate Order Success Modal
  document.getElementById('orderSuccessId').textContent = `ORDER #${orderId}`;
  document.getElementById('orderSuccessTotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  document.getElementById('orderSuccessPaymentMethod').textContent = payMethod;
  document.getElementById('orderSuccessAddress').innerHTML = `
    <strong>${name}</strong><br>
    ${address}, ${city} - ${pinClean}<br>
    📞 +91 ${phoneClean}
  `;

  document.getElementById('orderItemsSummaryList').innerHTML = cart.map(item => `
    <div class="order-summary-row">
      <span>${item.qty}x ${item.name} <small style="color:var(--gold-700);">(${item.size})</small></span>
      <span>₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
    </div>
  `).join('');

  const waBtn = document.getElementById('orderWhatsAppBtn');
  if (waBtn) waBtn.href = waUrl;

  // Clear cart
  cart = [];
  saveCart();
  updateHeaderBadges();
  renderCartItems();

  // Close cart drawer & open confirmation modal
  document.getElementById('cartDrawer').classList.remove('active');
  document.getElementById('orderSuccessModal').classList.add('active');
  document.getElementById('modalBackdrop').classList.add('active');

  showToast(`🎉 Order #${orderId} confirmed successfully!`);
}

function closeOrderModal() {
  document.getElementById('orderSuccessModal').classList.remove('active');
  document.getElementById('modalBackdrop').classList.remove('active');
}

/* ==========================================================================
   WISHLIST SYSTEM
   ========================================================================== */
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed ${product ? product.name : 'product'} from wishlist`);
  } else {
    wishlist.push(productId);
    showToast(`Saved ${product ? product.name : 'product'} to your wishlist!`);
  }

  localStorage.setItem('pp_wishlist', JSON.stringify(wishlist));
  updateHeaderBadges();
  renderProducts();
}

/* ==========================================================================
   QUICK VIEW MODAL (WITH 50ml ₹599 & 20ml ₹299 SIZES)
   ========================================================================== */
function initQuickView() {
  const qvClose = document.getElementById('qvCloseBtn');
  if (qvClose) {
    qvClose.addEventListener('click', closeQuickView);
  }
}

function setQuickViewSize(productId, size, price, origPrice) {
  qvActiveSize = size;
  const modal = document.getElementById('quickViewModal');
  if (!modal) return;

  const btn50 = modal.querySelector('.qv-size-50');
  const btn20 = modal.querySelector('.qv-size-20');
  const priceCurrent = modal.querySelector('.qv-price-current');
  const priceOrig = modal.querySelector('.qv-price-orig');
  const addBtn = modal.querySelector('.qv-add-btn');

  if (size === '20ml') {
    if (btn20) btn20.classList.add('active');
    if (btn50) btn50.classList.remove('active');
  } else {
    if (btn50) btn50.classList.add('active');
    if (btn20) btn20.classList.remove('active');
  }

  if (priceCurrent) priceCurrent.textContent = `₹${price}`;
  if (priceOrig) priceOrig.textContent = `₹${origPrice}`;
  if (addBtn) {
    addBtn.innerHTML = `Add To Bag • ₹${price}`;
    addBtn.setAttribute('onclick', `addToCart('${productId}', '${size}', ${price}); closeQuickView();`);
  }
}

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  qvActiveSize = selectedProductSizes[productId] || '50ml';
  const currPrice = qvActiveSize === '20ml' ? product.price20ml : product.price50ml;
  const currOrigPrice = qvActiveSize === '20ml' ? product.originalPrice20ml : product.originalPrice50ml;

  const modal = document.getElementById('quickViewModal');
  const backdrop = document.getElementById('modalBackdrop');
  const content = document.getElementById('qvModalContent');

  content.innerHTML = `
    <div class="qv-grid">
      <div class="qv-media">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="qv-details">
        <div class="section-label" style="margin-bottom:6px;">${product.categoryName}</div>
        <h2 style="font-family:var(--font-serif-royal); font-size:1.8rem; color:var(--emerald-950); margin-bottom:8px;">${product.name}</h2>
        <p style="font-size:0.85rem; color:var(--gold-600); font-weight:600; margin-bottom:14px;">${product.subtitle}</p>

        <div class="product-pricing-wrap" style="margin-bottom:18px;">
          <span class="product-price-current qv-price-current" style="font-size:1.5rem;">₹${currPrice}</span>
          <span class="product-price-original qv-price-orig" style="font-size:1rem;">₹${currOrigPrice}</span>
          <span class="product-discount-tag" style="font-size:0.8rem;">SAVE 40%</span>
        </div>

        <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.6; margin-bottom:18px;">
          ${product.description}
        </p>

        <div class="qv-pyramid">
          <div style="font-family:var(--font-serif-royal); font-size:0.76rem; letter-spacing:0.12em; color:var(--gold-600); margin-bottom:10px; text-transform:uppercase;">✦ Olfactory Pyramid ✦</div>
          <div class="qv-pyramid-tier"><strong>Top:</strong> ${product.topNotes}</div>
          <div class="qv-pyramid-tier"><strong>Heart:</strong> ${product.heartNotes}</div>
          <div class="qv-pyramid-tier"><strong>Base:</strong> ${product.baseNotes}</div>
        </div>

        <div style="margin-bottom:20px;">
          <label style="font-family:var(--font-serif-royal); font-size:0.75rem; letter-spacing:0.1em; color:var(--emerald-950); text-transform:uppercase; display:block; margin-bottom:8px;">Select Flacon Size:</label>
          <div class="qv-size-group">
            <button type="button" class="qv-size-btn qv-size-50 ${qvActiveSize === '50ml' ? 'active' : ''}" onclick="setQuickViewSize('${product.id}', '50ml', 599, 999)">
              <span class="size-title">50ml Signature Flacon</span>
              <span class="size-price-tag">₹599 (Save 40%)</span>
            </button>
            <button type="button" class="qv-size-btn qv-size-20 ${qvActiveSize === '20ml' ? 'active' : ''}" onclick="setQuickViewSize('${product.id}', '20ml', 299, 499)">
              <span class="size-title">20ml Luxury Pocket Spray</span>
              <span class="size-price-tag">₹299 (Save 40%)</span>
            </button>
          </div>
        </div>

        <div style="display:flex; gap:12px; margin-top:auto;">
          <button class="btn btn-primary qv-add-btn" style="flex:1;" onclick="addToCart('${product.id}', '${qvActiveSize}', ${currPrice}); closeQuickView();">
            Add To Bag • ₹${currPrice}
          </button>
          <button class="btn btn-secondary" onclick="toggleWishlist('${product.id}')" style="color:var(--emerald-950); border-color:var(--border-gold);">
            ♥ Wishlist
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  backdrop.classList.add('active');
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
  const backdrop = document.getElementById('modalBackdrop');
  if (backdrop && !document.getElementById('cartDrawer').classList.contains('active') && !document.getElementById('searchModal').classList.contains('active') && !document.getElementById('orderSuccessModal').classList.contains('active')) {
    backdrop.classList.remove('active');
  }
}

/* ==========================================================================
   LIVE SEARCH MODAL
   ========================================================================= */
function initLiveSearch() {
  const searchBtn = document.getElementById('searchToggleBtn');
  const searchModal = document.getElementById('searchModal');
  const searchClose = document.getElementById('searchCloseBtn');
  const searchField = document.getElementById('searchField');
  const resultsContainer = document.getElementById('searchResultsArea');

  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', () => {
      searchModal.classList.add('active');
      searchField.focus();
    });
  }

  if (searchClose) {
    searchClose.addEventListener('click', closeSearch);
  }

  if (searchField && resultsContainer) {
    searchField.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        resultsContainer.innerHTML = '<p style="color:var(--ivory-200); text-align:center; grid-column:1/-1;">Type a fragrance name (e.g., Khalifa, Bilal, Oud) or note (Sandalwood, Vanilla, Amber)...</p>';
        return;
      }

      const matches = PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.topNotes.toLowerCase().includes(q) ||
        p.heartNotes.toLowerCase().includes(q) ||
        p.baseNotes.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = '<p style="color:var(--ivory-200); text-align:center; grid-column:1/-1;">No fragrances match your search. Try "Oud", "Rose", "Vanilla", or "Amber".</p>';
      } else {
        resultsContainer.innerHTML = matches.map(p => `
          <div style="background:rgba(255,255,255,0.06); border:1px solid var(--border-gold); padding:12px; border-radius:4px; display:flex; gap:12px; align-items:center; cursor:pointer;" onclick="closeSearch(); openQuickView('${p.id}');">
            <img src="${p.image}" alt="${p.name}" style="width:60px; height:60px; object-fit:cover; border-radius:2px;">
            <div>
              <h5 style="font-family:var(--font-serif-royal); color:var(--ivory-50); font-size:0.9rem;">${p.name}</h5>
              <p style="font-size:0.75rem; color:var(--gold-400);">${p.subtitle}</p>
              <p style="font-size:0.8rem; color:var(--ivory-100); font-weight:700;">50ml: ₹599 • 20ml: ₹299</p>
            </div>
          </div>
        `).join('');
      }
    });
  }
}

function closeSearch() {
  const modal = document.getElementById('searchModal');
  if (modal) modal.classList.remove('active');
}

/* ==========================================================================
   NEWSLETTER & TOASTS
   ========================================================================== */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      if (email) {
        showToast('Welcome to the Perfume Paradise VIP Circle! Use code PARADISE10 for 10% off.');
        form.reset();
      }
    });
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">✦</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
