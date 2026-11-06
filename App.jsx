import React from 'react';
import { ShopProvider } from './context/ShopContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { ProductGrid } from './components/ProductGrid';
import { RoutineBuilder } from './components/RoutineBuilder';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ValuesSection } from './components/ValuesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { SkinQuizModal } from './components/SkinQuizModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';

export function App() {
  return (
    <ShopProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF7F5] selection:bg-rose-200 selection:text-rose-950 font-sans">
        {/* Top Announcements */}
        <AnnouncementBar />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {/* Editorial Hero */}
          <Hero />

          {/* Curated Categories */}
          <CategorySection />

          {/* Product Catalog with Filtering & Sorting */}
          <ProductGrid />

          {/* Interactive 3-Step Routine Builder */}
          <RoutineBuilder />

          {/* Clinical Before & After Study */}
          <BeforeAfterSection />

          {/* Clean Beauty Values & Guarantees */}
          <ValuesSection />

          {/* Customer Reviews & Testimonials */}
          <ReviewsSection />

          {/* Community Instagram UGC */}
          <InstagramFeed />
        </main>

        {/* Brand Footer */}
        <Footer />

        {/* Global Drawers & Modals */}
        <ProductQuickViewModal />
        <SkinQuizModal />
        <CartDrawer />
        <WishlistDrawer />
        <CheckoutModal />
        <Toast />
      </div>
    </ShopProvider>
  );
}

export default App;

