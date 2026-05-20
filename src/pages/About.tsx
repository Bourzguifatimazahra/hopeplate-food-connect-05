import { Card } from "@/components/ui/card";
import { Heart, Users, Globe, Award, Target, Leaf } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime/10 mb-4">
            <Heart className="h-8 w-8 text-lime" />
          </div>
          <h1 className="text-4xl font-bold mb-4">À propos de HopEplate</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre mission et notre engagement envers la lutte contre le gaspillage alimentaire.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                HopEplate est né d'une conviction simple : réduire le gaspillage alimentaire tout en rendant les repas accessibles à tous. 
                Notre plateforme connecte les restaurants ayant des surplus de nourriture avec des consommateurs recherchant des repas de qualité à prix réduit.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Chaque jour, des tonnes de nourriture sont jetées alors que des millions de personnes souffrent de la faim. 
                Nous voulons changer cela en créant un écosystème durable et solidaire.
              </p>
            </div>
            <div className="relative">
              <img
                src="/hopeplatelogo.png"
                alt="HopEplate Mission"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime/10 mb-4">
                <Leaf className="h-6 w-6 text-lime" />
              </div>
              <h3 className="text-xl font-bold mb-2">Durabilité</h3>
              <p className="text-gray-600">
                Nous nous engageons à réduire l'impact environnemental du gaspillage alimentaire.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime/10 mb-4">
                <Users className="h-6 w-6 text-lime" />
              </div>
              <h3 className="text-xl font-bold mb-2">Solidarité</h3>
              <p className="text-gray-600">
                Nous croyons en l'importance de partager les ressources avec ceux qui en ont besoin.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime/10 mb-4">
                <Award className="h-6 w-6 text-lime" />
              </div>
              <h3 className="text-xl font-bold mb-2">Qualité</h3>
              <p className="text-gray-600">
                Nous garantissons des repas de qualité préparés par des professionnels.
              </p>
            </Card>
          </div>
        </div>

        {/* Impact Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-lime/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Notre Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-lime mb-2">500+</div>
                <p className="text-gray-600">Repas sauvés</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-lime mb-2">150+</div>
                <p className="text-gray-600">Restaurants partenaires</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-lime mb-2">2000+</div>
                <p className="text-gray-600">Utilisateurs heureux</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Romain Leveque</h3>
              <p className="text-lime mb-2">Co-fondateur & CEO</p>
              <p className="text-gray-600">
                Passionné par l'environnement et la technologie, Romain a cofondé HopEplate pour 
                allier innovation et impact social positif.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Mohamed Amine</h3>
              <p className="text-lime mb-2">Co-fondateur & CTO</p>
              <p className="text-gray-600">
                Expert en développement durable, Mohamed veille à ce que chaque ligne de code 
                serve notre mission environnementale.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;