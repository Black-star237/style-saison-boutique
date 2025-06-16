
import { ShoppingBag, Search, User, Heart, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Nouveautes = () => {
  const products = [
    {
      id: 1,
      name: "Robe Élégante Automne",
      price: "129€",
      originalPrice: "159€",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      isNew: true,
      discount: "-19%"
    },
    {
      id: 2,
      name: "Blazer Moderne",
      price: "89€",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      isNew: true
    },
    {
      id: 3,
      name: "Jean Skinny Premium",
      price: "79€",
      originalPrice: "99€",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      isNew: true,
      discount: "-20%"
    },
    {
      id: 4,
      name: "Chemise Casual Chic",
      price: "69€",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      isNew: true
    },
    {
      id: 5,
      name: "Manteau d'Hiver",
      price: "199€",
      image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      isNew: true
    },
    {
      id: 6,
      name: "Pull en Laine",
      price: "95€",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Helsothario
              <span className="block text-sm font-normal text-amber-600">Fashion</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-amber-600 transition-colors">Home</Link>
              <Link to="/nouveautes" className="text-amber-600 font-medium hover:text-amber-700 transition-colors">Nouveautés</Link>
              <Link to="/femmes" className="text-gray-700 hover:text-amber-600 transition-colors">Femmes</Link>
              <Link to="/hommes" className="text-gray-700 hover:text-amber-600 transition-colors">Hommes</Link>
              <Link to="/accessoires" className="text-gray-700 hover:text-amber-600 transition-colors">Accessoires</Link>
            </nav>

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

      {/* Page Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nouveautés
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos dernières arrivées et les tendances du moment. 
            Des pièces exclusives pour renouveler votre garde-robe.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtres
            </Button>
            <select className="border border-gray-300 rounded-md px-3 py-2">
              <option>Trier par</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Nouveauté</option>
            </select>
          </div>
          <p className="text-gray-600">{products.length} produits</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}
                    </span>
                  )}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                      Voir détails
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white border-white hover:bg-gray-100">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-amber-600">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full">
            Charger plus de produits
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Nouveautes;
