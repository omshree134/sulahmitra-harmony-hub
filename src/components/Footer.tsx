
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card mt-auto border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-gradient-to-br from-sulah-500 to-gold-500 flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </span>
              <span className="font-display text-xl font-semibold text-foreground">
                SulahMitra
              </span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Community-driven mediation and dispute resolution service helping individuals and businesses resolve conflicts peacefully.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/process" className="text-muted-foreground hover:text-accent transition-colors">
                  Our Process
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  123 Peace Avenue, Harmony District, Cityville, CV 12345
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-accent" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-accent" />
                <a href="mailto:info@sulahmitra.com" className="text-muted-foreground hover:text-accent transition-colors">
                  info@sulahmitra.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-6 text-center text-muted-foreground text-sm">
          <p>© {currentYear} SulahMitra. All rights reserved.</p>
          <p className="mt-1 text-xs">
            SulahMitra is a non-legal dispute resolution service and does not provide legal advice or representation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
