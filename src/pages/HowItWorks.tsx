
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Recherchez des offres",
    description:
      "Trouvez des restaurants près de chez vous proposant des plats à prix réduits.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
  },
  {
    number: "02",
    title: "Réservez votre repas",
    description:
      "Sélectionnez les plats qui vous intéressent et réservez-les en quelques clics.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    number: "03",
    title: "Récupérez et savourez",
    description:
      "Passez au restaurant à l'heure indiquée, récupérez votre commande et dégustez !",
    image: "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const advantages = [
  {
    title: "Économisez de l'argent",
    description: "Profitez de repas de qualité à prix réduits, jusqu'à 50% moins chers que le prix habituel.",
    icon: "💰",
  },
  {
    title: "Réduisez le gaspillage",
    description: "Contribuez activement à la réduction du gaspillage alimentaire et à la préservation de l'environnement.",
    icon: "🌱",
  },
  {
    title: "Découvrez de nouveaux restaurants",
    description: "Explorez une variété de restaurants et de cuisines dans votre région que vous n'auriez peut-être pas essayés autrement.",
    icon: "🍽️",
  },
  {
    title: "Soutenez les commerces locaux",
    description: "Aidez les restaurants locaux à optimiser leurs ressources et à augmenter leur chiffre d'affaires.",
    icon: "🏪",
  },
];

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comment fonctionne <span className="text-lime">HopEplate</span> ?
            </h1>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Découvrez comment notre plateforme aide à réduire le gaspillage alimentaire tout en proposant des repas à prix réduits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-lime">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
                    <span className="bg-lime text-black text-xl font-bold px-4 py-2 rounded-full">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70 mb-4">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Les <span className="text-lime">avantages</span> d'utiliser HopEplate
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-6 hover:bg-white/15 transition-colors">
                  <div className="text-3xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-white/70">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button
              className="bg-lime hover:bg-lime-hover text-black font-medium px-8 py-6 text-lg"
              onClick={() => navigate("/signup")}
            >
              Rejoindre HopEplate maintenant
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Questions fréquentes</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-xl font-medium mb-2">Comment sont fixés les prix des repas ?</h3>
              <p className="text-gray-600">
                Les restaurants fixent eux-mêmes les prix des repas, généralement entre 30% et 70% du prix original pour attirer les clients tout en couvrant leurs coûts.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-medium mb-2">Puis-je annuler ma réservation ?</h3>
              <p className="text-gray-600">
                Les annulations sont possibles jusqu'à 2 heures avant l'heure de retrait. Après ce délai, le paiement est maintenu pour éviter le gaspillage.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-medium mb-2">Comment sont sélectionnés les restaurants partenaires ?</h3>
              <p className="text-gray-600">
                Nous vérifions que tous nos partenaires respectent les normes d'hygiène et de sécurité alimentaire en vigueur, et qu'ils partagent notre vision de réduction du gaspillage.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-medium mb-2">Et si je ne peux pas récupérer ma commande à l'heure prévue ?</h3>
              <p className="text-gray-600">
                Contactez directement le restaurant pour voir s'il est possible d'adapter l'horaire. Chaque établissement a sa propre politique concernant les retards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
