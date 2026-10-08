/**
 * Centralized data and configuration for PickBox Pro Landing Page.
 * All placeholders ([WHATSAPP_NUMBER], [BASIC_PRICE], etc.) are defined here
 * for easy replacement and management.
 */

export interface DemoItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  demoUrlPlaceholder: string;
  demoUrl: string;
  imagePlaceholder: string;
  previewBg: string;
  accentColor: string;
  sampleProducts: {
    name: string;
    priceBDT: number;
    priceUSD: number;
    rating: number;
    tag: string;
    image: string;
  }[];
}

export interface PluginItem {
  id: string;
  namePlaceholder: string;
  name: string;
  category: string;
  descriptionPlaceholder: string;
  description: string;
  pricePlaceholder: string;
  priceBDT: string;
  priceUSD: string;
  urlPlaceholder: string;
  badge: 'Popular Addon' | 'Recommended' | 'Essential';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Editable Placeholders
export const PLACEHOLDERS = {
  LOGO: 'PickBox Pro',
  WHATSAPP_NUMBER: '+880 1700-000000',
  PHONE_NUMBER: '+880 1700-000000',
  EMAIL_ADDRESS: 'contact@pickboxpro.com',
  BUSINESS_ADDRESS: 'Dhaka, Bangladesh',
  BASIC_PRICE_BDT: '৳4,999',
  BASIC_PRICE_USD: '$49',
  PREMIUM_PRICE_BDT: '৳9,999',
  PREMIUM_PRICE_USD: '$99',
  REAL_TESTIMONIAL_1: {
    client: 'Local Apparel Brand',
    niche: 'Fashion Store',
    text: 'We were struggling with Facebook-only inbox orders. Having a dedicated ready-made store with automated bKash checkout made order management seamless from day one.',
    verified: 'Real Client Verification'
  },
  REAL_TESTIMONIAL_2: {
    client: 'Organic Grocery Seller',
    niche: 'Fresh Produce',
    text: 'Setting up an online grocery store from scratch was quoted at 60,000 BDT elsewhere. PickBox Pro got our ready-made store launched with category weights in under 3 days.',
    verified: 'Real Client Verification'
  }
};

// Website Demos Catalog
export const WEBSITE_DEMOS: DemoItem[] = [
  {
    id: 'demo-fashion',
    name: 'Aura Trendwear',
    category: 'Fashion',
    tagline: 'Modern Apparel & Clothing Boutique',
    description: 'Clean, high-converting fashion store featuring visual category grids, size/color swatches, and fast mobile lookbook.',
    features: ['WooCommerce Ready', 'Elementor Editable', 'Color & Size Swatches', 'Mobile Lookbook'],
    demoUrlPlaceholder: '[DEMO_URL_1]',
    demoUrl: 'https://demo1.pickboxpro.com/fashion',
    imagePlaceholder: '[DEMO_IMAGE_1]',
    previewBg: 'from-slate-900 to-indigo-950',
    accentColor: '#6366f1',
    sampleProducts: [
      { name: 'Oversized Washed Denim Jacket', priceBDT: 2450, priceUSD: 24, rating: 4.9, tag: 'Bestseller', image: '🧥' },
      { name: 'Minimalist Relaxed Cotton Tee', priceBDT: 850, priceUSD: 9, rating: 4.8, tag: 'New In', image: '👕' },
      { name: 'Tailored Wide-Leg Trousers', priceBDT: 1850, priceUSD: 18, rating: 4.7, tag: 'Trending', image: '👖' }
    ]
  },
  {
    id: 'demo-grocery',
    name: 'FreshDaily Mart',
    category: 'Grocery',
    tagline: 'Organic Groceries, Produce & Daily Essentials',
    description: 'User-friendly supermarket layout with category sidebars, weight variation selectors, and direct WhatsApp order option.',
    features: ['WooCommerce Ready', 'Weight & Pack Variations', 'Category Sidebar', 'Express Checkout'],
    demoUrlPlaceholder: '[DEMO_URL_2]',
    demoUrl: 'https://demo2.pickboxpro.com/grocery',
    imagePlaceholder: '[DEMO_IMAGE_2]',
    previewBg: 'from-emerald-950 to-slate-900',
    accentColor: '#10b981',
    sampleProducts: [
      { name: 'Organic Cold-Pressed Mustard Oil 1L', priceBDT: 320, priceUSD: 3.5, rating: 4.9, tag: 'Organic', image: '🧴' },
      { name: 'Premium Kalijeera Aromatic Rice 5kg', priceBDT: 680, priceUSD: 7, rating: 5.0, tag: 'Farm Fresh', image: '🌾' },
      { name: 'Pure Sundarban Honey 500g', priceBDT: 550, priceUSD: 5.5, rating: 4.8, tag: 'Pure', image: '🍯' }
    ]
  },
  {
    id: 'demo-cosmetics',
    name: 'GlowBotanics',
    category: 'Cosmetics',
    tagline: 'Skincare, Cosmetics & Natural Beauty',
    description: 'Aesthetic beauty store designed for skincare routines, ingredient highlights, customer photo reviews, and bundle savings.',
    features: ['WooCommerce Ready', 'High-Res Product Zoom', 'Ingredient Highlights', 'Fast Mobile UI'],
    demoUrlPlaceholder: '[DEMO_URL_3]',
    demoUrl: 'https://demo3.pickboxpro.com/cosmetics',
    imagePlaceholder: '[DEMO_IMAGE_3]',
    previewBg: 'from-rose-950 to-slate-900',
    accentColor: '#f43f5e',
    sampleProducts: [
      { name: 'Hydrating Hyaluronic Acid Serum 30ml', priceBDT: 1250, priceUSD: 13, rating: 4.9, tag: 'Trending', image: '✨' },
      { name: 'Centella Soothing Gel Cream', priceBDT: 980, priceUSD: 10, rating: 4.8, tag: 'Sensitive Skin', image: '🍃' },
      { name: 'Brightening Niacinamide Daily Toner', priceBDT: 1100, priceUSD: 11, rating: 4.7, tag: 'Top Rated', image: '💧' }
    ]
  },
  {
    id: 'demo-electronics',
    name: 'VoltTech Gadgets',
    category: 'Electronics',
    tagline: 'Consumer Electronics, Audio & Smart Gadgets',
    description: 'High-tech catalog with clear technical specification tables, warranty badges, and sticky add to cart for faster orders.',
    features: ['WooCommerce Ready', 'Spec Comparison', 'Sticky Add to Cart', 'Warranty Badges'],
    demoUrlPlaceholder: '[DEMO_URL_4]',
    demoUrl: 'https://demo4.pickboxpro.com/gadgets',
    imagePlaceholder: '[DEMO_IMAGE_4]',
    previewBg: 'from-cyan-950 to-slate-900',
    accentColor: '#06b6d4',
    sampleProducts: [
      { name: 'True Wireless Active Noise Earbuds', priceBDT: 2950, priceUSD: 29, rating: 4.9, tag: 'ANC Tech', image: '🎧' },
      { name: 'Magnetic 15W Fast Wireless Charger', priceBDT: 1450, priceUSD: 15, rating: 4.8, tag: 'Fast Charge', image: '🔋' },
      { name: 'Ultra-Slim Smartwatch with AMOLED Display', priceBDT: 4200, priceUSD: 42, rating: 4.9, tag: 'AMOLED', image: '⌚' }
    ]
  },
  {
    id: 'demo-restaurant',
    name: 'UrbanBistro Express',
    category: 'Restaurant',
    tagline: 'Restaurant, Cloud Kitchen & Food Ordering',
    description: 'Appetizing online food menu with meal modifier options (spiciness, sides), delivery zone support, and instant cart.',
    features: ['WooCommerce Ready', 'Food Modifiers & Add-ons', 'Takeaway / Delivery', 'Instant WhatsApp Cart'],
    demoUrlPlaceholder: '[DEMO_URL_5]',
    demoUrl: 'https://demo5.pickboxpro.com/restaurant',
    imagePlaceholder: '[DEMO_IMAGE_5]',
    previewBg: 'from-amber-950 to-slate-900',
    accentColor: '#f59e0b',
    sampleProducts: [
      { name: 'Smoked Beef Gourmet Burger Meal', priceBDT: 490, priceUSD: 5, rating: 5.0, tag: 'Chef Choice', image: '🍔' },
      { name: 'Crispy Korean Garlic Wings (8 Pcs)', priceBDT: 380, priceUSD: 4, rating: 4.8, tag: 'Crispy', image: '🍗' },
      { name: 'Loaded Hand-Tossed Pepperoni Pizza', priceBDT: 790, priceUSD: 8, rating: 4.9, tag: 'Hot & Fresh', image: '🍕' }
    ]
  },
  {
    id: 'demo-general',
    name: 'OmniCart Superstore',
    category: 'General Store',
    tagline: 'Multi-Category Retail & General Merchandise',
    description: 'Versatile mega-store layout built for diverse inventory lines, featured flash deals, and quick-filter navigation.',
    features: ['WooCommerce Ready', 'Multi-Category Mega Menu', 'Flash Sale Countdown', 'Advanced Search'],
    demoUrlPlaceholder: '[DEMO_URL_6]',
    demoUrl: 'https://demo6.pickboxpro.com/general',
    imagePlaceholder: '[DEMO_IMAGE_6]',
    previewBg: 'from-blue-950 to-slate-900',
    accentColor: '#3b82f6',
    sampleProducts: [
      { name: 'Multi-Purpose Cordless Desk Fan', priceBDT: 1350, priceUSD: 14, rating: 4.7, tag: 'Flash Sale', image: '🌪️' },
      { name: 'Stainless Steel Insulated Tumbler 750ml', priceBDT: 850, priceUSD: 9, rating: 4.9, tag: 'Best Seller', image: '🥤' },
      { name: 'Ergonomic Memory Foam Lumbar Cushion', priceBDT: 1200, priceUSD: 12, rating: 4.8, tag: 'Popular', image: '🛋️' }
    ]
  },
  {
    id: 'demo-perfume',
    name: 'Velvet Oud & Scents',
    category: 'Fashion',
    tagline: 'Luxury Perfumes, Attar & Fine Fragrances',
    description: 'Premium luxury aesthetic with dark mode sophistication, scent notes pyramid breakdown, and gift packaging options.',
    features: ['WooCommerce Ready', 'Fragrance Notes Guide', 'Gift Packaging Option', 'Prestige Typography'],
    demoUrlPlaceholder: '[DEMO_URL_7]',
    demoUrl: 'https://demo7.pickboxpro.com/perfume',
    imagePlaceholder: '[DEMO_IMAGE_7]',
    previewBg: 'from-violet-950 to-slate-900',
    accentColor: '#8b5cf6',
    sampleProducts: [
      { name: 'Royal Cambodian Agarwood Oud 12ml', priceBDT: 3500, priceUSD: 35, rating: 5.0, tag: 'Pure Oud', image: '🏺' },
      { name: 'Midnight Bergamot Eau De Parfum 100ml', priceBDT: 2800, priceUSD: 28, rating: 4.9, tag: 'Signature', image: '✨' },
      { name: 'Golden Amber & Rose Artisan Blend', priceBDT: 1950, priceUSD: 20, rating: 4.8, tag: 'Artisan', image: '🌸' }
    ]
  },
  {
    id: 'demo-accessories',
    name: 'Crafted Leather Co.',
    category: 'Other',
    tagline: 'Leather Bags, Wallets & Handcrafted Accessories',
    description: 'Heritage aesthetic tailored for artisan accessories, custom engraving options, and high-impact visual storytelling.',
    features: ['WooCommerce Ready', 'Custom Engraving Input', 'Grid Gallery', 'One-Page Checkout'],
    demoUrlPlaceholder: '[DEMO_URL_8]',
    demoUrl: 'https://demo8.pickboxpro.com/leather',
    imagePlaceholder: '[DEMO_IMAGE_8]',
    previewBg: 'from-stone-950 to-slate-900',
    accentColor: '#d97706',
    sampleProducts: [
      { name: 'Full-Grain Leather Bi-Fold Wallet', priceBDT: 1450, priceUSD: 15, rating: 4.9, tag: 'Genuine Leather', image: '👛' },
      { name: 'Vintage Messenger Laptop Bag 15"', priceBDT: 3800, priceUSD: 38, rating: 4.8, tag: 'Handmade', image: '💼' },
      { name: 'Classic Reversible Italian Leather Belt', priceBDT: 1250, priceUSD: 13, rating: 4.9, tag: 'Classic', image: '👔' }
    ]
  }
];

// Core Features list ("What You Get")
export const CORE_FEATURES = [
  {
    title: 'Professional Homepage',
    desc: 'Clean, conversion-optimized hero banner, featured categories, and spotlight products built to turn ad traffic into paying customers.',
    icon: 'Layout'
  },
  {
    title: 'WooCommerce Core Engine',
    desc: 'The global standard for e-commerce, offering full data ownership, inventory controls, and order tracking without monthly platform cuts.',
    icon: 'ShoppingBag'
  },
  {
    title: 'Product & Category Setup',
    desc: 'Pre-configured store hierarchy, taxonomy, and sample products ready for you to add your items immediately.',
    icon: 'Layers'
  },
  {
    title: 'Shopping Cart System',
    desc: 'Smooth slide-out mini-cart and responsive cart page allowing shoppers to review quantities and apply discount codes easily.',
    icon: 'ShoppingCart'
  },
  {
    title: 'Streamlined Checkout',
    desc: 'Friction-free checkout flow designed to minimize abandoned orders, with simple address fields and instant order summary.',
    icon: 'CreditCard'
  },
  {
    title: 'Payment Gateway Integration',
    desc: 'Setup support for Cash on Delivery (COD) and supported mobile banking gateways (bKash, Nagad, Rocket) or card processing.',
    icon: 'DollarSign'
  },
  {
    title: 'Product Variations',
    desc: 'Support for multiple sizes, colors, weights, and bundle options with dynamic live price and inventory updates.',
    icon: 'Grid'
  },
  {
    title: 'Mobile Responsive Design',
    desc: 'Pixel-perfect mobile display and touch-friendly controls tested for fast browsing on 4G smartphone networks.',
    icon: 'Smartphone'
  },
  {
    title: 'Elementor Customization',
    desc: 'Easily edit banners, text, colors, and layout sections via intuitive drag-and-drop without touching code.',
    icon: 'Palette'
  },
  {
    title: 'SEO-Friendly Structure',
    desc: 'Clean semantic URLs, optimized meta structures, and fast DOM rendering to help your store index cleanly on Google.',
    icon: 'Search'
  },
  {
    title: 'Speed Optimization',
    desc: 'Configured image compression, asset minification, and browser caching to ensure rapid page load times for ad clicks.',
    icon: 'Zap'
  },
  {
    title: 'Security Setup',
    desc: 'Basic WordPress hardening, brute-force login protection, and SSL-ready configuration for safe customer transactions.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Optimized Product Pages',
    desc: 'High-res image galleries, tabs for description and sizing, customer reviews, and prominent Add to Cart action.',
    icon: 'Eye'
  },
  {
    title: 'Contact & WhatsApp Integration',
    desc: 'One-click floating WhatsApp chat and order inquiry button to answer customer questions and close sales directly.',
    icon: 'MessageCircle'
  },
  {
    title: 'Basic Support & Handover',
    desc: 'Personal guidance after deployment on how to add products, process customer orders, and update prices in your dashboard.',
    icon: 'Headphones'
  }
];

// Why Premium Visual Showcase Features
export const PREMIUM_SHOWCASE_ITEMS = [
  {
    id: 'p-variations',
    title: 'Visual Color & Size Swatches',
    subtitle: 'Interactive attribute pickers that replace dull dropdown menus',
    benefit: 'Reduces buyer hesitation by showing available sizes, color pills, and real-time inventory count.',
    previewType: 'swatches'
  },
  {
    id: 'p-sticky',
    title: 'Sticky "Add to Cart" Bar',
    subtitle: 'Keeps purchase action visible as visitors scroll through product photos',
    benefit: 'Eliminates scrolling back to the top on mobile phones, directly driving faster conversions.',
    previewType: 'sticky-cart'
  },
  {
    id: 'p-gallery',
    title: 'High-Definition Gallery & Zoom',
    subtitle: 'Smooth pinch-to-zoom, lightbox previews, and multi-angle slides',
    benefit: 'Gives shoppers the tactile confidence of seeing fabric texture, stitch details, or tech specs.',
    previewType: 'gallery-zoom'
  },
  {
    id: 'p-upsell',
    title: 'Related Products & Smart Upsell',
    subtitle: 'Frequently bought together bundles & recommendation carousels',
    benefit: 'Increases Average Order Value (AOV) by tempting shoppers with matching accessories.',
    previewType: 'upsell'
  },
  {
    id: 'p-wishlist',
    title: 'Wishlist & Save for Later',
    subtitle: 'One-tap heart button that remembers desired items across visits',
    benefit: 'Brings visitors back when paychecks arrive and captures intent from hesitant browsers.',
    previewType: 'wishlist'
  },
  {
    id: 'p-checkout',
    title: 'One-Page Frictionless Checkout',
    subtitle: 'Condensed single-page form with express autofill and instant payment toggle',
    benefit: 'Cuts checkout drop-offs significantly compared to tedious multi-step traditional forms.',
    previewType: 'one-page-checkout'
  },
  {
    id: 'p-currency',
    title: 'Multiple Currency Switcher',
    subtitle: 'Automatic or manual toggle between BDT, USD, EUR, and GBP',
    benefit: 'Sell to local customers in Taka while taking orders from overseas diaspora and expat buyers.',
    previewType: 'multi-currency'
  },
  {
    id: 'p-priority',
    title: 'Priority Hand-in-Hand Launch Support',
    subtitle: 'Dedicated setup guidance, direct chat support, and launch review',
    benefit: 'Get your store launched with confidence without feeling stranded on technical hurdles.',
    previewType: 'priority-support'
  }
];

// Plugins & Add-Ons Catalog
export const PLUGINS_CATALOG: PluginItem[] = [
  {
    id: 'plugin-payment',
    namePlaceholder: '[PLUGIN_NAME]',
    name: 'PickBox Mobile Banking Gateway Pro',
    category: 'Payment',
    descriptionPlaceholder: '[PLUGIN_DESCRIPTION]',
    description: 'Instant automated integration for bKash, Nagad, and Rocket with transaction ID verification and automated status change.',
    pricePlaceholder: '[PLUGIN_PRICE]',
    priceBDT: '৳1,500',
    priceUSD: '$15',
    urlPlaceholder: '[PLUGIN_URL]',
    badge: 'Essential'
  },
  {
    id: 'plugin-checkout',
    namePlaceholder: '[PLUGIN_NAME]',
    name: 'One-Click Express Checkout Pro',
    category: 'Checkout',
    descriptionPlaceholder: '[PLUGIN_DESCRIPTION]',
    description: 'Streamlines WooCommerce checkout into a sleek single-page modal, skipping cart redirection for higher ad conversion.',
    pricePlaceholder: '[PLUGIN_PRICE]',
    priceBDT: '৳1,200',
    priceUSD: '$12',
    urlPlaceholder: '[PLUGIN_URL]',
    badge: 'Popular Addon'
  },
  {
    id: 'plugin-swatches',
    namePlaceholder: '[PLUGIN_NAME]',
    name: 'Visual Variation Swatches & Size Chart',
    category: 'Product Experience',
    descriptionPlaceholder: '[PLUGIN_DESCRIPTION]',
    description: 'Converts default WooCommerce variation dropdowns into interactive color circles, image swatches, and size guides.',
    pricePlaceholder: '[PLUGIN_PRICE]',
    priceBDT: '৳990',
    priceUSD: '$10',
    urlPlaceholder: '[PLUGIN_URL]',
    badge: 'Recommended'
  },
  {
    id: 'plugin-optimizer',
    namePlaceholder: '[PLUGIN_NAME]',
    name: 'PickBox Asset Optimizer & Speed Booster',
    category: 'Performance',
    descriptionPlaceholder: '[PLUGIN_DESCRIPTION]',
    description: 'Lightweight WordPress asset manager that disables unused CSS/JS scripts on product pages to deliver lightning speeds.',
    pricePlaceholder: '[PLUGIN_PRICE]',
    priceBDT: '৳1,200',
    priceUSD: '$12',
    urlPlaceholder: '[PLUGIN_URL]',
    badge: 'Popular Addon'
  },
  {
    id: 'plugin-courier',
    namePlaceholder: '[PLUGIN_NAME]',
    name: 'Automated Courier & Order Dispatcher',
    category: 'Order Management',
    descriptionPlaceholder: '[PLUGIN_DESCRIPTION]',
    description: 'Connects directly with leading local courier APIs (Steadfast, Pathao, RedX) to generate delivery parcels in 1 click.',
    pricePlaceholder: '[PLUGIN_PRICE]',
    priceBDT: '৳1,800',
    priceUSD: '$18',
    urlPlaceholder: '[PLUGIN_URL]',
    badge: 'Recommended'
  },
  {
    id: 'plugin-whatsapp',
    namePlaceholder: '[PLUGIN_NAME]',
    name: 'WhatsApp Live Chat & Abandoned Recovery',
    category: 'Customer & Marketing',
    descriptionPlaceholder: '[PLUGIN_DESCRIPTION]',
    description: 'Embeds a customizable floating WhatsApp button and allows one-click customer messaging with their cart contents.',
    pricePlaceholder: '[PLUGIN_PRICE]',
    priceBDT: '৳800',
    priceUSD: '$8',
    urlPlaceholder: '[PLUGIN_URL]',
    badge: 'Essential'
  }
];

// FAQs List
export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is a ready-made e-commerce website?',
    answer: 'A ready-made e-commerce website is a professionally structured, pre-built online store developed on WordPress and WooCommerce. Instead of starting from a blank page and spending weeks on custom development, you select an existing proven design, and we customize it with your branding, products, and payment methods.'
  },
  {
    id: 'faq-2',
    question: 'Can I customize the website?',
    answer: 'Yes, completely. Every website is built using Elementor and WooCommerce, giving you full control over text, images, banners, color palettes, and page layouts without needing to write code.'
  },
  {
    id: 'faq-3',
    question: 'Can I add my own logo and colors?',
    answer: 'Yes. During initial setup, we implement your custom logo, brand color codes, typography preferences, and contact details so the store matches your exact business identity.'
  },
  {
    id: 'faq-4',
    question: 'Can I add my products?',
    answer: 'Yes. We set up your initial product categories and sample items. You can then add unlimited products, high-resolution pictures, pricing, and descriptions anytime via your easy-to-use WordPress admin panel.'
  },
  {
    id: 'faq-5',
    question: 'Do you provide WooCommerce?',
    answer: 'Yes. WooCommerce is the core e-commerce engine behind all our websites. It gives you 100% full ownership over your customer data, sales records, and inventory without any third-party transaction commissions.'
  },
  {
    id: 'faq-6',
    question: 'Can you help with payment gateway setup?',
    answer: 'Yes. We configure standard Cash on Delivery (COD) and help you integrate supported local payment gateways (such as bKash, Nagad, Rocket) and credit/debit card processors so you can receive funds directly into your accounts.'
  },
  {
    id: 'faq-7',
    question: 'What is the difference between Basic and Premium?',
    answer: 'Basic contains all core e-commerce necessities (ready-made website, WooCommerce setup, responsive layout, cart, checkout, and initial setup). Premium provides an advanced shopping experience including color/size swatches, sticky add-to-cart, related product upsells, wishlist, multi-currency support, and priority launch support.'
  },
  {
    id: 'faq-8',
    question: 'Can I upgrade later?',
    answer: 'Yes. You can launch your business on the Basic package today, and upgrade to Premium or add individual plugins whenever your sales volume increases.'
  },
  {
    id: 'faq-9',
    question: 'Is the website mobile responsive?',
    answer: 'Yes. More than 80% of online shopping traffic comes from smartphones. Every template is strictly tested on iOS and Android viewports to ensure quick loading, clean typography, and thumb-friendly checkout.'
  },
  {
    id: 'faq-10',
    question: 'Do you provide support after purchase?',
    answer: 'Yes. We offer onboarding support and a walkthrough to guide you through order management, product uploads, and dashboard controls so you can operate your store confidently.'
  },
  {
    id: 'faq-11',
    question: 'Can you help me with hosting/domain setup?',
    answer: 'Yes. If you already have a domain and web hosting, we deploy the store directly to your hosting server. If you do not have them yet, we recommend reliable, budget-friendly hosting options and help you configure DNS.'
  },
  {
    id: 'faq-12',
    question: 'Can I purchase additional plugins?',
    answer: 'Yes. We have a selection of optional specialized plugins (such as automated courier sync, speed booster, and express checkout) that can be added to your website at any time.'
  }
];
