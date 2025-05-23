import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Videos from '../components/sections/Videos';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import { initScrollReveal } from '../utils/animations';

const Home: React.FC = () => {
  useEffect(() => {
    // Set title
    document.title = 'Le Grimoire d\'Or - Potions Magiques';
    
    // Initialize scroll reveal animations
    initScrollReveal();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Videos />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;