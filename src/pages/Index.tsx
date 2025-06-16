
import { ShoppingBag, Search, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryShowcase from '@/components/CategoryShowcase';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Helsothario
              <span className="block text-sm font-normal text-amber-600">Fashion</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-amber-600 font-medium hover:text-amber-700 transition-colors">Home</Link>
              <Link to="/nouveautes" className="text-gray-700 hover:text-amber-600 transition-colors">Nouveautés</Link>
              <Link to="/femmes" className="text-gray-700 hover:text-amber-600 transition-colors">Femmes</Link>
              <Link to="/hommes" className="text-gray-700 hover:text-amber-600 transition-colors">Hommes</Link>
              <Link to="/accessoires" className="text-gray-700 hover:text-amber-600 transition-colors">Accessoires</Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  type="text" 
                  placeholder="Rechercher des produits..." 
                  className="pl-10 pr-4 py-2 border-gray-200 focus:border-amber-500 focus:ring-amber-500 w-64"
                />
              </div>
              <Button variant="ghost" size="icon" className="hover:bg-amber-50">
                <Heart className="w-5 h-5 text-gray-600" />
              </Button>
              <Link to="/login">
                <Button variant="ghost" size="icon" className="hover:bg-amber-50">
                  <User className="w-5 h-5 text-gray-600" />
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative hover:bg-amber-50">
                  <ShoppingBag className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <FeaturedProducts />
        <CategoryShowcase />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Helsothario Fashion</h3>
              <p className="text-gray-400 mb-4">
                Découvrez les dernières tendances mode pour hommes et femmes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/nouveautes" className="hover:text-white transition-colors">Nouveautés</Link></li>
                <li><Link to="/femmes" className="hover:text-white transition-colors">Femmes</Link></li>
                <li><Link to="/hommes" className="hover:text-white transition-colors">Hommes</Link></li>
                <li><Link to="/accessoires" className="hover:text-white transition-colors">Accessoires</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Service Client</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Livraison</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Retours</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guide des tailles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Recevez nos dernières nouveautés</p>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Votre email" 
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="ml-2 bg-amber-600 hover:bg-amber-700">
                  S'inscrire
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Helsothario Fashion. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
