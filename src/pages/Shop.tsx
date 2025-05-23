import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/shop/ProductCard';
import ProductFilter from '../components/shop/ProductFilter';
import { initScrollReveal } from '../utils/animations';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type Category = 'all' | 'energy' | 'healing' | 'sleep';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [showPromotions, setShowPromotions] = useState(false);
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  
  useEffect(() => {
    // Set title
    document.title = 'Boutique - Le Grimoire d\'Or';
    
    // Initialize scroll reveal animations
    initScrollReveal();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const filteredProducts = products.filter(product => {
    // Filter by category
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }
    
    // Filter by promotions
    if (showPromotions && !product.isPromotion) {
      return false;
    }
    
    return true;
  });

  return (
    <main className="pt-24 pb-16 bg-background min-h-screen">
      <div className="container-custom">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-parchment hover:text-gold transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-fantasy text-gold mb-4">Nos Potions Magiques</h1>
          <p className="text-parchment/80 max-w-2xl mx-auto">
            Découvrez notre collection de potions confectionnées avec soin par nos maîtres alchimistes. 
            Chaque flacon contient le pouvoir des ingrédients les plus rares et précieux.
          </p>
        </div>
        
        <ProductFilter 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          showPromotions={showPromotions}
          setShowPromotions={setShowPromotions}
          layout={layout}
          setLayout={setLayout}
        />
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-parchment text-lg mb-4">Aucune potion ne correspond à vos critères.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setShowPromotions(false);
              }}
              className="btn-outline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            layout === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map(product => (
              <div key={product.id} className="scroll-reveal">
                <ProductCard product={product} layout={layout} />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Shop;