
import { Link } from "react-router-dom";
import { ArrowRight, Users, Building, Home, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        
        {/* About Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                      alt="People in mediation" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-5 -right-5 w-60 h-60 rounded-lg border border-sulah-500/30 z-0"></div>
                  <div className="absolute -top-5 -left-5 w-60 h-60 rounded-lg border border-gold-500/30 z-0"></div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  About <span className="gradient-text">SulahMitra</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  SulahMitra is a community-driven mediation and dispute resolution service that helps individuals and businesses 
                  resolve conflicts peacefully, without the need for court proceedings.
                </p>
                <p className="text-muted-foreground mb-6">
                  We focus on guiding parties toward mutual understanding and agreement through structured dialogue and neutral facilitation. 
                  Our services are entirely non-legal in nature—we do not offer legal representation or practice law.
                </p>
                <p className="text-muted-foreground mb-8">
                  Instead, we provide a safe, private, and respectful environment where people can address issues like property disagreements, 
                  family disputes, business misunderstandings, and other civil matters.
                </p>
                <Link to="/process">
                  <Button className="group text-foreground border-accent hover:bg-accent/10">
                    Learn More About Our Process
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-muted-foreground">
                We offer specialized mediation services for a variety of situations, helping you find peaceful resolutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Home size={24} />}
                title="Property Disputes"
                description="Resolve boundary issues, lease conflicts, and other property-related disagreements through collaborative mediation."
              />
              <ServiceCard 
                icon={<Users size={24} />}
                title="Family Mediation"
                description="Navigate family conflicts, inheritance issues, and relationship disagreements in a supportive environment."
              />
              <ServiceCard 
                icon={<Building size={24} />}
                title="Business Solutions"
                description="Settle partner disputes, contract disagreements, and workplace conflicts without expensive litigation."
              />
              <ServiceCard 
                icon={<MessageSquare size={24} />}
                title="Community Mediation"
                description="Address neighborhood issues, community conflicts, and public space disagreements through facilitated dialogue."
              />
              <ServiceCard 
                icon={<Shield size={24} />}
                title="Conflict Prevention"
                description="Proactive workshops and training to help prevent conflicts before they escalate into serious disputes."
              />
              <div className="glass-card rounded-lg p-6 flex flex-col items-center justify-center text-center bg-sulah-900/30">
                <h3 className="text-xl font-display font-semibold mb-3">Need Something Else?</h3>
                <p className="text-muted-foreground mb-4">We tailor our mediation approach to your specific situation.</p>
                <Link to="/contact">
                  <Button className="bg-accent/20 hover:bg-accent/30 text-accent">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/services">
                <Button variant="outline" className="group">
                  View All Services
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-sulah-950 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(91,117,248,0.4),transparent)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(194,140,50,0.4),transparent)]"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Resolve Your Dispute?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take the first step towards a peaceful resolution. Our mediation services offer a faster, more affordable, and less stressful alternative to litigation.
              </p>
              <Link to="/contact">
                <Button className="bg-sulah-600 hover:bg-sulah-700 text-white px-8 py-6 text-lg">
                  Start Your Mediation Process
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
