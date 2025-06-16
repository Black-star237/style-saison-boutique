
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-amber-600 font-medium uppercase tracking-wide text-sm">
                Nouvelle Collection
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Helsothario
                <span className="block text-4xl lg:text-5xl">Fashion</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Découvrez les dernières tendances de la mode avec notre collection automne-hiver. 
              Des pièces élégantes pour affirmer votre style au quotidien.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium"
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-medium"
              >
                Découvrir
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img 
                src="/lovable-uploads/fd26ef9c-41ec-4872-aa5f-c725df209c3a.png"
                alt="Collection Mode Helsothario"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-bold text-lg">New</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
              <p className="text-sm font-medium text-gray-900">Livraison gratuite</p>
              <p className="text-xs text-gray-500">dès 50€ d'achat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
