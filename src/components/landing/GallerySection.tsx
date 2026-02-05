 import { Container } from "./Container";
 import { SectionHeading } from "./SectionHeading";
 import gallery1 from "@/assets/gallery-1.jpg";
 import gallery2 from "@/assets/gallery-2.jpg";
 import gallery3 from "@/assets/gallery-3.jpg";
 import gallery4 from "@/assets/gallery-4.jpg";
 import amenityPool from "@/assets/amenity-pool.jpg";
 import amenityGym from "@/assets/amenity-gym.jpg";
 
 const galleryImages = [
   { src: gallery1, alt: "Garden Area", className: "col-span-2 row-span-2" },
   { src: gallery2, alt: "Bedroom" },
   { src: gallery3, alt: "Kitchen" },
   { src: gallery4, alt: "Tennis Court" },
   { src: amenityPool, alt: "Swimming Pool" },
   { src: amenityGym, alt: "Fitness Center" },
 ];
 
 export function GallerySection() {
   return (
     <section className="py-16 md:py-24 bg-background">
       <Container>
         <SectionHeading
           title="A Glimpse of Life at Mahindra Blossom"
           highlightWord="Glimpse"
           subtitle="View images of homes, amenities, and the surrounding environment"
         />
         
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
           {galleryImages.map((image, idx) => (
             <div
               key={idx}
               className={`rounded-2xl overflow-hidden ${image.className || ""}`}
             >
               <img
                 src={image.src}
                 alt={image.alt}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                 loading="lazy"
               />
             </div>
           ))}
         </div>
       </Container>
     </section>
   );
 }