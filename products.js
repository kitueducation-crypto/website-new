export const PRODUCTS = [
  {
    id: 'dew-peptide-serum',
    name: 'Luminous Dew Peptide Serum',
    tagline: 'Multi-molecular hyaluronic acid with bioactive peptides for glass-skin hydration',
    price: 48,
    originalPrice: 60,
    rating: 4.9,
    reviewCount: 342,
    badge: 'Bestseller',
    category: 'Skincare',
    subCategory: 'Serums',
    skinType: 'All Skin Types (Ideal for Dull & Dehydrated)',
    benefits: ['Deep Hydration', 'Glass Skin Glow', 'Plumping', 'Barrier Repair'],
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608248597359-25095368a44b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Our crown jewel. Formulated with 5 molecular weights of Hyaluronic Acid, Copper Peptides, and Botanical Squalane, this featherlight elixir sinks instantly into the skin to deliver intense, 72-hour moisture and a celestial dewy finish without greasiness.',
    ingredients: [
      { name: 'Copper Tripeptide-1', benefit: 'Boosts natural collagen and restores skin firmness.' },
      { name: 'Multi-Weight Hyaluronic Acid', benefit: 'Penetrates multiple layers of epidermis for 3D hydration.' },
      { name: 'Botanical Olive Squalane', benefit: 'Locks in moisture and repairs the lipid moisture barrier.' },
      { name: 'Fermented Centella Asiatica', benefit: 'Soothes redness and calms reactive skin.' }
    ],
    sizes: ['30ml / 1.0 fl oz', '50ml / 1.7 fl oz (Value Size)'],
    shades: [],
    howToUse: 'Dispense 3-4 drops onto cleansed skin morning and evening. Gently press into face, neck, and décolletage before applying your moisturizer.',
    inStock: true,
    routineStep: 'Treat'
  },
  {
    id: 'rose-velvet-cloud-cream',
    name: 'Rose Velvet Cloud Moisturizer',
    tagline: 'Whipped ceramide barrier cream infused with organic Damask Rose water',
    price: 54,
    originalPrice: 68,
    rating: 4.8,
    reviewCount: 289,
    badge: 'Award Winner',
    category: 'Skincare',
    subCategory: 'Moisturizers',
    skinType: 'Dry to Normal & Sensitive',
    benefits: ['Intense Nourishment', 'Barrier Fortifying', 'Velvety Finish', 'Calming'],
    images: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A luxurious cloud-like cream that melts seamlessly into skin. Infused with organic Bulgarian Rose Otto, 3 bio-identical ceramides, and fermented oat extract to cocoon tired skin in protective moisture.',
    ingredients: [
      { name: 'Ceramides NP, AP, EOP', benefit: 'Rebuilds compromised skin barriers against environmental stressors.' },
      { name: 'Damask Rose Water', benefit: 'Rich in antioxidants, naturally balances skin pH and tightens pores.' },
      { name: 'Cold-Pressed Shea Nilotica', benefit: 'Ultra-nourishing fatty acids without pore clogging.' }
    ],
    sizes: ['50ml / 1.7 fl oz', '100ml / 3.4 fl oz'],
    shades: [],
    howToUse: 'Warm a pea-sized amount between fingertips and smooth over face and neck as the final step of your skincare ritual.',
    inStock: true,
    routineStep: 'Hydrate'
  },
  {
    id: 'silk-glaze-peptide-lip-oil',
    name: 'Silk Glaze Peptide Lip Oil',
    tagline: 'Ultra-cushiony peptide-infused gloss oil that plumps and hydrates',
    price: 24,
    originalPrice: 28,
    rating: 4.9,
    reviewCount: 512,
    badge: 'TikTok Viral',
    category: 'Makeup',
    subCategory: 'Lips',
    skinType: 'All Lip Types',
    benefits: ['Instant Mirror Shine', 'Visible Plumping', 'Non-Sticky Comfort', '12hr Moisture'],
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1599732497645-168a2fa42191?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'The viral gloss oil everyone is talking about. Combines the high-octane mirror shine of a luxury lip gloss with the deeply restorative conditioning of a rich lip mask. Never sticky, always juicy.',
    ingredients: [
      { name: 'Palmitoyl Tripeptide-38', benefit: 'Stimulates hyaluronic acid synthesis for fuller-looking lips.' },
      { name: 'Organic Jojoba & Camellia Seed Oil', benefit: 'Deeply nourishes and locks in tender moisture.' },
      { name: 'Vitamin E & Sweet Almond', benefit: 'Protects against chapping and oxidative stress.' }
    ],
    sizes: ['10ml / 0.33 fl oz'],
    shades: [
      { name: 'Rose Petal', hex: '#D87080', preview: 'Soft baby pink with subtle pearl shimmer' },
      { name: 'Honey Nude', hex: '#C28562', preview: 'Warm caramel beige that complements all undertones' },
      { name: 'Berry Glaze', hex: '#873247', preview: 'Deep juicy blackberry with sheer crystalline gloss' },
      { name: 'Clear Glacé', hex: '#FFF5EA', preview: 'Pure crystalline gloss for a wet-look glass finish' }
    ],
    howToUse: 'Glide applicator over bare lips for an effortless natural flush, or layer over your favorite lip liner for maximum dimensional shine.',
    inStock: true
  },
  {
    id: 'radiance-c-glow-drops',
    name: 'Radiance C+ Glow Elixir',
    tagline: '15% stabilized Vitamin C with Ferulic Acid and Kakadu Plum extract',
    price: 58,
    originalPrice: 72,
    rating: 4.9,
    reviewCount: 198,
    badge: 'Clinical Favorite',
    category: 'Skincare',
    subCategory: 'Serums',
    skinType: 'All Skin Types (Except hyper-reactive)',
    benefits: ['Dark Spot Fading', 'Even Skin Tone', 'Antioxidant Shield', 'Luminous Glow'],
    images: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608248597359-25095368a44b?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A clinical-strength daytime brightening cocktail. Uses oil-soluble THD Ascorbate and Kakadu Plum—Earth’s richest source of Vitamin C—to visibly diminish dark spots, hyperpigmentation, and sun damage in as little as 14 days.',
    ingredients: [
      { name: '15% THD Ascorbate & Ethyl Ascorbic', benefit: '50x more effective penetration than traditional L-Ascorbic acid without irritation.' },
      { name: 'Ferulic Acid & Vitamin E', benefit: 'Synergistically doubles the photoprotection against free radicals.' },
      { name: 'Australian Kakadu Plum', benefit: 'Naturally rich in bioflavonoids for superior luminosity.' }
    ],
    sizes: ['30ml / 1.0 fl oz'],
    shades: [],
    howToUse: 'Apply 4-5 drops in the morning onto clean skin before applying SPF. Follow with your favorite BeautyGlow moisturizer.',
    inStock: true,
    routineStep: 'Treat'
  },
  {
    id: 'velvet-petal-cream-blush',
    name: 'Velvet Petal Melting Cream Blush',
    tagline: 'Effortless cream-to-powder tint infused with Camellia Oil and Rosehip',
    price: 32,
    originalPrice: 38,
    rating: 4.8,
    reviewCount: 420,
    badge: 'Bestseller',
    category: 'Makeup',
    subCategory: 'Cheeks',
    skinType: 'All Skin Types',
    benefits: ['Seamless Blend', 'Second-Skin Glow', 'Buildable Tint', 'Hydrating Matte'],
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'The easiest blush you will ever apply. Melts effortlessly upon fingertip contact to create a diffused, lit-from-within flush of watercolor pigment that lasts all day without settling into fine lines.',
    ingredients: [
      { name: 'Japanese Camellia Tsubaki Oil', benefit: 'Softens skin texture and locks in antioxidant hydration.' },
      { name: 'Cold-Pressed Rosehip Fruit Oil', benefit: 'High in vitamins A & C for healthy skin revitalization.' },
      { name: 'Ultra-Fine Spherical Silica', benefit: 'Provides that soft-focus blur filter in real life.' }
    ],
    sizes: ['5g / 0.17 oz'],
    shades: [
      { name: 'Peony Dream', hex: '#E78895', preview: 'Soft petal pink for a sweet romantic blush' },
      { name: 'Sunlit Peach', hex: '#E99B7D', preview: 'Golden apricot with subtle warm undertones' },
      { name: 'Mauve Velvet', hex: '#A35D6E', preview: 'Sophisticated dusky plum mauve' },
      { name: 'Terracotta Glow', hex: '#BA5D45', preview: 'Sun-drenched burnt terracotta for warm golden hour radiance' }
    ],
    howToUse: 'Dab onto apples of cheeks and blend upwards toward the hairline using fingertips, sponge, or dense brush. Can also be tapped onto lips and eyelids!',
    inStock: true
  },
  {
    id: 'botanical-melt-cleansing-balm',
    name: 'Botanical Melt Cleansing Balm',
    tagline: 'Velvety sherbet balm that effortlessly dissolves waterproof makeup and SPF',
    price: 38,
    originalPrice: 46,
    rating: 4.9,
    reviewCount: 265,
    badge: 'Clean Classic',
    category: 'Skincare',
    subCategory: 'Cleansers',
    skinType: 'All Skin Types',
    benefits: ['Zero Residue', 'Deep Pore Cleansing', 'Nourishing', 'Eye-Safe'],
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Transform your daily evening routine into an opulent spa escape. This lush balm transforms on contact from a soft solid to a silky oil, then rinses away cleanly as a milky emulsion with zero greasy film.',
    ingredients: [
      { name: 'Moroccan Blue Tansy', benefit: 'Calms redness, reduces inflammation, and lends a natural azure tint.' },
      { name: 'African Marula Oil', benefit: 'Dissolves stubborn sebum and environmental grime while feeding the skin with omega acids.' },
      { name: 'Papaya Enzyme (Papain)', benefit: 'Gently loosens dull dead skin cells during cleansing.' }
    ],
    sizes: ['100ml / 3.4 fl oz (Includes Rose Gold Spatula)'],
    shades: [],
    howToUse: 'Scoop a dime-sized amount onto dry skin. Massage over face and eyes in circular motions to melt makeup. Splash with warm water to emulsify, then rinse cleanly.',
    inStock: true,
    routineStep: 'Cleanse'
  },
  {
    id: 'golden-hour-sun-veil-spf50',
    name: 'Golden Hour Sun Veil SPF 50+',
    tagline: 'Invisible weightless serum sunscreen with broad spectrum UVA/UVB shield',
    price: 36,
    originalPrice: 42,
    rating: 4.8,
    reviewCount: 380,
    badge: 'Must-Have',
    category: 'Skincare',
    subCategory: 'Sunscreen',
    skinType: 'All Skin Types & Tones (100% No White Cast)',
    benefits: ['SPF 50+ PA++++', 'Zero White Cast', 'Makeup Primer Grip', 'Blue Light Shield'],
    images: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'The sunscreen you will actually look forward to wearing every single day. Glides on like a featherlight serum, absorbs in 5 seconds flat, leaves skin dewy yet never greasy, and doubles as an all-day makeup primer.',
    ingredients: [
      { name: 'Next-Gen Chemical UV Filters', benefit: 'Advanced photostable filters that deliver zero white cast on all Fitzpatricks.' },
      { name: 'Niacinamide (Vitamin B3)', benefit: 'Controls excess shine, minimizes pore appearance, and evens skin tone.' },
      { name: 'Fermented Rice Water (Galactomyces)', benefit: 'Ancient Japanese beauty secret for crystal clear skin glow.' }
    ],
    sizes: ['50ml / 1.7 fl oz'],
    shades: [],
    howToUse: 'Apply generously as the final step of your AM skincare routine, 15 minutes before sun exposure. Reapply every 2 hours if outdoors.',
    inStock: true,
    routineStep: 'Hydrate'
  },
  {
    id: 'moonlight-renewal-retinol-elixir',
    name: 'Moonlight Renewal Retinol Night Elixir',
    tagline: 'Encapsulated 0.3% Retinol with Bakuchiol and soothing Blue Lotus',
    price: 66,
    originalPrice: 82,
    rating: 4.9,
    reviewCount: 175,
    badge: 'Youth Restoring',
    category: 'Skincare',
    subCategory: 'Serums',
    skinType: 'Mature, Normal, Combination',
    benefits: ['Smooths Fine Lines', 'Cellular Turnover', 'Refines Texture', 'Zero Flaking Formula'],
    images: [
      'https://images.unsplash.com/photo-1608248597359-25095368a44b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Transform your skin while you dream. Time-released encapsulated retinol works deep within dermal layers to smooth fine lines and refine coarse texture, buffered by calming Bakuchiol and Blue Lotus so you wake up to glow, not flaking.',
    ingredients: [
      { name: 'Encapsulated Pure Retinol (0.3%)', benefit: 'Gradually releases overnight to stimulate cell renewal without stinging.' },
      { name: 'Botanical Bakuchiol (1.0%)', benefit: 'Nature’s plant retinol alternative that reinforces firming power.' },
      { name: 'Egyptian Blue Lotus Extract', benefit: 'Rich in bio-flavonoids to comfort and soothe sensitive skin.' }
    ],
    sizes: ['30ml / 1.0 fl oz'],
    shades: [],
    howToUse: 'Apply 2-3 drops to dry skin in the evening 2-3 nights per week, gradually increasing frequency as tolerated. Always wear SPF the following morning.',
    inStock: true,
    routineStep: 'Treat'
  },
  {
    id: 'bare-glow-mineral-skin-tint',
    name: 'Bare Glow Serum Skin Tint SPF 25',
    tagline: 'Weightless skin-perfecting veil that evens tone while feeding skin nutrients',
    price: 42,
    originalPrice: 50,
    rating: 4.8,
    reviewCount: 310,
    badge: 'New Launch',
    category: 'Makeup',
    subCategory: 'Face',
    skinType: 'All Skin Types',
    benefits: ['Sheer Buildable Coverage', 'Fresh Luminous Finish', 'All-Day Breathability', 'Non-Comedogenic'],
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Your skin, elevated. This breathable hybrid tint blurs redness and imperfections while infusing the complexion with botanical hydration. It lets your natural freckles and skin texture shine through with an ethereal glow.',
    ingredients: [
      { name: 'Zinc Oxide Mineral SPF 25', benefit: 'Clean physical protection against photoaging.' },
      { name: 'Polyglutamic Acid', benefit: 'Holds 4x more moisture than hyaluronic acid for bouncy skin.' },
      { name: 'Cold-Pressed Meadowfoam Seed Oil', benefit: 'Mimics skin’s natural sebum to balance dry and oily zones.' }
    ],
    sizes: ['30ml / 1.0 fl oz'],
    shades: [
      { name: 'Fair 01 - Warm Alabaster', hex: '#F6E4D6', preview: 'For fair complexions with neutral-warm undertones' },
      { name: 'Light 02 - Golden Sand', hex: '#ECCDB6', preview: 'For light skin with subtle golden warmth' },
      { name: 'Medium 03 - Warm Honey', hex: '#D7AE8B', preview: 'For medium complexions with golden or olive undertones' },
      { name: 'Tan 04 - Amber Glow', hex: '#B88258', preview: 'For tan complexions with rich warm undertones' },
      { name: 'Deep 05 - Rich Espresso', hex: '#633B23', preview: 'For rich deep complexions with warm undertones' }
    ],
    howToUse: 'Shake well before use. Smooth 2-3 drops with fingertips or a damp sponge from the center of the face outwards.',
    inStock: true
  },
  {
    id: 'glow-supreme-3step-kit',
    name: 'The Ultimate Glow 3-Step Ritual Set',
    tagline: 'Cleanse, Treat, and Hydrate — our holy trinity for luminous glass skin',
    price: 98,
    originalPrice: 140,
    rating: 5.0,
    reviewCount: 467,
    badge: 'Save 30%',
    category: 'Sets',
    subCategory: 'Bundles',
    skinType: 'All Skin Types',
    benefits: ['Full Complete Regimen', 'Save $42 vs Individual', 'Free Vegan Leather Bag', 'Travel-Ready'],
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Everything you need for radiant, healthy skin in three simple steps. Includes full sizes of Botanical Melt Cleansing Balm (100ml), Luminous Dew Peptide Serum (30ml), and Rose Velvet Cloud Moisturizer (50ml) nestled in an embossed blush vegan leather toiletry case.',
    ingredients: [
      { name: 'Complete 3-Step Synergy', benefit: 'Clinically calibrated to restore moisture balance and luminosity in 7 days.' }
    ],
    sizes: ['Full-Size 3-Piece Kit + Luxury Cosmetic Bag'],
    shades: [],
    howToUse: 'Step 1: Melt away impurities with Balm. Step 2: Infuse hydration with Dew Serum. Step 3: Seal and nourish with Cloud Cream.',
    inStock: true
  },
  {
    id: 'cashmere-silk-setting-mist',
    name: 'Cashmere Silk Dew Setting Mist',
    tagline: 'Micro-fine hydration mist infused with White Tea and Niacinamide',
    price: 28,
    originalPrice: 34,
    rating: 4.8,
    reviewCount: 215,
    badge: 'Staff Pick',
    category: 'Makeup',
    subCategory: 'Face',
    skinType: 'All Skin Types',
    benefits: ['16hr Makeup Extension', 'Anti-Pollution', 'Ultra-Fine Cloud Spray', 'Instant Refresh'],
    images: [
      'https://images.unsplash.com/photo-1608248597359-25095368a44b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'An ethereal cloud mist that sets makeup with a natural luminous finish while shielding skin against modern environmental pollution and screen blue light.',
    ingredients: [
      { name: 'Organic Silver Needle White Tea', benefit: 'Super potent antioxidant protection.' },
      { name: 'Niacinamide 2%', benefit: 'Tightens pore appearance and controls excess midday shine.' },
      { name: 'Hyaluronic Micro-Droplets', benefit: 'Instantly revives tired, cakey makeup with fresh moisture.' }
    ],
    sizes: ['100ml / 3.4 fl oz'],
    shades: [],
    howToUse: 'Shake well. Hold 8-10 inches from face and mist evenly in an X and T motion. Spritz throughout the day for an instant refreshing glow.',
    inStock: true
  },
  {
    id: 'matcha-rose-clay-mask',
    name: 'French Rose & Matcha Purifying Mask',
    tagline: 'Detoxifying pink clay whipped with Japanese Ceremonial Matcha',
    price: 34,
    originalPrice: 40,
    rating: 4.7,
    reviewCount: 182,
    badge: 'Spa Ritual',
    category: 'Skincare',
    subCategory: 'Masks',
    skinType: 'Congested, Combination & Oily',
    benefits: ['Decongests Pores', 'Balances Excess Oil', 'Gentle Non-Drying', 'Brightens Complexion'],
    images: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Unlike harsh clay masks that leave skin cracked and stripped, our whipped French Rose formula gently draws out impurities and sebum while replenishing skin with botanical antioxidants.',
    ingredients: [
      { name: 'French Pink Argile Clay', benefit: 'Draws out micro-pollutants and tightens dilated pores.' },
      { name: 'Uji Ceremonial Matcha Green Tea', benefit: 'Superoxide dismutase enzymes soothe active inflammation.' },
      { name: 'Organic Aloe Barbadensis Leaf Juice', benefit: 'Maintains skin softness and moisture balance.' }
    ],
    sizes: ['75ml / 2.5 fl oz'],
    shades: [],
    howToUse: 'Apply an even layer to clean, damp skin avoiding eyes. Relax for 10-15 minutes until almost dry. Rinse thoroughly with warm water using gentle circular buffing motions.',
    inStock: true
  }
];

export const CATEGORIES = [
  {
    id: 'All',
    name: 'All Products',
    count: 12,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    description: 'Explore our complete clean luxury collection.'
  },
  {
    id: 'Skincare',
    name: 'Clean Skincare',
    count: 7,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    description: 'Botanical science serums, barrier creams, and restorative oils.'
  },
  {
    id: 'Makeup',
    name: 'Radiant Makeup',
    count: 4,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
    description: 'Effortless skin tints, peptide glosses, and melting blushes.'
  },
  {
    id: 'Sets',
    name: 'Rituals & Sets',
    count: 1,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    description: 'Curated beauty bundles with complimentary luxury gifting.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sophie V. Laurent',
    role: 'Verified Buyer',
    location: 'Paris, France',
    rating: 5,
    title: 'The Dew Peptide Serum changed my skin completely!',
    review: 'I have struggled with dehydrated, dull skin under makeup for years. Within 5 days of using the Dew Peptide Serum and Cloud Cream, my coworkers literally asked if I had a professional facial. It gives that real, juicy glass-skin glow without feeling heavy.',
    productName: 'Luminous Dew Peptide Serum',
    skinProfile: 'Normal to Dry, Age 31',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Aaliyah Chen',
    role: 'Verified Buyer',
    location: 'San Francisco, CA',
    rating: 5,
    title: 'Holy grail lip oil — nothing compares.',
    review: 'The Silk Glaze in Honey Nude is my signature shade now. It hydrates for hours and plumps without any painful tingling. I have one in my purse, my bedside table, and my office desk.',
    productName: 'Silk Glaze Peptide Lip Oil',
    skinProfile: 'Combination, Age 26',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Verified Buyer',
    location: 'New York, NY',
    rating: 5,
    title: 'Sunscreen that behaves like high-end luxury skincare.',
    review: 'No white cast, no pilling under my foundation, and leaves the prettiest satin glow. Golden Hour Sun Veil is officially the only SPF I will ever buy.',
    productName: 'Golden Hour Sun Veil SPF 50+',
    skinProfile: 'Sensitive & Dry, Age 34',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    handle: '@chloe.glow',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80',
    caption: 'My morning ritual with @BeautyGlow Dew Drops & Silk Glaze ✨ #BeautyGlowRoutine',
    likes: '2.4k',
    product: 'Dew Peptide Serum'
  },
  {
    id: 2,
    handle: '@maya_radiance',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
    caption: 'Velvet Petal blush melted in with fingertips. No filter needed 🌸',
    likes: '4.1k',
    product: 'Velvet Petal Blush'
  },
  {
    id: 3,
    handle: '@skinbyelise',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    caption: 'Unboxing the 3-step ritual set. The glass packaging is pure art 🤍',
    likes: '1.8k',
    product: 'Ultimate Glow Set'
  },
  {
    id: 4,
    handle: '@dr_camilla_derm',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    caption: 'Ceramides + Rose water = skin barrier bliss. My top recommendation this season.',
    likes: '5.9k',
    product: 'Rose Velvet Cream'
  }
];

