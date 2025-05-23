import React, { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formState.message.length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="section bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="scroll-reveal text-4xl font-fantasy mb-6">Contactez-Nous</h2>
          <p className="scroll-reveal text-parchment/90 max-w-2xl mx-auto">
            Une question sur nos potions ? Un besoin spécifique ? Notre équipe d'alchimistes 
            se tient à votre disposition pour vous répondre dans les plus brefs délais.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6 scroll-reveal"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="scroll-reveal">
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-8">
              <h3 className="font-fantasy text-gold text-2xl mb-6">Informations</h3>
              
              <div className="mb-8">
                <h4 className="font-fantasy text-gold text-lg mb-2">Horaires d'ouverture</h4>
                <ul className="space-y-2 text-parchment/80">
                  <li className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>10h - 19h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi</span>
                    <span>10h - 18h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-fantasy text-gold text-lg mb-2">Adresse</h4>
                <p className="text-parchment/80 mb-4">
                  42 Rue des Alchimistes<br />
                  Quartier Mystique<br />
                  75001 Paris
                </p>
                
                <h4 className="font-fantasy text-gold text-lg mb-2">Contact</h4>
                <p className="text-parchment/80 mb-1">
                  Téléphone: +33 1 23 45 67 89
                </p>
                <p className="text-parchment/80">
                  Email: contact@grimoire-or.fr
                </p>
              </div>
            </div>
            
            <div className="mt-8 rounded-lg overflow-hidden h-64 border border-gold/20">
              {/* This would be a map in a real implementation */}
              <div className="w-full h-full bg-gold/10 flex items-center justify-center">
                <p className="text-gold font-fantasy">Carte Interactive</p>
              </div>
            </div>
          </div>
          
          <div className="scroll-reveal">
            <form onSubmit={handleSubmit} className="bg-gold/5 border border-gold/20 rounded-lg p-8">
              <h3 className="font-fantasy text-gold text-2xl mb-6">Envoyez-nous un message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-500/30 rounded-lg flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <p className="text-green-300">Votre message a été envoyé avec succès !</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/30 border border-red-500/30 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                  <p className="text-red-300">Une erreur est survenue. Veuillez réessayer.</p>
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-parchment mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={`w-full p-3 bg-background border ${
                    errors.name ? 'border-red-500' : 'border-gold/30'
                  } rounded-md text-parchment focus:outline-none focus:border-gold`}
                />
                {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-parchment mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={`w-full p-3 bg-background border ${
                    errors.email ? 'border-red-500' : 'border-gold/30'
                  } rounded-md text-parchment focus:outline-none focus:border-gold`}
                />
                {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-parchment mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className={`w-full p-3 bg-background border ${
                    errors.subject ? 'border-red-500' : 'border-gold/30'
                  } rounded-md text-parchment focus:outline-none focus:border-gold`}
                />
                {errors.subject && <p className="mt-1 text-red-400 text-sm">{errors.subject}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-parchment mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className={`w-full p-3 bg-background border ${
                    errors.message ? 'border-red-500' : 'border-gold/30'
                  } rounded-md text-parchment focus:outline-none focus:border-gold`}
                ></textarea>
                {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="mr-2">Envoi en cours...</span>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;