import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import amenityPool from "@/assets/amenity-pool.jpg";
import amenityGym from "@/assets/amenity-gym.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { motion } from "framer-motion";

const amenities = [
  { image: amenityPool, title: "Swimming Pool" },
  { image: amenityGym, title: "Modern Gymnasium" },
  { image: gallery1, title: "Landscaped Gardens" },
  { image: gallery4, title: "Sports Facilities" },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-background overflow-hidden">
       <Container>
         <SectionHeading
           title="World-Class Amenities"
           highlightWord="Amenities"
           subtitle="Everything you need for a luxurious lifestyle"
         />
         
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
           {amenities.map((amenity, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="relative group rounded-2xl overflow-hidden aspect-square cursor-pointer"
             >
               <motion.img
                 whileHover={{ scale: 1.15 }}
                 transition={{ duration: 0.6 }}
                 src={amenity.image}
                 alt={amenity.title}
                 className="w-full h-full object-cover"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-mahindra-dark/80 via-mahindra-dark/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
               <motion.div 
                 className="absolute bottom-4 left-4 right-4"
                 initial={{ y: 10, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 + idx * 0.1 }}
               >
                 <p className="text-primary-foreground font-semibold text-lg lg:text-xl transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                   {amenity.title}
                 </p>
               </motion.div>
             </motion.div>
           ))}
         </div>
       </Container>
     </section>
   );
 }