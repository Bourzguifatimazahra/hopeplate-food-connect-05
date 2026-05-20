import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Share2, Mail } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime/10 mb-4">
            <Shield className="h-8 w-8 text-lime" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8">
            <p className="text-gray-600 leading-relaxed">
              Chez HopEplate, nous prenons la protection de vos données personnelles au sérieux. 
              Cette politique de confidentialité explique comment nous collectons, utilisons et 
              protégeons vos informations personnelles lorsque vous utilisez notre plateforme.
            </p>
          </Card>
        </div>

        {/* Information Collection */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Informations que nous collectons</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime/10">
                  <Database className="h-5 w-5 text-lime" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Informations personnelles</h3>
                  <p className="text-gray-600">
                    Nous collectons les informations que vous nous fournissez directement, 
                    comme votre nom, adresse email, numéro de téléphone, et informations de paiement.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime/10">
                  <Eye className="h-5 w-5 text-lime" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Informations d'utilisation</h3>
                  <p className="text-gray-600">
                    Nous collectons automatiquement des informations sur votre interaction avec 
                    notre plateforme, comme les pages que vous consultez et les actions que vous effectuez.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Comment nous utilisons vos informations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-2">Fournir nos services</h3>
              <p className="text-gray-600 text-sm">
                Pour créer et gérer votre compte, traiter vos réservations et vous connecter aux restaurants.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2">Communication</h3>
              <p className="text-gray-600 text-sm">
                Pour vous envoyer des notifications importantes, des mises à jour et des offres spéciales.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2">Amélioration</h3>
              <p className="text-gray-600 text-sm">
                Pour analyser l'utilisation de notre plateforme et améliorer l'expérience utilisateur.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2">Sécurité</h3>
              <p className="text-gray-600 text-sm">
                Pour protéger notre plateforme et nos utilisateurs contre les activités frauduleuses.
              </p>
            </Card>
          </div>
        </div>

        {/* Data Sharing */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Partage de vos informations</h2>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime/10">
                <Share2 className="h-5 w-5 text-lime" />
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  Nous ne vendons pas vos informations personnelles à des tiers. Nous pouvons partager 
                  vos informations dans les cas suivants :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Avec les restaurants pour faciliter vos réservations</li>
                  <li>Avec nos prestataires de services qui nous aident à opérer notre plateforme</li>
                  <li>Pour respecter la loi ou protéger nos droits et notre sécurité</li>
                  <li>En cas de fusion ou de vente de notre entreprise</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Security */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Sécurité des données</h2>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime/10">
                <Lock className="h-5 w-5 text-lime" />
              </div>
              <div>
                <p className="text-gray-600">
                  Nous utilisons des mesures de sécurité techniques et organisationnelles appropriées 
                  pour protéger vos données personnelles contre l'accès non autorisé, la modification, 
                  la divulgation ou la destruction. Toutes les données sont chiffrées et stockées 
                  sur des serveurs sécurisés.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Nous contacter</h2>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime/10">
                <Mail className="h-5 w-5 text-lime" />
              </div>
              <div>
                <p className="text-gray-600">
                  Si vous avez des questions sur cette politique de confidentialité ou sur la manière 
                  dont nous traitons vos données personnelles, veuillez nous contacter à :
                </p>
                <p className="text-lime font-medium mt-2">privacy@hopeplate.com</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;