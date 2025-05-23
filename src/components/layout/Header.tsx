import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActiveSection = (path: string) => {
    if (location.hash === path) return true;
    if (path === '#hero' && !location.hash && isHomePage) return true;
    return false;
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <Flame className="h-8 w-8 text-gold animate-glow" />
          <span className="font-fantasy text-gold text-xl md:text-2xl">Le Grimoire d'Or</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {isHomePage ? (
            <>
              <a 
                href="#hero" 
                className={`nav-link ${isActiveSection('#hero') ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              >
                Accueil
              </a>
              <a 
                href="#about" 
                className={`nav-link ${isActiveSection('#about') ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              >
                À Propos
              </a>
              <a 
                href="#videos" 
                className={`nav-link ${isActiveSection('#videos') ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('videos'); }}
              >
                Vidéos
              </a>
              <a 
                href="#testimonials" 
                className={`nav-link ${isActiveSection('#testimonials') ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
              >
                Témoignages
              </a>
              <a 
                href="#contact" 
                className={`nav-link ${isActiveSection('#contact') ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Contact
              </a>
            </>
          ) : null}
          <Link to="/shop" className={`nav-link ${location.pathname === '/shop' ? 'active' : ''}`}>
            Boutique
          </Link>
        </nav>

        <button 
          className="md:hidden text-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          {isHomePage ? (
            <>
              <a 
                href="#hero"
                className="nav-link"
                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              >
                Accueil
              </a>
              <a 
                href="#about"
                className="nav-link"
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              >
                À Propos
              </a>
              <a 
                href="#videos"
                className="nav-link"
                onClick={(e) => { e.preventDefault(); scrollToSection('videos'); }}
              >
                Vidéos
              </a>
              <a 
                href="#testimonials"
                className="nav-link"
                onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
              >
                Témoignages
              </a>
              <a 
                href="#contact"
                className="nav-link"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Contact
              </a>
            </>
          ) : null}
          <Link 
            to="/shop" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Boutique
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;