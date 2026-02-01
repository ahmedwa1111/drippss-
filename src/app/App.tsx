import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { ProductCard, Product } from '@/app/components/ProductCard';
import { ShoppingCartDrawer, CartItem } from '@/app/components/ShoppingCartDrawer';
import { ProductDetail } from '@/app/components/ProductDetail';
import { Checkout } from '@/app/components/Checkout';
import { toast, Toaster } from 'sonner';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Classic Hoodie',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1760126130338-4e6c9043ee2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RyZWV0d2VhciUyMGhvb2RpZXxlbnwxfHx8fDE3Njk5NDYwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'Essential Tee',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1768935706759-f2be765b3aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjB0c2hpcnQlMjBzdHlsZXxlbnwxfHx8fDE3Njk5NDYwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 3,
    name: 'Slim Fit Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1602585198422-d795fa9bfd6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zJTIwZmFzaGlvbnxlbnwxfHx8fDE3Njk5MTA1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Bottoms',
    sizes: ['28', '30', '32', '34', '36'],
  },
  {
    id: 4,
    name: 'Urban Jacket',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1758390175578-245ec86d0348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwamFja2V0JTIwdXJiYW58ZW58MXx8fHwxNzY5OTQ2MDI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 5,
    name: 'Street Sneakers',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1650320079970-b4ee8f0dae33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc25lYWtlcnMlMjBzaG9lc3xlbnwxfHx8fDE3Njk5Mzk1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Footwear',
    sizes: ['7', '8', '9', '10', '11'],
  },
  {
    id: 6,
    name: 'Cargo Pants',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1762435891935-b464af4d389f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBwYW50cyUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzY5OTQ2MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Bottoms',
    sizes: ['28', '30', '32', '34', '36'],
  },
  {
    id: 7,
    name: 'Baseball Cap',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1765423588084-4c5c531e7831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBjYXB8ZW58MXx8fHwxNzY5OTQ2MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    sizes: ['One Size'],
  },
  {
    id: 8,
    name: 'Oversized Sweatshirt',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1722926628555-252c1c0258bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdmVyc2l6ZWQlMjBzd2VhdHNoaXJ0JTIwc3R5bGV8ZW58MXx8fHwxNzY5OTQ2MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(product => product.category === selectedCategory);

  const addToCart = (product: Product, size?: string) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
          size,
        },
      ]);
    }

    toast.success('Added to cart!');
    setSelectedProduct(null);
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.success('Item removed from cart');
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutComplete = () => {
    setIsCheckoutOpen(false);
    setCartItems([]);
    toast.success('Order placed successfully! 🎉');
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      
      <Header
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h2>
            <p className="text-gray-600 mt-2">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onProductClick={setSelectedProduct}
            />
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">drippss</h3>
              <p className="text-gray-400">
                Your destination for premium streetwear and contemporary fashion.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Men</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Women</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 drippss. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ShoppingCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onComplete={handleCheckoutComplete}
      />
    </div>
  );
}