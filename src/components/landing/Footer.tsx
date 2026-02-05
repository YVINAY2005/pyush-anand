 import { Container } from "./Container";
 
 export function Footer() {
   return (
     <footer className="bg-primary text-primary-foreground py-12">
       <Container>
         {/* RERA Info */}
         <div className="text-center mb-8">
           <p className="text-sm md:text-base mb-2">
             PROJECT RERA No: PRM/KA/RERA/1251/446/PR/171225/008348
           </p>
           <p className="text-sm md:text-base">
             AGENT RERA No.: PRM/KA/RERA/1251/446/AG/240723/004988
           </p>
         </div>
         
         <hr className="border-primary-foreground/30 mb-8" />
         
         {/* Links */}
         <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
           <a
             href="#"
             className="text-primary-foreground/80 hover:text-primary-foreground transition-colors uppercase tracking-wider text-sm"
           >
             Disclaimer
           </a>
           <span className="hidden md:inline text-primary-foreground/50">|</span>
           <a
             href="#"
             className="text-primary-foreground/80 hover:text-primary-foreground transition-colors uppercase tracking-wider text-sm"
           >
             Privacy Policy
           </a>
         </div>
         
         {/* Copyright */}
         <div className="text-center">
           <p className="text-sm uppercase tracking-wider">
             ©2025. Mahindra Blossom. ALL RIGHTS RESERVED
           </p>
         </div>
       </Container>
     </footer>
   );
 }