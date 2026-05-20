import { Card } from "@/components/ui/card";
import { HelpCircle, Search, MessageCircle, Phone, Mail, Book, Video, Users } from "lucide-react";

const Help = () => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime/10 mb-4">
            <HelpCircle className="h-8 w-8 text-lime" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Centre d'Aide</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trouvez de l'aide et des réponses à vos questions sur HopEplate.
          </p>
        </div>

        {/* Quick Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher de l'aide..."
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">Catégories d'aide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime/10 mb-4">
                <Book className="h-6 w-6 text-lime" />
              </div>
              <h3 className="text-xl font-bold mb-2">Guide d'utilisation</h3>
              <p className="text-gray-600 mb-4">
                Apprenez à utiliser toutes les fonctionnalités de HopEplate.
              </p>
              <a href="/how-it-works" className="text-lime font-medium hover:underline">
                En savoir plus →
              </a>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime/10 mb-4">
                <Video className="h-6 w-6 text-lime" />
              </div>
              <h3 className="text-xl font-bold mb-2">Vidéos tutorielles</h3>
              <p className="text-gray-600 mb-4">
                Regardez nos vidéos pour vous aider à démarrer.
              </p>
              <a href="#" className="text-lime font-medium hover:underline">
                Voir les vidéos →
              </a>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime/10 mb-4">
                <Users className="h-6 w-6 text-lime" />
              </div>
              <h3 className="text-xl font-bold mb-2">Communauté</h3>
              <p className="text-gray-600 mb-4">
                Rejoignez notre communauté d'utilisateurs.
              </p>
              <a href="#" className="text-lime font-medium hover:underline">
                Rejoindre →
              </a>
            </Card>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-bold mb-2">Comment créer un compte ?</h3>
              <p className="text-gray-600">
                Cliquez sur "Inscription" en haut à droite, remplissez le formulaire avec vos 
                informations et validez votre adresse email. L'inscription est gratuite.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2">Comment réserver un repas ?</h3>
              <p className="text-gray-600">
                Parcourez les offres sur la page "Offres", sélectionnez un repas, choisissez 
                une heure de retrait et confirmez votre réservation.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2">Puis-je annuler une réservation ?</h3>
              <p className="text-gray-600">
                Oui, vous pouvez annuler jusqu'à 1 heure avant l'heure de retrait prévue 
                depuis votre tableau de bord.
              </p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <a
              href="/faq"
              className="inline-block bg-lime hover:bg-lime-hover text-black font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Voir toutes les FAQ
            </a>
          </div>
        </div>

        {/* Contact Options */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Contactez-nous</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime/10 mb-4">
                <MessageCircle className="h-6 w-6 text-lime" />
              </div>
              <h3 className="text-lg font-bold mb-2">Chat en direct</h3>
              <p className="text-gray-600 mb-4">
                Discutez avec notre équipe en temps réel.
              </p>
              <button className="text-lime font-medium hover:underline">
                Démarrer le chat
              </button>
            </Card>
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime/10 mb-4">
                <Mail className="h-6 w-6 text-lime" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">support@hopeplate.com</p>
              <p className="text-sm text-gray-500">Réponse sous 24h</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime/10 mb-4">
                <Phone className="h-6 w-6 text-lime" />
              </div>
              <h3 className="text-lg font-bold mb-2">Téléphone</h3>
              <p className="text-gray-600 mb-2">+212 655563404</p>
              <p className="text-sm text-gray-500">Lun-Ven, 9h-18h</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;