import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";

const pricingData = [
   { type: "2 BHK", size: "1,200 - 1,350 Sq.Ft.", price: "₹1.25 Cr*" },
   { type: "3 BHK", size: "1,550 - 1,750 Sq.Ft.", price: "₹1.65 Cr*" },
   { type: "4 BHK", size: "2,100 - 2,400 Sq.Ft.", price: "₹2.25 Cr*" },
];

interface PricingSectionProps {
   onViewPlan: (planType: string) => void;
}

export function PricingSection({ onViewPlan }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-primary">
       <Container>
         <SectionHeading
           title="Pricing"
           subtitle="Transparent pricing for your dream home"
           light
           showDivider={false}
         />
         
         <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
           {pricingData.map((item, idx) => (
             <div
               key={idx}
               className="bg-primary-foreground rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
             >
               <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                 {item.type}
               </h3>
               <p className="text-muted-foreground mb-4">{item.size}</p>
               <p className="text-3xl font-bold text-primary mb-6">{item.price}</p>
               <Button
                 variant="outline"
                 className="w-full border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground rounded-full"
                onClick={() => onViewPlan(item.type)}
               >
                 View Plan
               </Button>
             </div>
           ))}
         </div>
       </Container>
     </section>
   );
 }