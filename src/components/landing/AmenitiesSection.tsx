import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import amenityPool from "@/assets/amenity-pool.jpg";
import amenityGym from "@/assets/amenity-gym.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const amenities = [
  { image: amenityPool, title: "Swimming Pool" },
  { image: amenityGym, title: "Modern Gymnasium" },
  { image: gallery1, title: "Landscaped Gardens" },
  { image: gallery4, title: "Sports Facilities" },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-background">
       <Container>
         <SectionHeading
           title="World-Class Amenities"
           highlightWord="Amenities"
           subtitle="Everything you need for a luxurious lifestyle"
         />
         
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
           {amenities.map((amenity, idx) => (
             <div
               key={idx}
               className="relative group rounded-2xl overflow-hidden aspect-square"
             >
               <img
                 src={amenity.image}
                 alt={amenity.title}
                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-mahindra-dark/80 to-transparent" />
               <div className="absolute bottom-4 left-4 right-4">
                 <p className="text-primary-foreground font-semibold text-lg">
                   {amenity.title}
                 </p>
               </div>
             </div>
           ))}
         </div>
       </Container>
     </section>
   );
 }