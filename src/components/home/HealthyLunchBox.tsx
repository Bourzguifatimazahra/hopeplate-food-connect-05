const HealthyLunchBox = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un déjeuner <span className="text-lime">sain</span> et équilibré
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Découvrez nos lunch boxes healthy, préparées avec des ingrédients frais et de saison. 
              Des repas équilibrés qui allient saveur et bien-être, parfaits pour une pause déjeuner nutritive.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-lime">✓</span>
                <span>Ingrédients frais et locaux</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lime">✓</span>
                <span>Repas équilibrés et nutritifs</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lime">✓</span>
                <span>Prix réduits grâce au anti-gaspi</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="/Box déjeuner healthy.png"
              alt="Box déjeuner healthy"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthyLunchBox;
