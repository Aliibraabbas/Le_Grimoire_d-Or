import React from 'react';
import { Filter, LayoutGrid, List } from 'lucide-react';

type Category = 'all' | 'energy' | 'healing' | 'sleep';

interface ProductFilterProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
  showPromotions: boolean;
  setShowPromotions: (show: boolean) => void;
  layout: 'grid' | 'list';
  setLayout: (layout: 'grid' | 'list') => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  activeCategory,
  setActiveCategory,
  showPromotions,
  setShowPromotions,
  layout,
  setLayout
}) => {
  return (
    <div className="bg-gold/5 border border-gold/30 rounded-lg p-4 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Filter className="h-5 w-5 text-gold mr-2" />
          <h3 className="font-fantasy text-gold">Filtrer les potions</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === 'all'
                ? 'bg-gold text-background font-medium'
                : 'bg-gold/20 text-gold hover:bg-gold/30'
            }`}
          >
            Toutes
          </button>
          
          <button
            onClick={() => setActiveCategory('energy')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === 'energy'
                ? 'bg-gold text-background font-medium'
                : 'bg-gold/20 text-gold hover:bg-gold/30'
            }`}
          >
            Énergie
          </button>
          
          <button
            onClick={() => setActiveCategory('healing')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === 'healing'
                ? 'bg-azure text-parchment font-medium'
                : 'bg-azure/20 text-azure hover:bg-azure/30'
            }`}
          >
            Guérison
          </button>
          
          <button
            onClick={() => setActiveCategory('sleep')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === 'sleep'
                ? 'bg-purple-500 text-parchment font-medium'
                : 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30'
            }`}
          >
            Sommeil
          </button>
        </div>
      </div>
      
      <div className="border-t border-gold/20 mt-4 pt-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={showPromotions}
              onChange={() => setShowPromotions(!showPromotions)}
            />
            <div className="relative w-11 h-6 bg-gold/30 peer-focus:ring-2 peer-focus:ring-gold/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-background after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
            <span className="ms-3 text-sm text-parchment">Promotions uniquement</span>
          </label>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-parchment/80 mr-2">Affichage:</span>
          <button
            onClick={() => setLayout('grid')}
            className={`p-2 rounded transition-colors ${
              layout === 'grid'
                ? 'bg-gold/30 text-gold'
                : 'bg-gold/10 text-parchment/60 hover:bg-gold/20'
            }`}
            aria-label="Affichage en grille"
          >
            <LayoutGrid className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => setLayout('list')}
            className={`p-2 rounded transition-colors ${
              layout === 'list'
                ? 'bg-gold/30 text-gold'
                : 'bg-gold/10 text-parchment/60 hover:bg-gold/20'
            }`}
            aria-label="Affichage en liste"
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;