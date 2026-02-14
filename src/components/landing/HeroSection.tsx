import { Container } from "./Container";
import heroBuilding from "@/assets/hero-building.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
   onScheduleVisit: () => void;
}

export function HeroSection({ onScheduleVisit }: HeroSectionProps) {
   return (
     <section id="hero" className="relative bg-mahindra-dark min-h-screen pt-20 overflow-hidden">
       <Container className="py-16 md:py-24">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Left content */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="text-center lg:text-left"
           >
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
               Mahindra <span className="text-primary">Blossom</span>
             </h1>
             <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
               Premium 2, 3 & 4 BHK Residences in Whitefield, Bangalore
             </p>
             
             <ul className="space-y-4 mb-8 text-left max-w-md mx-auto lg:mx-0">
               {[
                 "Abutting Hopefarm Channasandra Metro Station",
                 "9+ Acres of Lush Green Campus",
                 "World-class Amenities & Clubhouse",
                 "Vastu Compliant Homes",
               ].map((item, idx) => (
                 <motion.li 
                   key={idx} 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                   className="flex items-center gap-3 text-primary-foreground/90"
                 >
                   <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                   {item}
                 </motion.li>
               ))}
             </ul>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <motion.div
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <Button
                   size="lg"
                   className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                   onClick={onScheduleVisit}
                 >
                   Schedule a Visit
                 </Button>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5, delay: 0.8 }}
                 className="bg-primary/20 border border-primary rounded-lg px-6 py-3 text-center"
               >
                 <span className="text-primary-foreground/70 text-sm">Starting from</span>
                 <p className="text-primary font-bold text-xl">₹1.25 Cr*</p>
               </motion.div>
             </div>
           </motion.div>
           
           {/* Right image */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="relative"
           >
             <div className="relative rounded-3xl overflow-hidden shadow-2xl">
               <motion.img
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.6 }}
                 src={heroBuilding}
                 alt="Mahindra Blossom Building"
                 className="w-full h-auto object-cover aspect-[4/3]"
                 width={800}
                 height={600}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-mahindra-dark/50 to-transparent pointer-events-none" />
             </div>
             {/* Decorative circle */}
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1, duration: 0.5 }}
               whileHover={{ rotate: 5, scale: 1.1 }}
               className="absolute -bottom-6 -left-6 w-32 h-32 md:w-40 md:h-40 bg-primary rounded-full flex items-center justify-center shadow-xl z-10"
             >
               <div className="text-center text-primary-foreground">
                 <p className="text-3xl md:text-4xl font-bold">9+</p>
                 <p className="text-xs md:text-sm">Acres</p>
               </div>
             </motion.div>
           </motion.div>
         </div>
       </Container>
     </section>
   );
}