import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FlaskRound as Flask } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Fond */}
      <div className="absolute inset-0 z-0">
        {/* Superposition sombre */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Ton image de fond */}
        <img 
          src="/images/Accueil.png" 
          alt="Le Grimoire d'Or - Potions magiques" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Contenu animé */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container-custom relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Flask size={80} className="mx-auto text-gold mb-4 animate-glow" />
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-fantasy mb-4 text-gold-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Le Grimoire d'Or
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-serif italic mb-8 text-parchment max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Potions et élixirs d'exception pour transformer votre existence
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link to="/shop" className="btn-primary text-base">
            Explorer la Boutique
          </Link>
          <Link to="/about" className="btn-outline text-base">
            Notre Histoire
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Dégradé bas */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
