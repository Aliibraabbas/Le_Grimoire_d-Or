import React from 'react';
import { Product } from '../../types';
import { ShoppingBag, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  layout: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, layout }) => {
  const isGrid = layout === 'grid';
  
  return (
    <div className={`card group hover:border-gold/60 transition-all duration-300 ${
      isGrid ? '' : 'flex'
    }`}>
      <div className={`relative ${isGrid ? 'aspect-square' : 'w-1/3 aspect-square'}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
        />
        
        {product.isPromotion && (
          <div className="absolute top-4 right-4 bg-gold text-background py-1 px-3 rounded-full font-fantasy text-sm transform rotate-3">
            Promotion
          </div>
        )}
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center">
            <span className="font-fantasy text-gold border border-gold py-1 px-4 rounded-full">
              En rupture
            </span>
          </div>
        )}
      </div>
      
      <div className={`p-6 flex flex-col ${isGrid ? '' : 'w-2/3'}`}>
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-fantasy text-gold text-xl">{product.name}</h3>
          <div className={`${isGrid ? 'block' : 'flex items-center'}`}>
            {product.isPromotion ? (
              <div className={`${isGrid ? '' : 'flex flex-col items-end'}`}>
                <span className="text-parchment/60 line-through text-sm">
                  {product.price.toFixed(2)} €
                </span>
                <span className="text-gold font-bold">
                  {product.promotionPrice?.toFixed(2)} €
                </span>
              </div>
            ) : (
              <span className="text-gold font-bold">{product.price.toFixed(2)} €</span>
            )}
          </div>
        </div>
        
        <div className="mb-4 flex">
          <span className={`px-2 py-1 rounded-full text-xs ${
            product.category === 'energy' 
              ? 'bg-gold/20 text-gold' 
              : product.category === 'healing'
                ? 'bg-azure/20 text-azure' 
                : 'bg-purple-500/20 text-purple-300'
          }`}>
            {product.category === 'energy' 
              ? 'Énergie' 
              : product.category === 'healing' 
                ? 'Guérison' 
                : 'Sommeil'}
          </span>
        </div>
        
        <p className="text-parchment/80 text-sm mb-4">
          {product.description}
        </p>
        
        {!isGrid && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-gold text-sm font-fantasy mb-1">Ingrédients</h4>
              <ul className="text-xs text-parchment/70">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <Star className="w-3 h-3 text-gold mr-1" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gold text-sm font-fantasy mb-1">Effets</h4>
              <ul className="text-xs text-parchment/70">
                {product.effects.map((effect, index) => (
                  <li key={index} className="flex items-center">
                    <Star className="w-3 h-3 text-gold mr-1" />
                    {effect}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <div className="mt-auto">
          <button 
            className={`btn-primary w-full flex items-center justify-center ${
              !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!product.inStock}
          >
            <ShoppingBag className="h-5 w-5 mr-2" />
            <span>Commander</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;