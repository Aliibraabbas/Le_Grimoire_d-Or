import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Beaker, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.scroll-reveal');
            elements.forEach((el, index) => {
              setTimeout(() => el.classList.add('revealed'), 200 * index);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section bg-background bg-parchment-texture"
      style={{
        backgroundImage: `
          linear-gradient(rgba(44,30,30,0.92), rgba(44,30,30,0.98)),
          url('/images/parchment.png')
        `
      }}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="scroll-reveal text-4xl font-fantasy mb-6">
            Notre Histoire Magique
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto scroll-reveal" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="scroll-reveal order-2 md:order-1">
            <h3 className="text-2xl font-fantasy text-gold mb-4">
              Une Tradition Ancestrale
            </h3>
            <p className="text-parchment mb-6 leading-relaxed">
              Fondé en 1892 par Auguste Mercier, un apothicaire visionnaire, 
              Le Grimoire d'Or est né d'une passion pour les remèdes naturels et les potions traditionnelles.
              Auguste a passé des années à voyager à travers le monde, recueillant des connaissances ancestrales 
               auprès des guérisseurs et des alchimistes.


            </p>
            <p className="text-parchment mb-6 leading-relaxed">
              À son retour en France, il a ouvert une modeste boutique dans le Quartier Latin de Paris,
               proposant des élixirs et des remèdes qui ont rapidement gagné en réputation pour leur efficacité. 
               Aujourd'hui, cinq générations plus tard, nous perpétuons cette tradition en mariant les 
               connaissances ancestrales aux découvertes modernes.
            </p>
            <div className="flex space-x-4 mt-8">
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 flex-1 text-center">
                <h4 className="font-fantasy text-gold text-lg mb-2">133</h4>
                <p className="text-parchment/80 text-sm">Années d'expertise</p>
              </div>
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 flex-1 text-center">
                <h4 className="font-fantasy text-gold text-lg mb-2">87</h4>
                <p className="text-parchment/80 text-sm">Potions uniques</p>
              </div>
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 flex-1 text-center">
                <h4 className="font-fantasy text-gold text-lg mb-2">14</h4>
                <p className="text-parchment/80 text-sm">Maîtres alchimistes</p>
              </div>
            </div>
          </div>
          
          {/* Visuel remplacé */}
          <div className="scroll-reveal order-1 md:order-2 relative">
            <div className="relative rounded-lg overflow-hidden border-2 border-gold/50 shadow-lg shadow-gold/20">
              <img 
                src="/images/vision.png" 
                alt="Atelier d'alchimie du Grimoire d'Or" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-lg p-4 flex flex-col items-center justify-center">
              <span className="font-fantasy text-gold text-xl">1892</span>
              <span className="text-parchment/80 text-sm text-center">Année de fondation</span>
            </div>
          </div>
        </div>
        
     {/* Philosophy Section */}
<div className="text-center mb-16">
  <h2 className="text-3xl font-fantasy mb-8 text-gold">Notre Philosophie</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="card bg-gold/5 border border-gold/20 rounded-lg p-6 flex flex-col items-center"
    >
      <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
        <Beaker size={24} className="text-gold" />
      </div>
      <h3 className="text-xl font-fantasy mb-2 text-gold">Qualité Exceptionnelle</h3>
      <p className="text-parchment-dark text-center">
        Nous sélectionnons méticuleusement les ingrédients les plus purs et les plus puissants 
        pour nos préparations, garantissant des potions d'une efficacité incomparable.
      </p>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="card bg-gold/5 border border-gold/20 rounded-lg p-6 flex flex-col items-center"
    >
      <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
        <Clock size={24} className="text-gold" />
      </div>
      <h3 className="text-xl font-fantasy mb-2 text-gold">Tradition & Innovation</h3>
      <p className="text-parchment-dark text-center">
        Nous respectons les recettes ancestrales tout en les adaptant aux connaissances modernes, 
        créant ainsi des potions aussi authentiques qu'efficaces.
      </p>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="card bg-gold/5 border border-gold/20 rounded-lg p-6 flex flex-col items-center"
    >
      <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
        <Heart size={24} className="text-gold" />
      </div>
      <h3 className="text-xl font-fantasy mb-2 text-gold">Éthique & Durabilité</h3>
      <p className="text-parchment-dark text-center">
        Nous nous engageons à respecter la nature et ses ressources, en pratiquant une cueillette 
        responsable et en limitant notre impact environnemental.
      </p>
    </motion.div>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;
