
import { Heart, Award, Tag } from "lucide-react";

const features = [
  {
    icon: <Tag className="h-10 w-10 text-lime" />,
    title: "Prix réduits",
    description:
      "Accédez à des repas de qualité à prix réduits tout en luttant contre le gaspillage alimentaire.",
  },
  {
    icon: <Heart className="h-10 w-10 text-lime" />,
    title: "Impact social",
    description:
      "Soutenez les associations caritatives qui redistribuent la nourriture aux personnes dans le besoin.",
  },
  {
    icon: <Award className="h-10 w-10 text-lime" />,
    title: "Qualité garantie",
    description:
      "Des plats préparés par des restaurants de qualité, frais et délicieux.",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi choisir <span className="text-lime">HopEplate</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une solution simple et efficace pour lutter contre le gaspillage alimentaire
            tout en bénéficiant d'avantages économiques et sociaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border hover-lift"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
