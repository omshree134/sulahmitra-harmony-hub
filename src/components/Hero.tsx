
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-sulah-950/50 z-0"></div>
      
      {/* Abstract background shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-sulah-800/20 blur-[100px]"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-accent/10 blur-[120px]"></div>
      <div className="absolute bottom-40 right-1/4 w-60 h-60 rounded-full bg-gold-800/20 blur-[80px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Peaceful Resolutions Through <span className="gradient-text">Guided Mediation</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Resolve disputes without litigation through our community-driven mediation service. 
            We facilitate understanding, cooperation, and fair settlements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sulah-600 hover:bg-sulah-700 text-white px-6 py-6 text-lg" asChild>
              <Link to="/contact">Start Mediation</Link>
            </Button>
            <Button variant="outline" className="border-accent hover:bg-accent/10 text-foreground px-6 py-6 text-lg" asChild>
              <Link to="/process">Learn Our Process</Link>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/50 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-display text-xl font-medium text-foreground">97%</h3>
              <p className="text-muted-foreground">Successful Mediations</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-xl font-medium text-foreground">14 Days</h3>
              <p className="text-muted-foreground">Average Resolution Time</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-xl font-medium text-foreground">500+</h3>
              <p className="text-muted-foreground">Conflicts Resolved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
