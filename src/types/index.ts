export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'energy' | 'healing' | 'sleep';
  image: string;
  isPromotion: boolean;
  promotionPrice?: number;
  ingredients: string[];
  effects: string[];
  inStock: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
}