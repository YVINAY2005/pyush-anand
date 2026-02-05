 import { Container } from "./Container";
 import { Play } from "lucide-react";
 import heroBuilding from "@/assets/hero-building.jpg";
 
 export function VirtualTourSection() {
   return (
     <section className="py-16 md:py-24 bg-primary">
       <Container>
         <div className="relative max-w-4xl mx-auto">
           <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
             <img
               src={heroBuilding}
               alt="Virtual Tour Preview"
               className="w-full h-auto aspect-video object-cover"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-mahindra-dark/40 group-hover:bg-mahindra-dark/50 transition-colors" />
             
             {/* Play button */}
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-20 h-20 md:w-24 md:h-24 bg-primary-foreground/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                 <Play className="w-8 h-8 md:w-10 md:h-10 text-mahindra-dark ml-1" fill="currentColor" />
               </div>
             </div>
             
             {/* Title overlay */}
             <div className="absolute bottom-8 left-8 right-8">
               <h3 className="text-2xl md:text-4xl font-serif font-bold text-primary-foreground italic">
                 Take The Virtual Tour
               </h3>
             </div>
             
             {/* Disclaimer */}
             <div className="absolute top-4 right-4">
               <span className="text-primary-foreground/60 text-xs italic">
                 *Artistic impression for representation purpose only
               </span>
             </div>
           </div>
         </div>
       </Container>
     </section>
   );
 }