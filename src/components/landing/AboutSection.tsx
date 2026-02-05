import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import aboutImage from "@/assets/about-image.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
       <Container>
         <SectionHeading
           title="About Mahindra Blossom"
           highlightWord="Blossom"
         />
         
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
             <p className="text-foreground leading-relaxed text-lg">
               Mahindra Blossom is an exquisite residential project located in the heart of Whitefield, 
               Bangalore. Spread across 9+ acres of lush greenery, this premium development offers 
               thoughtfully designed 2, 3, and 4 BHK apartments that redefine luxury living.
             </p>
             <p className="text-muted-foreground leading-relaxed">
               With its strategic location abutting the Hopefarm Channasandra Metro Station, 
               Mahindra Blossom ensures seamless connectivity to all parts of the city. The project 
               is surrounded by IT parks, schools, hospitals, and entertainment hubs, making it 
               the perfect address for modern families.
             </p>
             <p className="text-muted-foreground leading-relaxed">
               Experience the perfect blend of nature and urban convenience, where every detail 
               is crafted to elevate your lifestyle. From world-class amenities to vastu-compliant 
               designs, Mahindra Blossom is where your dreams blossom.
             </p>
           </div>
           
           <div className="relative">
             <img
               src={aboutImage}
               alt="Mahindra Blossom Community"
               className="rounded-3xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
               width={600}
               height={450}
               loading="lazy"
             />
           </div>
         </div>
       </Container>
     </section>
   );
 }