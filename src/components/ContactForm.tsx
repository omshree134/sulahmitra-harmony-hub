
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    disputeType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you shortly.",
        variant: "default"
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        disputeType: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name<span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-muted border-border focus:border-sulah-500"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email<span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-muted border-border focus:border-sulah-500"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-muted border-border focus:border-sulah-500"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="disputeType" className="text-sm font-medium">
            Type of Dispute<span className="text-red-500">*</span>
          </label>
          <select
            id="disputeType"
            name="disputeType"
            value={formData.disputeType}
            onChange={handleChange}
            required
            className="w-full bg-muted border border-border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sulah-500"
          >
            <option value="" disabled>Select dispute type</option>
            <option value="property">Property Dispute</option>
            <option value="family">Family Dispute</option>
            <option value="business">Business Dispute</option>
            <option value="community">Community Dispute</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Brief Description of Your Situation<span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please briefly describe your situation"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-muted border-border focus:border-sulah-500"
        />
      </div>
      
      <div className="flex justify-center pt-4">
        <Button 
          type="submit" 
          className="bg-sulah-600 hover:bg-sulah-700 text-white px-8 py-6 text-lg w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
