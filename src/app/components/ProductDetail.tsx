import { X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Product } from './ProductCard';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, size?: string) => void;
}

export function ProductDetail({ product, onClose, onAddToCart }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const sizes = product.sizes || ['XS', 'S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Product Details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image */}
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
                <div className="grid grid-cols-5 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-4 border rounded-lg transition-colors ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  Premium quality {product.category.toLowerCase()} made with the finest materials. 
                  Designed for comfort and style, perfect for any occasion. Features a modern 
                  fit and exceptional durability.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• High-quality materials</li>
                  <li>• Modern and comfortable fit</li>
                  <li>• Easy care instructions</li>
                  <li>• Sustainable production</li>
                </ul>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-colors ${
                  selectedSize
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
