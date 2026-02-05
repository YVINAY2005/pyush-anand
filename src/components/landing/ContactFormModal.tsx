 import { useState } from "react";
 import { z } from "zod";
 import { useForm } from "react-hook-form";
 import { zodResolver } from "@hookform/resolvers/zod";
 import { X } from "lucide-react";
 import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
 } from "@/components/ui/dialog";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
 } from "@/components/ui/form";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 import { useToast } from "@/hooks/use-toast";
 
 const contactSchema = z.object({
   name: z
     .string()
     .trim()
     .min(2, { message: "Name must be at least 2 characters" })
     .max(100, { message: "Name must be less than 100 characters" }),
   email: z
     .string()
     .trim()
     .email({ message: "Please enter a valid email address" })
     .max(255, { message: "Email must be less than 255 characters" }),
   phone: z
     .string()
     .trim()
     .min(10, { message: "Please enter a valid phone number" })
     .max(15, { message: "Phone number is too long" })
     .regex(/^[0-9+\-\s()]+$/, { message: "Invalid phone number format" }),
   propertyType: z.string().min(1, { message: "Please select a property type" }),
   message: z
     .string()
     .trim()
     .max(500, { message: "Message must be less than 500 characters" })
     .optional(),
 });
 
 type ContactFormData = z.infer<typeof contactSchema>;
 
 interface ContactFormModalProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
 }
 
 export function ContactFormModal({ open, onOpenChange }: ContactFormModalProps) {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const { toast } = useToast();
 
   const form = useForm<ContactFormData>({
     resolver: zodResolver(contactSchema),
     defaultValues: {
       name: "",
       email: "",
       phone: "",
       propertyType: "",
       message: "",
     },
   });
 
   const onSubmit = async (data: ContactFormData) => {
     setIsSubmitting(true);
     
     // Simulate API call
     await new Promise((resolve) => setTimeout(resolve, 1000));
     
     toast({
       title: "Thank you for your interest!",
       description: "Our team will contact you within 24 hours.",
     });
     
     form.reset();
     onOpenChange(false);
     setIsSubmitting(false);
   };
 
   return (
     <Dialog open={open} onOpenChange={onOpenChange}>
       <DialogContent className="sm:max-w-md">
         <DialogHeader>
           <DialogTitle className="text-2xl font-serif">
             Schedule a Visit
           </DialogTitle>
         </DialogHeader>
         
         <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
             <FormField
               control={form.control}
               name="name"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Full Name *</FormLabel>
                   <FormControl>
                     <Input placeholder="Enter your name" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
             
             <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Email *</FormLabel>
                   <FormControl>
                     <Input
                       type="email"
                       placeholder="Enter your email"
                       {...field}
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
             
             <FormField
               control={form.control}
               name="phone"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Phone Number *</FormLabel>
                   <FormControl>
                     <Input
                       type="tel"
                       placeholder="+91 98765 43210"
                       {...field}
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
             
             <FormField
               control={form.control}
               name="propertyType"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Interested In *</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                     <FormControl>
                       <SelectTrigger>
                         <SelectValue placeholder="Select property type" />
                       </SelectTrigger>
                     </FormControl>
                     <SelectContent>
                       <SelectItem value="2bhk">2 BHK</SelectItem>
                       <SelectItem value="3bhk">3 BHK</SelectItem>
                       <SelectItem value="3.5bhk">3.5 BHK</SelectItem>
                       <SelectItem value="4bhk">4 BHK</SelectItem>
                     </SelectContent>
                   </Select>
                   <FormMessage />
                 </FormItem>
               )}
             />
             
             <FormField
               control={form.control}
               name="message"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Message (Optional)</FormLabel>
                   <FormControl>
                     <Textarea
                       placeholder="Any specific requirements?"
                       className="resize-none"
                       rows={3}
                       {...field}
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
             
             <Button
               type="submit"
               className="w-full bg-primary hover:bg-primary/90"
               disabled={isSubmitting}
             >
               {isSubmitting ? "Submitting..." : "Submit Enquiry"}
             </Button>
           </form>
         </Form>
       </DialogContent>
     </Dialog>
   );
 }