
const CategoryShowcase = () => {
  const categories = [
    {
      id: 1,
      title: "Collection Femme",
      subtitle: "Élégance & Raffinement",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Découvrir"
    },
    {
      id: 2,
      title: "Collection Homme",
      subtitle: "Style & Modernité",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Explorer"
    },
    {
      id: 3,
      title: "Accessoires",
      subtitle: "Finalisez votre look",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Compléter"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorez nos différentes collections et trouvez les pièces qui correspondent 
            parfaitement à votre style et à votre personnalité.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-200 mb-4">{category.subtitle}</p>
                  
                  <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-amber-50 transition-colors">
                    {category.buttonText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Offre Spéciale - Livraison Gratuite
          </h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Profitez de la livraison gratuite sur toutes vos commandes de plus de 50€. 
            Valable jusqu'à la fin du mois !
          </p>
          <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors">
            En profiter maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
