
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-background/90 shadow-md backdrop-blur-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-sulah-500 to-gold-500 flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </span>
            <span className="font-display text-xl font-semibold text-foreground">
              SulahMitra
            </span>
          </NavLink>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={({ isActive }) => 
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => 
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }>
            Services
          </NavLink>
          <NavLink to="/process" className={({ isActive }) => 
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }>
            Our Process
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }>
            Contact Us
          </NavLink>
          <Button className="ml-4 bg-sulah-600 hover:bg-sulah-700 text-white">
            Start Mediation
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border/50 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'py-2 px-3 rounded-md bg-muted text-foreground' : 'py-2 px-3 text-foreground/70 hover:bg-muted/50 rounded-md'
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive ? 'py-2 px-3 rounded-md bg-muted text-foreground' : 'py-2 px-3 text-foreground/70 hover:bg-muted/50 rounded-md'
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink 
              to="/process" 
              className={({ isActive }) => 
                isActive ? 'py-2 px-3 rounded-md bg-muted text-foreground' : 'py-2 px-3 text-foreground/70 hover:bg-muted/50 rounded-md'
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Process
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? 'py-2 px-3 rounded-md bg-muted text-foreground' : 'py-2 px-3 text-foreground/70 hover:bg-muted/50 rounded-md'
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>
            <Button className="bg-sulah-600 hover:bg-sulah-700 text-white w-full">
              Start Mediation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
