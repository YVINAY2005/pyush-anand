 import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
 } from "@/components/ui/dialog";
 import { Button } from "@/components/ui/button";
 
 interface FloorPlanModalProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
   planType: string;
   onScheduleVisit: () => void;
 }
 
 const planDetails: Record<string, { size: string; price: string; features: string[] }> = {
   "2 BHK (Large)": {
     size: "1,200 - 1,350 Sq.Ft.",
     price: "₹1.25 Cr*",
     features: [
       "Spacious Living & Dining Area",
       "2 Bedrooms with Attached Bathrooms",
       "Modular Kitchen with Utility Area",
       "Large Balconies with Garden View",
       "Vastu Compliant Design",
     ],
   },
   "3 BHK": {
     size: "1,550 - 1,750 Sq.Ft.",
     price: "₹1.65 Cr*",
     features: [
       "Premium Living & Dining Area",
       "3 Bedrooms with Walk-in Closets",
       "Master Bedroom with En-suite Bath",
       "Modern Kitchen with Island Counter",
       "Multiple Balconies",
       "Servant Quarter Available",
     ],
   },
   "3.5 BHK": {
     size: "1,850 - 2,000 Sq.Ft.",
     price: "₹1.95 Cr*",
     features: [
       "Expansive Living & Family Room",
       "3 Bedrooms + Study Room",
       "Master Suite with Dressing Area",
       "Gourmet Kitchen with Pantry",
       "Wrap-around Balconies",
       "Dedicated Pooja Room",
     ],
   },
   "4 BHK": {
     size: "2,100 - 2,400 Sq.Ft.",
     price: "₹2.25 Cr*",
     features: [
       "Grand Living & Entertainment Area",
       "4 Bedrooms with Premium Finishes",
       "Master Suite with Jacuzzi Tub",
       "Chef's Kitchen with Breakfast Counter",
       "Private Terrace Garden",
       "Home Office Space",
       "Double Height Living Area",
     ],
   },
 };
 
 export function FloorPlanModal({
   open,
   onOpenChange,
   planType,
   onScheduleVisit,
 }: FloorPlanModalProps) {
   const details = planDetails[planType] || planDetails["3 BHK"];
 
   return (
     <Dialog open={open} onOpenChange={onOpenChange}>
       <DialogContent className="sm:max-w-lg">
         <DialogHeader>
           <DialogTitle className="text-2xl font-serif">
             {planType} Floor Plan
           </DialogTitle>
         </DialogHeader>
         
         <div className="space-y-6">
           <div className="flex justify-between items-center p-4 bg-secondary rounded-xl">
             <div>
               <p className="text-sm text-muted-foreground">Area</p>
               <p className="font-semibold text-foreground">{details.size}</p>
             </div>
             <div className="text-right">
               <p className="text-sm text-muted-foreground">Starting Price</p>
               <p className="font-bold text-primary text-xl">{details.price}</p>
             </div>
           </div>
           
           <div>
             <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
             <ul className="space-y-2">
               {details.features.map((feature, idx) => (
                 <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                   <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                   {feature}
                 </li>
               ))}
             </ul>
           </div>
           
           <div className="flex gap-3">
             <Button
               variant="outline"
               className="flex-1"
               onClick={() => onOpenChange(false)}
             >
               Close
             </Button>
             <Button
               className="flex-1 bg-primary hover:bg-primary/90"
               onClick={() => {
                 onOpenChange(false);
                 onScheduleVisit();
               }}
             >
               Schedule Visit
             </Button>
           </div>
         </div>
       </DialogContent>
     </Dialog>
   );
 }