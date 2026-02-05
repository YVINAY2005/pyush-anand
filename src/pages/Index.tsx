import { useState } from "react";
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
import { ContactFormModal } from "@/components/landing/ContactFormModal";
import { FloorPlanModal } from "@/components/landing/FloorPlanModal";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

const Index = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [floorPlanModalOpen, setFloorPlanModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("3 BHK");

  const handleViewPlan = (planType: string) => {
    setSelectedPlan(planType);
    setFloorPlanModalOpen(true);
  };

  const handleScheduleVisit = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header onContactClick={handleScheduleVisit} />
      <main>
        <HeroSection onScheduleVisit={handleScheduleVisit} />
        <AboutSection />
        <FeaturesSection />
        <PricingSection onViewPlan={handleViewPlan} />
        <AmenitiesSection />
        <FloorPlansSection onViewPlan={handleViewPlan} />
        <GallerySection />
        <LocationSection />
        <VirtualTourSection />
      </main>
      <Footer />

      {/* Modals */}
      <ContactFormModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
      <FloorPlanModal
        open={floorPlanModalOpen}
        onOpenChange={setFloorPlanModalOpen}
        planType={selectedPlan}
        onScheduleVisit={handleScheduleVisit}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
