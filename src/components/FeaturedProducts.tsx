
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Blouse Florale Élégante",
      price: "49€",
      originalPrice: "69€",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isNew: true,
      discount: "-30%"
    },
    {
      id: 2,
      name: "Top Blanc Moderne",
      price: "35€",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isNew: false
    },
    {
      id: 3,
      name: "Blazer Bleu Classique",
      price: "89€",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isNew: false
    },
    {
      id: 4,
      name: "Ensemble Coordonné Beige",
      price: "75€",
      originalPrice: "95€",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isNew: true,
      discount: "-20%"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Produits Vedettes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de pièces tendance, choisies avec soin pour vous offrir 
            le meilleur de la mode contemporaine.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded">
                      Nouveau
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                      {product.discount}
                    </span>
                  )}
                </div>

                {/* Hover Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="icon" className="bg-white hover:bg-gray-50 shadow-md">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                {/* Quick Add Button */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Ajouter au panier
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8"
          >
            Voir tous les produits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
