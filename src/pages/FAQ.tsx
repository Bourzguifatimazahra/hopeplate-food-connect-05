
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { HelpCircle, Search } from "lucide-react";

const faqData = [
  {
    category: "Général",
    questions: [
      {
        q: "Qu'est-ce que HopePlate ?",
        a: "HopePlate est une plateforme qui connecte les restaurants et les particuliers pour réduire le gaspillage alimentaire. Nous permettons aux restaurants de proposer leurs surplus de nourriture à prix réduit, et aux utilisateurs de découvrir des repas de qualité à petit prix.",
      },
      {
        q: "Comment fonctionne HopePlate ?",
        a: "Les restaurants publient leurs surplus de nourriture sur la plateforme. Les utilisateurs peuvent parcourir les offres disponibles, réserver un repas et venir le récupérer au restaurant. C'est simple, rapide et écologique !",
      },
      {
        q: "HopePlate est-il disponible dans ma ville ?",
        a: "HopePlate est actuellement disponible dans plusieurs villes au Maroc. Nous travaillons activement à étendre notre couverture. Inscrivez-vous pour être notifié dès que nous arrivons dans votre région.",
      },
    ],
  },
  {
    category: "Pour les utilisateurs",
    questions: [
      {
        q: "Comment créer un compte ?",
        a: "Cliquez sur le bouton 'Inscription' en haut à droite de la page, remplissez le formulaire avec vos informations et validez votre adresse email. L'inscription est gratuite et prend moins de 2 minutes.",
      },
      {
        q: "Comment réserver un repas ?",
        a: "Parcourez les offres disponibles sur la page 'Offres', sélectionnez le repas qui vous intéresse, choisissez une heure de retrait et confirmez votre réservation. Vous recevrez une confirmation par email.",
      },
      {
        q: "Puis-je annuler une réservation ?",
        a: "Oui, vous pouvez annuler une réservation jusqu'à 1 heure avant l'heure de retrait prévue. Ouvrez la page 'Mes réservations' dans votre tableau de bord et cliquez sur 'Annuler'.",
      },
      {
        q: "Quels modes de paiement sont acceptés ?",
        a: "Nous acceptons les paiements en ligne par carte bancaire et les paiements en espèces au moment du retrait au restaurant.",
      },
    ],
  },
  {
    category: "Pour les restaurants",
    questions: [
      {
        q: "Comment inscrire mon restaurant ?",
        a: "Cliquez sur 'Inscription' et choisissez le profil 'Restaurant'. Remplissez le formulaire avec les informations de votre établissement, ajoutez votre menu et commencez à publier vos offres.",
      },
      {
        q: "Quels sont les frais pour les restaurants ?",
        a: "L'inscription est gratuite. Nous prélevons une petite commission de 10% uniquement sur les ventes réalisées via la plateforme. Aucun frais caché.",
      },
      {
        q: "Comment publier une offre ?",
        a: "Depuis votre tableau de bord restaurant, cliquez sur 'Publier une offre', ajoutez une photo, une description, le prix et la quantité disponible. Votre offre sera visible immédiatement aux utilisateurs.",
      },
    ],
  },
  {
    category: "Sécurité et confidentialité",
    questions: [
      {
        q: "Mes données personnelles sont-elles protégées ?",
        a: "Oui, nous prenons la protection de vos données très au sérieux. Toutes les informations sont chiffrées et nous ne partageons jamais vos données avec des tiers sans votre consentement.",
      },
      {
        q: "Comment contacter le support ?",
        a: "Vous pouvez nous contacter via la page 'Contact', par email à support@hopeplate.com ou par téléphone au +212 655563404 du lundi au vendredi.",
      },
    ],
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaq = faqData.map((section) => ({
    ...section,
    questions: section.questions.filter(
      (item) =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((section) => section.questions.length > 0);

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime/10 mb-4">
            <HelpCircle className="h-8 w-8 text-lime" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Foire Aux Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trouvez rapidement des réponses à vos questions les plus fréquentes.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-3xl mx-auto space-y-8">
          {filteredFaq.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-gray-500">Aucun résultat trouvé pour "{searchQuery}".</p>
            </Card>
          ) : (
            filteredFaq.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold mb-4 text-lime">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {section.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${sectionIndex}-${index}`}
                      className="border border-gray-200 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="p-8 text-center bg-lime/5 border-lime/20">
            <h3 className="text-xl font-bold mb-2">Vous n'avez pas trouvé votre réponse ?</h3>
            <p className="text-gray-600 mb-4">
              Notre équipe est là pour vous aider. N'hésitez pas à nous contacter.
            </p>
            <a
              href="/contact"
              className="inline-block bg-lime hover:bg-lime-hover text-black font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Contactez-nous
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
