 import flowerIcon from "@/assets/flower-icon.png";
 
 interface FlowerBulletProps {
   text: string;
   className?: string;
 }
 
 export function FlowerBullet({ text, className }: FlowerBulletProps) {
   return (
     <div className={`flex items-start gap-3 ${className || ""}`}>
       <img
         src={flowerIcon}
         alt=""
         className="w-6 h-6 flex-shrink-0 mt-0.5"
         loading="lazy"
       />
       <p className="text-foreground leading-relaxed">{text}</p>
     </div>
   );
 }