import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';
import logo from "@/assets/logo.png";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Header({ cartItemCount, onCartClick, selectedCategory, onCategoryChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="drippss" className="h-28 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleCategoryClick('All')}
              className={`transition-colors ${selectedCategory === 'All' ? 'text-black font-semibold' : 'text-gray-900 hover:text-gray-600'}`}
            >
              All
            </button>
            <button 
              onClick={() => handleCategoryClick('Tops')}
              className={`transition-colors ${selectedCategory === 'Tops' ? 'text-black font-semibold' : 'text-gray-900 hover:text-gray-600'}`}
            >
              Tops
            </button>
            <button 
              onClick={() => handleCategoryClick('Bottoms')}
              className={`transition-colors ${selectedCategory === 'Bottoms' ? 'text-black font-semibold' : 'text-gray-900 hover:text-gray-600'}`}
            >
              Bottoms
            </button>
            <button 
              onClick={() => handleCategoryClick('Outerwear')}
              className={`transition-colors ${selectedCategory === 'Outerwear' ? 'text-black font-semibold' : 'text-gray-900 hover:text-gray-600'}`}
            >
              leggings
            </button>
            <button 
              onClick={() => handleCategoryClick('leggings')}
              className={`transition-colors ${selectedCategory === 'leggings' ? 'text-black font-semibold' : 'text-gray-900 hover:text-gray-600'}`}
            >
            
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-900 hover:text-gray-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={onCartClick}
              className="relative text-gray-900 hover:text-gray-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button 
              onClick={() => handleCategoryClick('All')}
              className={`block w-full text-left transition-colors ${selectedCategory === 'All' ? 'text-black font-semibold' : 'text-gray-900 hover:text-gray-600'}`}
            >
              All
            </button>
            <button 
              onClick={() => handleCategoryClick('Tops')}
              className={`block w-full text-left transition-colors ${selectedCategory === 'Tops' ? 'text-black font-semibold' : 'text-gray-900 hover:text-gray-600'}`}
            >
              Tops
            </button>
            <button 
              onClick={() => handleCategoryClick('Bottoms')}
              className={`block w-full text-left transition-colors ${selectedCategory === 'Bottoms' ? 'text-black font-semibold' : 'text-gray-900 hover:text-gray-600'}`}
            >
              Bottoms
            </button>
            <button 
              onClick={() => handleCategoryClick('Outerwear')}
              className={`block w-full text-left transition-colors ${selectedCategory === 'Outerwear' ? 'text-black font-semibold' : 'text-gray-900 hover:text-gray-600'}`}
            >
              leggings
            </button>
            <button 
              onClick={() => handleCategoryClick('Footwear')}
              className={`block w-full text-left transition-colors ${selectedCategory === 'Footwear' ? 'text-black font-semibold' : 'text-gray-900 hover:text-gray-600'}`}
            >
           
            
          </div>
        )}
      </div>
    </header>
  );
}
