
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessStep from "@/components/ProcessStep";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, MessageSquare, Users, Handshake, CheckCircle, 
  Clock, Shield, ArrowRight 
} from "lucide-react";

const Process = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Process Hero */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Mediation Process</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                SulahMitra follows a structured yet flexible mediation process designed to help parties reach mutually beneficial resolutions in a safe, supportive environment.
              </p>
            </div>
          </div>
        </section>
        
        {/* Process Steps */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <ProcessStep 
                number={1}
                title="Initial Consultation"
                description="Begin with a confidential consultation where we learn about your dispute, explain our process, and determine if mediation is appropriate for your situation."
                icon={<FileText size={20} />}
              />
              
              <ProcessStep 
                number={2}
                title="Preparation & Agreement"
                description="We prepare all parties for mediation, establish ground rules, and have everyone sign a mediation agreement that outlines the process and confirms confidentiality."
                icon={<Shield size={20} />}
              />
              
              <ProcessStep 
                number={3}
                title="Mediation Sessions"
                description="Participate in structured sessions where all parties can express their concerns, needs, and interests. Our mediator facilitates productive communication and helps identify possible solutions."
                icon={<MessageSquare size={20} />}
              />
              
              <ProcessStep 
                number={4}
                title="Collaborative Problem-Solving"
                description="Work together to generate and evaluate options for resolution. Our mediator helps parties explore creative solutions that address everyone's core interests."
                icon={<Users size={20} />}
              />
              
              <ProcessStep 
                number={5}
                title="Resolution & Agreement"
                description="When consensus is reached, we document the agreement in clear, specific terms that all parties understand and accept, providing a roadmap for moving forward."
                icon={<Handshake size={20} />}
              />
            </div>
          </div>
        </section>
        
        {/* Process Features */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-center">
              Why Choose Our Process
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-3">
                  <Clock size={20} />
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Efficiency</h3>
                <p className="text-muted-foreground">
                  Our mediation process typically resolves disputes in weeks rather than the months or years that litigation can take.
                </p>
              </div>
              
              <div className="glass-card rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-3">
                  <Shield size={20} />
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Confidentiality</h3>
                <p className="text-muted-foreground">
                  Unlike court proceedings, our mediation process is completely private and confidential, protecting your personal or business reputation.
                </p>
              </div>
              
              <div className="glass-card rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-3">
                  <Handshake size={20} />
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Relationship Preservation</h3>
                <p className="text-muted-foreground">
                  Our collaborative approach helps preserve relationships that might otherwise be destroyed by adversarial legal proceedings.
                </p>
              </div>
              
              <div className="glass-card rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-3">
                  <Users size={20} />
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Self-Determination</h3>
                <p className="text-muted-foreground">
                  Parties maintain control over the outcome rather than having a decision imposed by a judge or arbitrator.
                </p>
              </div>
              
              <div className="glass-card rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-3">
                  <CheckCircle size={20} />
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Higher Satisfaction</h3>
                <p className="text-muted-foreground">
                  Research shows that mediated agreements have higher compliance rates because parties have actively participated in creating them.
                </p>
              </div>
              
              <div className="glass-card rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-sulah-900/50 flex items-center justify-center text-accent mb-3">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Improved Communication</h3>
                <p className="text-muted-foreground">
                  Our process teaches communication skills that can help prevent future conflicts and improve ongoing relationships.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="glass-card rounded-lg p-6">
                  <h3 className="text-xl font-display font-medium mb-2 text-accent">
                    How long does the mediation process take?
                  </h3>
                  <p className="text-muted-foreground">
                    Most mediations are completed within 2-6 weeks, depending on the complexity of the dispute and the parties' availability. The actual mediation sessions typically range from 2-6 hours, with some complex cases requiring multiple sessions.
                  </p>
                </div>
                
                <div className="glass-card rounded-lg p-6">
                  <h3 className="text-xl font-display font-medium mb-2 text-accent">
                    Is the mediation agreement legally binding?
                  </h3>
                  <p className="text-muted-foreground">
                    While we document all agreements reached during mediation, our mediation agreements are not automatically legally binding as we are not a legal service. However, parties may choose to have their agreement reviewed by their respective attorneys and formalized into a legally binding contract if desired.
                  </p>
                </div>
                
                <div className="glass-card rounded-lg p-6">
                  <h3 className="text-xl font-display font-medium mb-2 text-accent">
                    What if we can't reach an agreement?
                  </h3>
                  <p className="text-muted-foreground">
                    While most of our mediations result in successful agreements, sometimes full resolution isn't achieved. In these cases, we help parties document any partial agreements reached and clarify remaining issues. Parties remain free to pursue other resolution methods, including legal action, if needed.
                  </p>
                </div>
                
                <div className="glass-card rounded-lg p-6">
                  <h3 className="text-xl font-display font-medium mb-2 text-accent">
                    Do I need a lawyer for the mediation process?
                  </h3>
                  <p className="text-muted-foreground">
                    No, you do not need a lawyer to participate in our mediation process. However, parties are welcome to consult with their attorneys before, during, or after mediation, especially when reviewing any final agreements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-sulah-950 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(91,117,248,0.4),transparent)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(194,140,50,0.4),transparent)]"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Begin Your Path to Resolution
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take the first step towards resolving your dispute with our structured and supportive mediation process.
              </p>
              <Link to="/contact">
                <Button className="bg-sulah-600 hover:bg-sulah-700 text-white px-8 py-6 text-lg group">
                  Start Your Mediation Journey
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
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

export default Process;
