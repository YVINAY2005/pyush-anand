import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { FlowerBullet } from "./FlowerBullet";

const features = [
  "Premium 2, 3, 3.5 & 4 BHK spacious apartments designed for modern families",
  "9+ acres of meticulously landscaped gardens and open spaces",
  "Direct metro connectivity - abutting Hopefarm Channasandra Metro Station",
  "World-class clubhouse with gymnasium, swimming pool, and sports facilities",
  "Vastu-compliant homes with optimal ventilation and natural lighting",
  "24/7 security with CCTV surveillance and gated community access",
  "Dedicated children's play areas and senior citizen zones",
  "Proximity to top IT parks including ITPL, Google Office, and tech hubs",
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary">
       <Container>
         <SectionHeading
           title="Features & Highlights"
           highlightWord="Highlights"
           subtitle="Why choose Mahindra Blossom"
         />
         
         <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
           {features.map((feature, idx) => (
             <FlowerBullet key={idx} text={feature} className="bg-background p-4 rounded-xl" />
           ))}
         </div>
       </Container>
     </section>
   );
 }