import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
   onContactClick: () => void;
}

const navLinks = [
   { label: "About", href: "#about" },
   { label: "Features", href: "#features" },
   { label: "Pricing", href: "#pricing" },
   { label: "Amenities", href: "#amenities" },
   { label: "Floor Plans", href: "#floor-plans" },
   { label: "Location", href: "#location" },
];

export function Header({ onContactClick }: HeaderProps) {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const handleNavClick = (href: string) => {
     setMobileMenuOpen(false);
     const element = document.querySelector(href);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };

   return (
     <header className="fixed top-0 left-0 right-0 z-50 bg-mahindra-dark/95 backdrop-blur-sm">
       <Container className="py-4">
         <div className="flex items-center justify-between">
           {/* Logo */}
           <a href="#" className="flex items-center gap-2">
             <span className="text-xl md:text-2xl font-serif font-bold text-primary-foreground">
               Mahindra <span className="text-primary">Blossom</span>
             </span>
           </a>

           {/* Desktop Navigation */}
           <nav className="hidden lg:flex items-center gap-6">
             {navLinks.map((link) => (
               <button
                 key={link.href}
                 onClick={() => handleNavClick(link.href)}
                 className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
               >
                 {link.label}
               </button>
             ))}
           </nav>

           {/* CTA Buttons */}
           <div className="flex items-center gap-3">
             <Button
               variant="outline"
               size="sm"
               className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
               onClick={onContactClick}
             >
               <Phone className="w-4 h-4 mr-2" />
               Call Now
             </Button>

             {/* Mobile Menu */}
             <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
               <SheetTrigger asChild className="lg:hidden">
                 <Button variant="ghost" size="icon" className="text-primary-foreground">
                   <Menu className="w-6 h-6" />
                 </Button>
               </SheetTrigger>
               <SheetContent side="right" className="bg-mahindra-dark border-mahindra-dark">
                 <nav className="flex flex-col gap-4 mt-8">
                   {navLinks.map((link) => (
                     <button
                       key={link.href}
                       onClick={() => handleNavClick(link.href)}
                       className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-lg text-left py-2"
                     >
                       {link.label}
                     </button>
                   ))}
                   <Button
                     className="mt-4 bg-primary hover:bg-primary/90"
                     onClick={() => {
                       setMobileMenuOpen(false);
                       onContactClick();
                     }}
                   >
                     <Phone className="w-4 h-4 mr-2" />
                     Contact Us
                   </Button>
                 </nav>
               </SheetContent>
             </Sheet>
           </div>
         </div>
       </Container>
     </header>
   );
}