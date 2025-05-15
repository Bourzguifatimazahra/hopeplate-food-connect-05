
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-black text-white">
      <div className="absolute inset-0 bg-black/80 z-10"></div>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
          filter: "blur(2px)",
        }}
      ></div>
      <div className="container relative z-20 mx-auto px-4 py-32 md:py-40 lg:py-48 flex flex-col items-center text-center">
        <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="block">Savourez les repas,</span>
          <span className="block mt-2">
            Pas le <span className="text-lime">gaspillage</span>
          </span>
        </h1>
        <p className="animate-slide-up text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          HopEplate met en relation les restaurants ayant des surplus alimentaires 
          avec des consommateurs recherchant des repas à prix réduits et des associations caritatives.
        </p>
        <div className="animate-slide-up flex flex-col sm:flex-row gap-4">
          <Button
            className="bg-lime hover:bg-lime-hover text-black font-medium px-6 py-6 text-lg"
            onClick={() => navigate("/signup")}
          >
            Commencer maintenant
          </Button>
          <Button
            variant="outline"
            className="border-white/30 hover:border-white text-white px-6 py-6 text-lg"
            onClick={() => navigate("/how-it-works")}
          >
            Comment ça marche
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
