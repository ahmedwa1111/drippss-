import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative h-[600px] bg-gray-900">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1760126130338-4e6c9043ee2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RyZWV0d2VhciUyMGhvb2RpZXxlbnwxfHx8fDE3Njk5NDYwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Fashion hero"
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Fresh Drops Every Week
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Elevate your style with drippss - where streetwear meets sophistication
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Shop New Arrivals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
