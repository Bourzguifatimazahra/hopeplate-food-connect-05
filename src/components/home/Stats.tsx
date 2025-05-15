
const stats = [
  {
    number: "30%",
    label: "de la nourriture produite est gaspillée",
  },
  {
    number: "1.3B",
    label: "tonnes de nourriture jetées chaque année",
  },
  {
    number: "3.3B",
    label: "tonnes de CO₂ émises par le gaspillage alimentaire",
  },
  {
    number: "870M",
    label: "personnes souffrent de la faim dans le monde",
  },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#18181b] to-[#27272a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi agir <span className="text-lime">maintenant</span> ?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Le gaspillage alimentaire est un problème mondial qui exige une action immédiate.
            Voici pourquoi chaque geste compte.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-black/30 border border-white/10"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-lime">
                {stat.number}
              </div>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
