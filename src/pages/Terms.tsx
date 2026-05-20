import { Card } from "@/components/ui/card";
import { FileText, AlertCircle, CreditCard, Truck, RefreshCw, Ban } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime/10 mb-4">
            <FileText className="h-8 w-8 text-lime" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Conditions d'Utilisation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8">
            <p className="text-gray-600 leading-relaxed">
              Bienvenue sur HopEplate. En accédant à notre plateforme et en utilisant nos services, 
              vous acceptez d'être lié par les présentes Conditions d'Utilisation. Veuillez les lire 
              attentivement avant d'utiliser notre service.
            </p>
          </Card>
        </div>

        {/* Terms Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section 1 */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime/10">
                <AlertCircle className="h-5 w-5 text-lime" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">1. Acceptation des conditions</h2>
                <p className="text-gray-600">
                  En créant un compte ou en utilisant HopEplate, vous acceptez ces conditions 
                  d'utilisation ainsi que notre politique de confidentialité. Si vous n'acceptez 
                  pas ces conditions, veuillez ne pas utiliser notre service.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 2 */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime/10">
                <Truck className="h-5 w-5 text-lime" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">2. Utilisation du service</h2>
                <p className="text-gray-600 mb-3">
                  HopEplate permet aux restaurants de publier des offres de repas et aux utilisateurs 
                  de réserver ces repas. Vous vous engagez à :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Fournir des informations exactes lors de la création de votre compte</li>
                  <li>Ne pas utiliser le service à des fins illégales</li>
                  <li>Respecter les horaires de retrait indiqués</li>
                  <li>Ne pas annuler fréquemment les réservations</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Section 3 */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime/10">
                <CreditCard className="h-5 w-5 text-lime" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">3. Paiement et remboursement</h2>
                <p className="text-gray-600 mb-3">
                  Les paiements sont effectués via notre plateforme. Les conditions sont :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Les paiements sont sécurisés et chiffrés</li>
                  <li>Les remboursements sont possibles uniquement en cas d'annulation par le restaurant</li>
                  <li>Les annulations par l'utilisateur sont possibles jusqu'à 1 heure avant le retrait</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Section 4 */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime/10">
                <RefreshCw className="h-5 w-5 text-lime" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">4. Modification des offres</h2>
                <p className="text-gray-600">
                  Les restaurants peuvent modifier ou annuler leurs offres à tout moment. 
                  Dans ce cas, vous recevrez un remboursement complet. HopEplate se réserve 
                  le droit de supprimer les offres qui ne respectent pas nos conditions.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 5 */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime/10">
                <Ban className="h-5 w-5 text-lime" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">5. Comportement interdit</h2>
                <p className="text-gray-600 mb-3">
                  Vous n'êtes pas autorisé à :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Utiliser le service de manière à nuire ou à perturber HopEplate</li>
                  <li>Contrefaire ou tenter d'obtenir un accès non autorisé</li>
                  <li>Collecter des informations sur d'autres utilisateurs</li>
                  <li>Utiliser le service à des fins commerciales non autorisées</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Section 6 */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-3">6. Limitation de responsabilité</h2>
            <p className="text-gray-600">
              HopEplate est un intermédiaire entre les restaurants et les utilisateurs. 
              Nous ne sommes pas responsables de la qualité des repas, des allergies alimentaires 
              ou de tout dommage résultant de la consommation des repas. Les restaurants sont 
              seuls responsables de la préparation et de la sécurité de leurs aliments.
            </p>
          </Card>

          {/* Section 7 */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-3">7. Modifications des conditions</h2>
            <p className="text-gray-600">
              Nous pouvons modifier ces conditions d'utilisation à tout moment. Nous vous 
              notifierons des changements importants par email ou par notification sur la plateforme. 
              L'utilisation continue de HopEplate après ces modifications constitue une acceptation 
              des nouvelles conditions.
            </p>
          </Card>

          {/* Section 8 */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-3">8. Contact</h2>
            <p className="text-gray-600">
              Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous 
              contacter à : <span className="text-lime">terms@hopeplate.com</span>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;