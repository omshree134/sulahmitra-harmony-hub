
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, Users, Building, MessageSquare, Shield, Landmark, 
  FileText, Clock, Handshake, Heart, ArrowRight 
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Services Hero */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Mediation Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                SulahMitra offers a comprehensive range of mediation services designed to address various types of disputes and promote peaceful resolution through structured dialogue.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Services */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-center">Primary Service Categories</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Home size={24} />}
                title="Property Disputes"
                description="Resolve boundary disputes, landlord-tenant issues, neighbor conflicts, shared property disagreements, and maintenance responsibilities."
              />
              <ServiceCard 
                icon={<Users size={24} />}
                title="Family Mediation"
                description="Address inheritance conflicts, elder care decisions, relationship breakdowns, family business disagreements, and communication issues."
              />
              <ServiceCard 
                icon={<Building size={24} />}
                title="Business Solutions"
                description="Settle partnership disputes, contract disagreements, vendor conflicts, workplace issues, and internal organizational disputes."
              />
              <ServiceCard 
                icon={<MessageSquare size={24} />}
                title="Community Mediation"
                description="Resolve neighborhood issues, community organization conflicts, public space disagreements, and local resource allocation disputes."
              />
              <ServiceCard 
                icon={<Shield size={24} />}
                title="Conflict Prevention"
                description="Participate in workshops and training sessions designed to help prevent conflicts before they escalate into serious disputes."
              />
              <ServiceCard 
                icon={<Landmark size={24} />}
                title="Civic Matters"
                description="Address local governance issues, public services concerns, and other civil matters that affect community well-being."
              />
            </div>
          </div>
        </section>
        
        {/* Specialized Services */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-center">Specialized Services</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card rounded-lg p-5 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-3">
                  <FileText size={20} />
                </div>
                <h3 className="font-display font-medium mb-2">Document Facilitation</h3>
                <p className="text-sm text-muted-foreground">Assistance with drafting simple agreements after successful mediation.</p>
              </div>
              
              <div className="glass-card rounded-lg p-5 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-3">
                  <Clock size={20} />
                </div>
                <h3 className="font-display font-medium mb-2">Expedited Mediation</h3>
                <p className="text-sm text-muted-foreground">Fast-tracked process for time-sensitive disputes requiring immediate attention.</p>
              </div>
              
              <div className="glass-card rounded-lg p-5 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-3">
                  <Handshake size={20} />
                </div>
                <h3 className="font-display font-medium mb-2">Multi-Party Mediation</h3>
                <p className="text-sm text-muted-foreground">Specialized approach for disputes involving multiple parties or complex interests.</p>
              </div>
              
              <div className="glass-card rounded-lg p-5 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-3">
                  <Heart size={20} />
                </div>
                <h3 className="font-display font-medium mb-2">Healing Circles</h3>
                <p className="text-sm text-muted-foreground">Group sessions focused on community healing after widespread disputes or incidents.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Approach */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-center">
                Our Approach to Mediation
              </h2>
              
              <div className="space-y-8">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-display font-medium mb-3 text-sulah-400">What We Do</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Provide a neutral, safe environment for constructive dialogue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Facilitate structured communication between disputing parties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Guide parties toward mutually acceptable resolutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Document agreements reached during mediation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Offer follow-up support to ensure agreements are maintained</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-display font-medium mb-3 text-destructive">What We Don't Do</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Provide legal advice or representation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Make judgments or decisions on behalf of the parties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Force parties to accept specific solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Handle criminal matters or cases involving abuse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Guarantee specific outcomes or success in every case</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="glass-card rounded-lg p-8 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
                Ready to Begin the Resolution Process?
              </h2>
              <p className="text-muted-foreground mb-6">
                Take the first step towards resolving your dispute with our expert mediation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-sulah-600 hover:bg-sulah-700 text-white" asChild>
                  <Link to="/contact">Start Mediation Process</Link>
                </Button>
                <Button variant="outline" className="group" asChild>
                  <Link to="/process">
                    Learn About Our Process
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
