import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { AmenitiesSection } from "@/components/landing/AmenitiesSection";
import { FloorPlansSection } from "@/components/landing/FloorPlansSection";
import { GallerySection } from "@/components/landing/GallerySection";
import { LocationSection } from "@/components/landing/LocationSection";
import { VirtualTourSection } from "@/components/landing/VirtualTourSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <PricingSection />
        <AmenitiesSection />
        <FloorPlansSection />
        <GallerySection />
        <LocationSection />
        <VirtualTourSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
