import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { PartnerMarquee } from '@/components/PartnerMarquee';
import { CultureSection } from '@/components/CultureSection';
import { AboutSection } from '@/components/AboutSection';
import { TradeProcessSection } from '@/components/TradeProcessSection';
import { CommoditiesCatalog } from '@/components/CommoditiesCatalog';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-wrapper">
        <HeroSection />
        <PartnerMarquee />
        <CultureSection />
        <AboutSection />
        <TradeProcessSection />
        <CommoditiesCatalog />
        <TestimonialSlider />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
