# ✨ BeautyGlow — Clean Luxury Skincare & Cosmetics E-Commerce

**BeautyGlow** is a modern, high-converting e-commerce web application built with **React**, **Vite**, and **Tailwind CSS**. Designed with an editorial aesthetic (inspired by clean luxury brands like Glossier, Rare Beauty, and Aesop), it offers a shopping experience with bioactive botanical formulas, clinical science proof, interactive diagnostic quizzes, custom routine building, and an end-to-end checkout flow.

---

## 🌸 Key Highlights & Features

### 1. 💎 Visual Aesthetic & Editorial Design
- **Luxury Color Palette**: Soft blush rose, warm champagne, frosted glass, deep espresso typography, and gold accent highlights.
- **Editorial Typography**: High-fashion serif headlines (*Playfair Display*) paired with clean, readable modern sans-serif body (*Plus Jakarta Sans*).
- **Curated Imagery**: High-resolution cosmetic bottles, dropper textures, skin swatches, and radiant portraiture.
- **Smooth Micro-Interactions**: Hover image swaps, glassmorphism blur panels, badge pulses, and notification toasts.

### 2. 🛍️ Dynamic Product Catalog & Filtering
- **Multi-Category Navigation**: All Products, Clean Skincare, Radiant Makeup, and Ritual Sets.
- **Live Search Modal**: Instant autocomplete and keyword search across names, ingredients, categories, and skin benefits.
- **Advanced Filtering**: Filter by target concern (*Dry*, *Oily / Congested*, *Sensitive*, *Anti-Aging*, *Dull & Dehydrated*) and price range slider.
- **Flexible Sorting**: Sort by Featured, Customer Rating, Review Count, Price: Low to High, and Price: High to Low.
- **Shade Swatches**: Interactive clickable shade swatches for makeup items (e.g. Silk Glaze Lip Oil, Velvet Petal Cream Blush, Mineral Skin Tint).

### 3. 🔍 Product Quick-View Modal
- Full multi-angle product image gallery with thumbnail navigation.
- Real-time shade & size selection.
- Ingredient breakdown tab explaining active bioactive botanicals (e.g., Copper Peptides, Damask Rose Hydrosol, Ferulic Acid).
- Ritual instructions (*How to Apply*).
- Quantity controls, instant wishlist heart toggling, and add to bag.

### 4. 🧪 Interactive 60-Second Skin Diagnostic Quiz
- 3-step questionnaire assessing:
  1. Midday skin barrier feeling (*Dry, Oily, Combination, Sensitive*).
  2. Primary skincare goal (*Glass Skin Dew, Dark Spot Fading, Firming & Smoothing, Barrier Calming*).
  3. Sensory texture preference (*Luminous Glaze, Velvet Satin, Weightless Cloud, Rich Butter*).
- Delivers an instant personalized 3-step routine prescription (*Cleanse, Treat, Hydrate*).
- **1-Click "Add Entire Routine to Bag"** button with automatic 25% bundle savings.

### 5. 🌿 Custom 3-Step Routine Builder (Bundle & Save 20%)
- Step 1: Pure Cleansing.
- Step 2: Targeted Serum.
- Step 3: Seal & Protect.
- Interactive slot selection with real-time bundle price calculation and 20% discount.

### 6. 📊 Clinical Trials & Interactive Before/After Comparison
- Real clinical study metrics (98% noticed a surge in skin glow within 7 days).
- **Interactive horizontal comparison slider** allowing users to drag and inspect before vs. after results.
- Board-certified dermatologist medical endorsement.

### 7. 🛒 Slide-Over Cart Drawer & Promo Code Engine
- Free shipping progress bar ($65 threshold indicator).
- Line items with quantity increment/decrement and item removal.
- Promo coupon input with instant validation:
  - `GLOW20`: 20% Off entire order.
  - `WELCOME15`: 15% Off first order.
  - `ROUTINE25`: 25% Off routine bundle.
- Subtotal, discount savings, and free shipping calculation.

### 8. ❤️ Wishlist Drawer
- Slide-over favorites panel to save products for later replenishment.
- 1-click "Move to Bag" or "Add All to Bag".

### 9. 💳 Full Simulated Checkout Modal
- Contact Information and shipping address inputs.
- Payment method selection (Credit/Debit Card, encrypted 256-bit SSL).
- Real-time order summary.
- Order confirmation screen with unique order tracking reference and shipping timeframe.

### 10. 🌍 Global Multi-Currency Support
- Switch between **USD ($)**, **EUR (€)**, **GBP (£)**, and **INR (₹)** with automatic price conversion.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation & Run

1. Clone or navigate to the project directory:
   ```bash
   cd c:\Users\Lenovo\kirti
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   *Then open your browser to `http://localhost:3000` or the URL printed in the terminal.*

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

---

## 📁 Project Architecture

```
kirti/
├── index.html                   # HTML template with Google Fonts (Playfair Display & Plus Jakarta Sans)
├── package.json                 # Project dependencies and npm scripts
├── vite.config.js               # Vite configuration with React plugin
├── tailwind.config.js           # Custom luxury palette, glow shadows, and animations
├── postcss.config.js            # PostCSS configuration
├── src/
│   ├── main.jsx                 # Application entry point
│   ├── App.jsx                  # Root layout aggregating all sections & drawers
│   ├── index.css                # Tailwind directives, custom glassmorphism & gradients
│   ├── context/
│   │   └── ShopContext.jsx      # Global React Context (Cart, Wishlist, Currency, Modals, Promo Codes)
│   ├── data/
│   │   └── products.js          # Product catalog, categories, reviews, and UGC feed
│   └── components/
│       ├── AnnouncementBar.jsx  # Rotating top banner with discount codes
│       ├── Navbar.jsx           # Sticky glassmorphism header with search & currency switcher
│       ├── Hero.jsx             # Editorial hero with floating product card and press proof
│       ├── CategorySection.jsx  # Category cards (Skincare, Makeup, Bundles)
│       ├── ProductGrid.jsx      # Filterable & sortable product catalog
│       ├── ProductCard.jsx      # Card with image hover swap, shades, quick-view & wishlist
│       ├── ProductQuickViewModal.jsx # Detail modal with ingredients, shades & usage tabs
│       ├── RoutineBuilder.jsx   # Interactive 3-step bundle builder with 20% savings
│       ├── SkinQuizModal.jsx    # 3-step diagnostic questionnaire & bespoke prescription
│       ├── BeforeAfterSection.jsx # Clinical trials & interactive before/after image slider
│       ├── ValuesSection.jsx    # Clean, vegan, cruelty-free & sustainable commitments
│       ├── ReviewsSection.jsx   # 5-star customer testimonials with verified buyer badges
│       ├── InstagramFeed.jsx    # UGC community gallery (#BeautyGlowRoutine)
│       ├── CartDrawer.jsx       # Slide-over shopping bag with free shipping meter
│       ├── WishlistDrawer.jsx   # Slide-over saved favorites panel
│       ├── CheckoutModal.jsx    # Multi-step checkout with order confirmation celebration
│       ├── Footer.jsx           # VIP Club newsletter, FAQs accordion, and concierge links
│       └── Toast.jsx            # Floating action notification toasts
```

---

## 🎨 Color Palette Reference

| Name | Hex / Value | Usage |
|---|---|---|
| **Pearl Off-White** | `#FAF7F5` | Background canvas, soft warmth |
| **Espresso Charcoal** | `#1A1513` | High-contrast luxury headings, primary buttons |
| **Rose Petal** | `#F99479` - `#D57C87` | Accent glows, blush highlights, badges |
| **Warm Champagne** | `#BA946E` | Gold luxury accents, category labels |
| **Soft Sand** | `#F4EFE8` | Card backgrounds, pill tags, borders |

