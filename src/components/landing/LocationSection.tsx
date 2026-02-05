import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { FlowerBullet } from "./FlowerBullet";
import locationMap from "@/assets/location-map.jpg";

const locationHighlights = [
  "Abutting Hopefarm Channasandra Metro Station",
  "Key terminals within 1.3km radius – Whitefield railway station and Hopefarm bus stop",
  "Major IT parks within 2.5km radius – ITPL, new Google office",
  "Social infrastructure within 3km – schools, colleges, hospitals, etc.",
  "Kempegowda International Airport – 35 mins drive",
];

export function LocationSection() {
  return (
    <section id="location" className="py-16 md:py-24 bg-secondary">
       <Container>
         <SectionHeading
           title="A Perfect Location"
           highlightWord="Location"
           subtitle="Everything you need, just minutes away"
         />
         
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Map */}
           <div className="rounded-3xl overflow-hidden shadow-xl">
             <img
               src={locationMap}
               alt="Mahindra Blossom Location Map"
               className="w-full h-auto object-cover"
               loading="lazy"
             />
           </div>
           
           {/* Location highlights */}
           <div className="space-y-4">
             {locationHighlights.map((highlight, idx) => (
               <FlowerBullet
                 key={idx}
                 text={highlight}
                 className="bg-background p-4 rounded-xl"
               />
             ))}
           </div>
         </div>
       </Container>
     </section>
   );
 }