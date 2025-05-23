// src/data/videos.ts
export type VideoItem = {
  id: string;
  title: string;
  description: string;
  src: string;         // chemin local vers la video
  thumbnail: string;   // chemin local vers la miniature
};

export const videos: VideoItem[] = [
  {
    id: 'v1',
    title: "Mystical Vial Purchase",
    description: "Présentation de la potion mystique à l'achat",
    src: "/videos/MysticalVialPurchase.mp4",
    thumbnail: "/thumbnails/MysticalVialPurchase.png",
  },
  {
    id: 'v2',
    title: "Alchemy's Magic Unleashed",
    description: "Exploration du processus alchimique",
    src: "/videos/AlchemysMagicUnleashed.mp4",
    thumbnail: "/thumbnails/AlchemysMagicUnleashed.png",
  },
  {
    id: 'v3',
    title: "Generated Video 1",
    description: "Vidéo générée 1",
    src: "/videos/GeneratedVideo1.mp4",
    thumbnail: "/thumbnails/GeneratedVideo1.png",
  },
  {
    id: 'v4',
    title: "Generated Video Chat",
    description: "Vidéo de démonstration de chat généré",
    src: "/videos/GeneratedVideoChat.mp4",
    thumbnail: "/thumbnails/GeneratedVideoChat.png",
  },
  {
    id: 'v5',
    title: "Mystical Potion Purchase 2",
    description: "Deuxième démonstration d'achat de potion",
    src: "/videos/MysticalPotionPurchase2.mp4",
    thumbnail: "/thumbnails/MysticalPotionPurchase2.png",
  },
];
