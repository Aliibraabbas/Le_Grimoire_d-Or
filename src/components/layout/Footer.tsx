import React from 'react';
import { Flame, Mail, MapPin, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-gold/30 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Flame className="h-6 w-6 text-gold" />
              <span className="font-fantasy text-gold text-xl">Le Grimoire d'Or</span>
            </Link>
            <p className="text-parchment/80 mb-4">
              Maîtres alchimistes depuis 1412, nous créons des potions d'exception 
              pour répondre à tous vos besoins magiques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-fantasy mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-parchment/80 hover:text-gold transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-parchment/80 hover:text-gold transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <a href="#about" className="text-parchment/80 hover:text-gold transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-parchment/80 hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-fantasy mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-parchment/80">
                  42 Rue des Alchimistes<br />
                  Quartier Mystique<br />
                  75001 Paris
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <span className="text-parchment/80">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <span className="text-parchment/80">contact@grimoire-or.fr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold/20 pt-6 text-center text-parchment/60">
          <p>© 2025 Le Grimoire d'Or. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;