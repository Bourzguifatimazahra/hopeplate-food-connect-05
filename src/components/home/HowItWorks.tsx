
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

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comment ça <span className="text-lime">marche</span> ?
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            HopEplate simplifie la lutte contre le gaspillage alimentaire en trois étapes simples.
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
  );
};

export default HowItWorks;
