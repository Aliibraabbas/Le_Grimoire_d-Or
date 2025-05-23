import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: "Potion de Concentration",
    description: "Cette potion à la lueur verte renferme le pouvoir de la concentration absolue. Une étoile dorée flotte en son cœur, symbole de la clarté mentale qu'elle procure.",
    price: 60.00,
    category: 'energy',
    image: '/images/potion-concentration.png',
    isPromotion: true,
    promotionPrice: 45.00,
    ingredients: ['Cristal de focus', 'Essence d\'étoile', 'Rosée de l\'aube'],
    effects: ['Concentration accrue', 'Clarté mentale', 'Mémoire améliorée'],
    inStock: true
  },
  {
    id: '2',
    name: 'Brume d\'Aube',
    description: "Une mystérieuse potion violette dont les volutes de fumée dansent comme les premiers rayons du soleil. Idéale pour un réveil en douceur et une journée sereine.",
    price: 65.00,
    category: 'sleep',
    image: '/images/brume-aube.png',
    isPromotion: false,
    ingredients: ['Brume matinale', 'Pétales d\'aurore', 'Essence de rêve'],
    effects: ['Réveil naturel', 'Esprit clair', 'Transition douce'],
    inStock: true
  },
  {
    id: '3',
    name: 'Potion de Flamme Sereine',
    description: "Cette potion écarlate contient une flamme éternelle qui danse paisiblement. Elle apporte chaleur et réconfort à celui qui la consomme.",
    price: 60.00,
    category: 'healing',
    image: '/images/potion-flamme.png',
    isPromotion: false,
    ingredients: ['Flamme éternelle', 'Cristal de paix', 'Essence de phénix'],
    effects: ['Chaleur intérieure', 'Apaisement', 'Force tranquille'],
    inStock: true
  },
  {
    id: '4',
    name: 'Potion d\'Éclat Stellaire',
    description: "Un élixir d'un bleu profond où brillent trois étoiles mystiques. Cette potion capture l'essence même de la voûte céleste.",
    price: 75.00,
    category: 'energy',
    image: '/images/potion-eclat.png',
    isPromotion: true,
    promotionPrice: 60.00,
    ingredients: ['Poussière d\'étoiles', 'Cristal céleste', 'Larmes de constellation'],
    effects: ['Énergie cosmique', 'Vision nocturne', 'Sagesse stellaire'],
    inStock: true
  }
];