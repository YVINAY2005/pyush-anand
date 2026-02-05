import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const floorPlans = [
  { type: "2 BHK (Large)", image: gallery2 },
  { type: "3 BHK", image: gallery3 },
  { type: "3.5 BHK", image: gallery2 },
  { type: "4 BHK", image: gallery3 },
];

interface FloorPlansSectionProps {
  onViewPlan: (planType: string) => void;
}

export function FloorPlansSection({ onViewPlan }: FloorPlansSectionProps) {
  return (
    <section id="floor-plans" className="py-16 md:py-24 bg-primary">
       <Container>
         <SectionHeading
           title="Floor Plans"
           subtitle="Choose your perfect layout"
           light
           showDivider={false}
         />
         
         <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
           {floorPlans.map((plan, idx) => (
             <div
               key={idx}
               className="bg-primary-foreground rounded-3xl overflow-hidden shadow-lg"
             >
               {/* Badge */}
               <div className="relative">
                 <div className="absolute top-4 left-4 z-10">
                   <span className="bg-primary-foreground px-4 py-2 rounded-full text-foreground font-semibold shadow-md">
                     {plan.type}
                   </span>
                 </div>
                 <img
                   src={plan.image}
                   alt={`${plan.type} Floor Plan`}
                   className="w-full h-64 object-cover"
                   loading="lazy"
                 />
               </div>
               <div className="p-6">
                 <Button
                   variant="outline"
                   className="w-full border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground rounded-full"
                  onClick={() => onViewPlan(plan.type)}
                 >
                   View Plan
                 </Button>
               </div>
             </div>
           ))}
         </div>
       </Container>
     </section>
   );
 }