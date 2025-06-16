
import { ShoppingBag, Search, User, Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Contact = () => {
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
              <Link to="/nouveautes" className="text-gray-700 hover:text-amber-600 transition-colors">Nouveautés</Link>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Notre équipe est là pour vous aider. N'hésitez pas à nous contacter 
            pour toute question ou assistance.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Adresse</h3>
              <p className="text-gray-600">
                123 Rue de la Mode<br />
                75001 Paris, France
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600">
                +33 1 23 45 67 89<br />
                Service client
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                contact@helsothario.com<br />
                support@helsothario.com
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Horaires</h3>
              <p className="text-gray-600">
                Lun - Ven: 9h - 18h<br />
                Sam: 10h - 17h
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <Input 
                      id="firstName"
                      type="text" 
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <Input 
                      id="lastName"
                      type="text" 
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select 
                    id="subject"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-amber-500 focus:ring-amber-500"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="commande">Question sur une commande</option>
                    <option value="produit">Information produit</option>
                    <option value="livraison">Livraison</option>
                    <option value="retour">Retour/Échange</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message"
                    rows={6}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-amber-500 focus:ring-amber-500"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md"
                >
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions Fréquentes</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Comment puis-je suivre ma commande ?</h3>
                  <p className="text-gray-600">
                    Une fois votre commande expédiée, vous recevrez un email avec un numéro de suivi 
                    pour suivre votre colis en temps réel.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Quelle est votre politique de retour ?</h3>
                  <p className="text-gray-600">
                    Vous avez 30 jours pour retourner tout article non porté avec ses étiquettes. 
                    Les frais de retour sont gratuits.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Livrez-vous à l'international ?</h3>
                  <p className="text-gray-600">
                    Oui, nous livrons dans toute l'Europe. Les frais de livraison varient selon 
                    la destination.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Comment puis-je connaître ma taille ?</h3>
                  <p className="text-gray-600">
                    Consultez notre guide des tailles disponible sur chaque page produit ou 
                    contactez notre service client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
