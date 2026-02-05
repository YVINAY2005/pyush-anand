 import { Phone } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Container } from "./Container";
 
 export function Header() {
   return (
     <header className="fixed top-0 left-0 right-0 z-50 bg-mahindra-dark/95 backdrop-blur-sm">
       <Container className="py-4">
         <div className="flex items-center justify-between">
           <div className="flex items-center gap-2">
             <span className="text-2xl font-serif font-bold text-primary-foreground">
               Mahindra <span className="text-primary">Blossom</span>
             </span>
           </div>
           <Button
             variant="outline"
             className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
           >
             <Phone className="w-4 h-4 mr-2" />
             <span className="hidden sm:inline">Call Now</span>
           </Button>
         </div>
       </Container>
     </header>
   );
 }