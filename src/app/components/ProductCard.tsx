import { ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes?: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onProductClick }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div 
        className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4"
        onClick={() => onProductClick(product)}
      >
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
      <div onClick={() => onProductClick(product)}>
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="text-gray-900 mb-2">{product.name}</h3>
        <p className="font-semibold text-gray-900">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
