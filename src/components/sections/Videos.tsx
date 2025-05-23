// src/components/videos/Videos.tsx
import React, { useState } from 'react';
import { videos, VideoItem } from '../../data/videos';
import { Play, X } from 'lucide-react';

const Videos: React.FC = () => {
  const [selected, setSelected] = useState<VideoItem | null>(null);

  const openModal = (video: VideoItem) => {
    setSelected(video);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="videos" className="section bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="scroll-reveal text-4xl font-fantasy mb-6">Nos Vidéos</h2>
          <p className="scroll-reveal text-parchment/90 max-w-2xl mx-auto">
            Découvrez nos démonstrations exclusives.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6 scroll-reveal" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map(video => (
            <div
              key={video.id}
              className="scroll-reveal card overflow-hidden group cursor-pointer"
              onClick={() => openModal(video)}
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/20 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <Play className="h-6 w-6 text-background" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-fantasy text-gold text-xl mb-2">{video.title}</h3>
                <p className="text-parchment/80">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                className="absolute -top-12 right-0 text-gold hover:text-gold-light"
                onClick={closeModal}
                aria-label="Fermer"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="rounded-lg overflow-hidden border-2 border-gold/30 shadow-lg">
                <video
                  src={selected.src}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[80vh] bg-black"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Videos;
