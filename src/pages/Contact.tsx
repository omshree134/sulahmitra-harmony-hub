
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Contact Hero */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Contact <span className="gradient-text">SulahMitra</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Reach out to us to begin your journey toward peaceful conflict resolution. We're here to guide you through every step of the mediation process.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card rounded-lg p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-4">
                  <Phone size={20} />
                </div>
                <h3 className="font-display font-medium mb-2">Phone</h3>
                <p className="text-muted-foreground mb-2">Call us directly</p>
                <a href="tel:+1234567890" className="text-accent hover:text-accent/80 transition-colors">
                  (123) 456-7890
                </a>
              </div>
              
              <div className="glass-card rounded-lg p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-4">
                  <Mail size={20} />
                </div>
                <h3 className="font-display font-medium mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">Send us a message</p>
                <a href="mailto:info@sulahmitra.com" className="text-accent hover:text-accent/80 transition-colors">
                  info@sulahmitra.com
                </a>
              </div>
              
              <div className="glass-card rounded-lg p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-4">
                  <MapPin size={20} />
                </div>
                <h3 className="font-display font-medium mb-2">Location</h3>
                <p className="text-muted-foreground mb-2">Visit our office</p>
                <address className="not-italic text-accent">
                  123 Peace Avenue<br />
                  Harmony District<br />
                  Cityville, CV 12345
                </address>
              </div>
              
              <div className="glass-card rounded-lg p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-4">
                  <Clock size={20} />
                </div>
                <h3 className="font-display font-medium mb-2">Hours</h3>
                <p className="text-muted-foreground mb-2">We are available</p>
                <p className="text-accent">
                  Monday - Friday<br />
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 bg-gradient-to-br from-sulah-900 to-sulah-800 p-8 relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(91,117,248,0.2),transparent)]"></div>
                    
                    <div className="relative z-10">
                      <h2 className="font-display text-2xl font-semibold mb-6 text-white">
                        How We Can Help
                      </h2>
                      
                      <div className="space-y-6 text-white/90">
                        <div className="flex gap-4">
                          <div className="mt-1">
                            <MessageSquare size={20} className="text-gold-400" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Initial Consultation</h3>
                            <p className="text-sm text-white/70">
                              Schedule a free consultation to discuss your dispute and explore how our mediation services can help.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="mt-1">
                            <MessageSquare size={20} className="text-gold-400" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Service Inquiry</h3>
                            <p className="text-sm text-white/70">
                              Learn more about our specific mediation services and how they apply to your unique situation.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="mt-1">
                            <MessageSquare size={20} className="text-gold-400" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">General Questions</h3>
                            <p className="text-sm text-white/70">
                              Have questions about our process, approach, or anything else? We're here to provide answers.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-12 pt-6 border-t border-white/10">
                        <p className="text-white/90 text-sm">
                          Your privacy is important to us. All communications are kept strictly confidential.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3 p-8">
                    <h2 className="font-display text-2xl font-semibold mb-6">
                      Get in Touch
                    </h2>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-muted/30">
                {/* This would be replaced with an actual map in a real implementation */}
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-4 text-sulah-500" />
                    <p className="text-muted-foreground">
                      Interactive map would be displayed here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
