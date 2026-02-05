 import { cn } from "@/lib/utils";
 import flowerDivider from "@/assets/flower-divider.png";
 
 interface SectionHeadingProps {
   title: string;
   highlightWord?: string;
   subtitle?: string;
   className?: string;
   showDivider?: boolean;
   light?: boolean;
 }
 
 export function SectionHeading({
   title,
   highlightWord,
   subtitle,
   className,
   showDivider = true,
   light = false,
 }: SectionHeadingProps) {
   const renderTitle = () => {
     if (!highlightWord) {
       return <span>{title}</span>;
     }
     const parts = title.split(highlightWord);
     return (
       <>
         {parts[0]}
         <span className="text-primary">{highlightWord}</span>
         {parts[1]}
       </>
     );
   };
 
   return (
     <div className={cn("text-center mb-12", className)}>
       <h2
         className={cn(
           "text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4",
           light ? "text-primary-foreground" : "text-foreground"
         )}
       >
         {renderTitle()}
       </h2>
       {subtitle && (
         <p
           className={cn(
             "text-sm md:text-base tracking-[0.2em] uppercase",
             light ? "text-primary-foreground/80" : "text-muted-foreground"
           )}
         >
           {subtitle}
         </p>
       )}
       {showDivider && (
         <div className="flex justify-center mt-6">
           <img
             src={flowerDivider}
             alt=""
             className="h-8 md:h-10 w-auto object-contain"
             loading="lazy"
           />
         </div>
       )}
     </div>
   );
 }