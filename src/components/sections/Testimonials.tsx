import React, { useState, useEffect } from 'react';
import { testimonials } from '../../data/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  useEffect(() => {
    let interval: number | null = null;
    
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);
  
  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="section bg-background bg-parchment-texture"
      style={{
        backgroundImage: `linear-gradient(rgba(44, 30, 30, 0.92), rgba(44, 30, 30, 0.98)), url('https://www.transparenttextures.com/patterns/parchment.png')`,
      }}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="scroll-reveal text-4xl font-fantasy mb-6">Ce Que Disent Nos Clients</h2>
          <div className="w-24 h-1 bg-gold mx-auto scroll-reveal"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gold/5 border border-gold/20 rounded-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/50 mb-4 md:mb-0 md:mr-4 mx-auto md:mx-0">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="font-fantasy text-gold text-xl">{testimonial.name}</h3>
                        <p className="text-parchment/70 text-sm">{testimonial.role}</p>
                        <div className="flex mt-2 justify-center md:justify-start">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-parchment/30'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-parchment text-lg italic leading-relaxed text-center md:text-left">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gold/20 text-gold hover:bg-gold/30 flex items-center justify-center focus:outline-none"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gold/20 text-gold hover:bg-gold/30 flex items-center justify-center focus:outline-none"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-gold' : 'bg-gold/30'
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;