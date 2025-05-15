
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Cta = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-lime">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Prêt à rejoindre le mouvement contre le gaspillage alimentaire ?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Que vous soyez un restaurant, un consommateur ou une association, 
            HopEplate vous aide à faire une différence concrète tout en économisant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-black hover:bg-black/80 text-white font-medium px-8 py-6 text-lg"
              onClick={() => navigate("/signup")}
            >
              Créer un compte
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-black text-black hover:bg-black/10 font-medium px-8 py-6 text-lg"
              onClick={() => navigate("/restaurants")}
            >
              Voir les restaurants
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
