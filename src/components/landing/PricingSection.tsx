import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    <section id="pricing" className="py-16 md:py-24 bg-primary overflow-hidden">
       <Container>
         <SectionHeading
           title="Pricing"
           subtitle="Transparent pricing for your dream home"
           light
           showDivider={false}
         />
         
         <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
           {pricingData.map((item, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               whileHover={{ 
                 y: -10,
                 boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
               }}
               className="bg-primary-foreground rounded-3xl p-8 text-center shadow-lg transition-all duration-300"
             >
               <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                 {item.type}
               </h3>
               <p className="text-muted-foreground mb-4">{item.size}</p>
               <p className="text-3xl font-bold text-primary mb-6">{item.price}</p>
               <Button
                 variant="outline"
                 className="w-full border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground rounded-full transition-colors duration-300"
                onClick={() => onViewPlan(item.type)}
               >
                 View Plan
               </Button>
             </motion.div>
           ))}
         </div>
       </Container>
     </section>
   );
 }