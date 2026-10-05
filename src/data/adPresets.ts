import { AdCreativeData, AdCopyTemplate, FormatSpec } from '../types/ad';

export const BRAND_COLORS = {
  olive: '#4B5E38',      // Rich Olive Green
  oliveDark: '#364428',  // Deep Olive
  oliveLight: '#657E4C', // Bright Olive
  forestGreen: '#142E1F', // Deep Pakistani Forest Green
  crimsonRed: '#D32F2F',  // Urgent Crimson Red
  redBright: '#E53935',   // Vivid Action Red
  white: '#FFFFFF',
  offWhite: '#F7F8F4',
  black: '#0F120E',
  neutralCharcoal: '#1E231C',
};

export const FORMAT_SPECS: FormatSpec[] = [
  {
    format: '1:1',
    label: 'Square Feed (1:1)',
    aspectRatio: '1 / 1',
    pixelWidth: 1080,
    pixelHeight: 1080,
    bestFor: 'Instagram & Facebook Newsfeed, Carousel',
    metaRecommendation: 'Recommended standard for all general feed placements and multi-product carousels.'
  },
  {
    format: '9:16',
    label: 'Vertical Story & Reel (9:16)',
    aspectRatio: '9 / 16',
    pixelWidth: 1080,
    pixelHeight: 1920,
    bestFor: 'Instagram Stories, Instagram Reels, Facebook Reels',
    metaRecommendation: 'Highest reach format for Gen Z & mobile users in Pakistan. Keep critical text inside safe zones (250px top/bottom).'
  },
  {
    format: '4:5',
    label: 'Mobile Feed Portrait (4:5)',
    aspectRatio: '4 / 5',
    pixelWidth: 1080,
    pixelHeight: 1350,
    bestFor: 'Instagram Feed (Highest Screen Real Estate)',
    metaRecommendation: 'Takes up maximum mobile screen height without being cropped in Instagram and Facebook feeds.'
  },
  {
    format: '1.91:1',
    label: 'Landscape / Link Ad (1.91:1)',
    aspectRatio: '1.91 / 1',
    pixelWidth: 1200,
    pixelHeight: 628,
    bestFor: 'Facebook Desktop Feed, Instant Articles, Right Column',
    metaRecommendation: 'Optimal for website link clicks and broad desktop engagement.'
  }
];

export const INITIAL_PRESETS: AdCreativeData[] = [
  {
    id: 'ad-1-streetwear-olive',
    name: '01. Gen Z Streetwear Drop (Olive Relaxed Fit)',
    brandName: 'SSK CLOTH',
    tagline: 'MENSWEAR // 2026 COLLECTION',
    headline: 'UPGRADE YOUR DRIP',
    subheadline: 'Breathable Pure Cotton · Boxy Modern Cut',
    highlightBadge: 'NEW DROP // LAHORE · ISB · KHI',
    pricePKR: 'Rs. 1,950',
    originalPricePKR: 'Rs. 2,999',
    discountText: 'FLAT 35% OFF',
    primaryColor: BRAND_COLORS.olive,
    accentColor: BRAND_COLORS.crimsonRed,
    secondaryColor: BRAND_COLORS.forestGreen,
    textColor: BRAND_COLORS.white,
    imageUrl: '/src/assets/images/shirt_olive_model_1791144018180.jpg',
    modelType: 'Pakistani Male Model (Olive Casual Shirt)',
    adStyle: 'streetwear',
    callToAction: 'SHOP NOW · COD AVAILABLE',
    cityTarget: 'Lahore · Karachi · Islamabad',
    codGuarantee: 'Cash on Delivery Across Pakistan 🇵🇰',
  },
  {
    id: 'ad-2-classic-white',
    name: '02. Minimal Oxford White (Young Professional 18-45)',
    brandName: 'SSK CLOTH',
    tagline: 'PREMIUM TAILORED SHIRTS',
    headline: 'THE CRISP WHITE ESSENTIAL',
    subheadline: 'Wrinkle-Resistant Oxford Weave · Day to Night',
    highlightBadge: 'BESTSELLER LAUNCH',
    pricePKR: 'Rs. 2,250',
    originalPricePKR: 'Rs. 3,450',
    discountText: 'SAVE RS. 1,200',
    primaryColor: BRAND_COLORS.forestGreen,
    accentColor: BRAND_COLORS.crimsonRed,
    secondaryColor: BRAND_COLORS.olive,
    textColor: BRAND_COLORS.white,
    imageUrl: '/src/assets/images/shirt_white_classic_1791144032490.jpg',
    modelType: 'Pakistani Young Professional (Crisp White Oxford)',
    adStyle: 'editorial',
    callToAction: 'ORDER NOW - CASH ON DELIVERY',
    cityTarget: 'Nationwide Delivery · 3-5 Days',
    codGuarantee: 'Open Parcel Before Payment Available',
  },
  {
    id: 'ad-3-green-story',
    name: '03. Emerald & Olive Cuban Collar (Summer Breeze)',
    brandName: 'SSK CLOTH',
    tagline: 'SUMMER HEAT EDITION',
    headline: 'STAY COOL. LOOK SHARP.',
    subheadline: 'Ultra-light Cotton Linen Blend for PK Heat',
    highlightBadge: 'LIMITED SUMMER BATCH',
    pricePKR: 'Rs. 1,890',
    originalPricePKR: 'Rs. 2,800',
    discountText: 'LIMITED PIECES LEFT',
    primaryColor: BRAND_COLORS.oliveDark,
    accentColor: BRAND_COLORS.crimsonRed,
    secondaryColor: BRAND_COLORS.forestGreen,
    textColor: BRAND_COLORS.white,
    imageUrl: '/src/assets/images/shirt_green_story_1791144047152.jpg',
    modelType: 'Gen Z Pakistani Model (Cuban Collar Resort Shirt)',
    adStyle: 'minimal_luxe',
    callToAction: 'TAP TO GET YOURS',
    cityTarget: 'Karachi · Lahore · Rawalpindi / Isb',
    codGuarantee: 'Pay When You Receive At Your Doorstep',
  },
  {
    id: 'ad-4-bundle-promo',
    name: '04. Multi-Shirt Launch Bundle (High AOV Conversion)',
    brandName: 'SSK CLOTH',
    tagline: 'SPECIAL LAUNCH OFFER',
    headline: 'BUY 2 SHIRTS GET FREE COD',
    subheadline: 'Olive, Pure White & Forest Green Hues',
    highlightBadge: 'MEGA VALUE DEAL',
    pricePKR: 'Rs. 3,599 for Pack of 2',
    originalPricePKR: 'Rs. 5,499',
    discountText: 'SAVE RS. 1,900',
    primaryColor: BRAND_COLORS.crimsonRed,
    accentColor: BRAND_COLORS.olive,
    secondaryColor: BRAND_COLORS.forestGreen,
    textColor: BRAND_COLORS.white,
    imageUrl: '/src/assets/images/shirt_red_olive_1791144058580.jpg',
    modelType: 'Product Display (Folded Olive, White, Green Trio)',
    adStyle: 'sale_promo',
    callToAction: 'CLAIM OFFER · FREE DELIVERY',
    cityTarget: 'All Major Cities of Pakistan',
    codGuarantee: 'Free Delivery to Lahore, KHI & ISB',
  }
];

export const META_COPY_VAULT: AdCopyTemplate[] = [
  {
    id: 'copy-1-genz',
    title: 'Gen Z & Youth Casual (Lahore / Khi / Isb Vibes)',
    angle: 'Aesthetic, trend-conscious, breathable fits for cafes, university, and hangouts.',
    primaryText: `Garmi mein heavy clothes pehnna band karo! ☀️

Introducing SSK Cloth's newest drop of ultra-breathable casual shirts for men. Designed with custom lightweight cotton & modern relaxed fits that keep you fresh from morning campus to late night chai cafe runs in Lahore, Karachi, and Islamabad.

🔥 What makes SSK Shirts hit different:
✔️ 100% Breathable Combed Cotton (Zero sweat cling)
✔️ Modern Cuban & Oxford cuts tested for South Asian fit
✔️ Rich Olive, Crisp White & Forest Green colorways
✔️ Cash On Delivery available nationwide
✔️ Easy 7-Day Size Exchange Guarantee

🎉 Launch Special: Flat 35% OFF on first 100 orders!
Get yours now starting at just Rs. 1,950. Tap 'Shop Now' before your size runs out! 👇`,
    headline: 'SSK Cloth | Premium Men’s Casual Shirts (Rs. 1,950)',
    description: 'Cash On Delivery Across Pakistan · Free Exchange',
    recommendedCTA: 'Shop Now',
    targetAudience: 'Men age 16-28 in Lahore, Karachi, Islamabad, Rawalpindi. Interests: Streetwear, Casual Shirts, University Lifestyle.'
  },
  {
    id: 'copy-2-trust-cod',
    title: 'High-Trust COD Launch (Overcoming New Page Skepticism)',
    angle: 'Builds immediate credibility for a new Facebook/Instagram page using Pakistani buyer triggers.',
    primaryText: `Naya brand hai isliye shaq ho raha hai? Bilkul samajhte hain! 🤝

Aapke aitmaad ke liye SSK Cloth laya hai 100% Open Parcel Policy:
Pehle parcel check karein, kapray ki quality dekhain, phir rider ko cash dein!

Men's Premium Shirts collection:
▪️ Tailored stitched collars that don't lose shape after 20+ washes
▪️ Signature Olive, Crisp Oxford White, and Earthy Green tones
▪️ Perfect for office, events, and casual weekends

📦 Cash On Delivery available across Lahore, Karachi, Islamabad, Faisalabad & all PK cities.
💰 Flat Launch Discount: Save up to Rs. 1,200 today!

Click 'Shop Now' to place your order in 30 seconds. No credit card needed! 🇵🇰`,
    headline: 'SSK Cloth | Check Parcel Before You Pay (COD Available)',
    description: '100% Premium Cotton · 7-Day Hassle-Free Exchange',
    recommendedCTA: 'Shop Now',
    targetAudience: 'Men age 22-45 in top tier Pakistani cities. High intent shoppers who prefer Cash On Delivery.'
  },
  {
    id: 'copy-3-bundle-deal',
    title: 'Double Pack Value Angle (Boost Average Order Value)',
    angle: 'Encourages purchasing 2 or 3 shirts at once, drastically reducing customer acquisition cost (CAC).',
    primaryText: `Ek shirt kyu jab aap do le sakte hain with FREE DELIVERY? ⚡

SSK Cloth Launch Duo Pack:
Pick ANY 2 Premium Shirts (Olive Green, Crisp White, or Forest Green) for just Rs. 3,599 (Regular Price Rs. 5,499)!

✨ Why you will love this:
✅ Save an extra Rs. 1,900 instantly
✅ FREE express courier shipping to your doorstep
✅ Pay cash on delivery
✅ Pre-shrunk premium fabric

Tap 'Order Now' to pick your two favorite colors and your size (S, M, L, XL, XXL). Limited stock for this week only! 👇`,
    headline: 'Buy Any 2 Shirts for Rs. 3,599 + FREE DELIVERY 🚚',
    description: 'SSK Cloth Official Launch · Cash on Delivery PK',
    recommendedCTA: 'Order Now',
    targetAudience: 'Men age 18-40 in Pakistan looking for high value, affordable premium clothing.'
  },
  {
    id: 'copy-4-whatsapp-direct',
    title: 'Direct WhatsApp Order Ad (Highest Conversion in Pakistan)',
    angle: 'Directs Pakistani customers to WhatsApp chat where reps can close orders with voice notes.',
    primaryText: `Website pe form bharne ka time nahi hai? Direct WhatsApp pe order karein! 📲

SSK Cloth ke new premium men's shirts ab direct chat par available hain.
Bas apna favorite color (Olive, White, Green), size aur address WhatsApp pe bhejain, aur parcel aapke darwazay par Cash On Delivery pohanch jayega.

Lahore, Karachi, Islamabad: 2-3 din mein delivery.
Baaki Pakistan: 3-4 working days.

Chat start karne ke liye 'Send WhatsApp Message' button dabayein! 👇`,
    headline: 'Order SSK Shirts Directly on WhatsApp (COD Available)',
    description: 'Instant reply · Cash on delivery · All sizes available',
    recommendedCTA: 'Send WhatsApp Message',
    targetAudience: 'Men age 18-45 in Pakistan who prefer conversational commerce on WhatsApp.'
  }
];

export const EXPERT_CAMPAIGN_GUIDE = {
  title: '30-Year Meta Ads Blueprint for SSK Cloth in Pakistan',
  experienceNote: 'Engineered specifically for a new fashion e-commerce page launching in Pakistan with 0 prior pixel data.',
  steps: [
    {
      step: '1. Campaign Structure (CBO / Advantage+ Sales)',
      detail: 'Do NOT start with Traffic or Brand Awareness campaigns. Set campaign objective directly to "Sales" (Conversions) or "Leads via WhatsApp". Meta AI optimizes for actual buyers.',
      recommendation: 'Start with 1 Campaign with Advantage Campaign Budget (CBO) at Rs. 2,000 to Rs. 3,500 PKR / day.'
    },
    {
      step: '2. Ad Set Audience Segmentation (Targeting Pakistan)',
      detail: 'Split into 2 Ad Sets: Ad Set A (Broad Gen Z age 18-24 in Lahore, Karachi, Islamabad) and Ad Set B (Young Men 25-42 in Top 5 cities: Khi, Lhe, Isb, Rawalpindi, Faisalabad).',
      recommendation: 'Keep interests broad or use Advantage+ Audience with fashion/shopping suggestions. Do not over-constrain the algorithm.'
    },
    {
      step: '3. Creative Placements (Asset Customization)',
      detail: 'Use 1:1 and 4:5 for Feed, and 9:16 for Stories & Reels. Always upload tailored aspect ratios so Meta serves full-bleed visuals without black borders.',
      recommendation: 'Test minimum 3 creative angles (Gen Z Streetwear, Premium Linen, and COD Trust Offer) simultaneously.'
    },
    {
      step: '4. WhatsApp COD Confirmation Protocol (Crucial for PK)',
      detail: 'In Pakistan, 25-35% of COD orders normally get returned (RTO) if unverified. Call or send an automated WhatsApp message to confirm the order before shipping via TCS / Leopards / Trax.',
      recommendation: 'Reduces courier return losses by over 60% and increases real profit margin.'
    }
  ],
  kpis: [
    { metric: 'Target Cost Per Purchase (CPP)', benchmark: 'Rs. 350 - Rs. 650 PKR' },
    { metric: 'Target Click-Through Rate (CTR Link)', benchmark: '1.8% - 3.2% (Meta Feed)' },
    { metric: 'Target Cost Per Click (CPC)', benchmark: 'Rs. 8 - Rs. 18 PKR' },
    { metric: 'Expected Return on Ad Spend (ROAS)', benchmark: '3.5x - 5.5x on Shirt Bundles' }
  ]
};
