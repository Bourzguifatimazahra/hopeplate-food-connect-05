
import { BlogPost, PointOfInterest } from "@/types/blog";

// Blog post data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Comment réduire le gaspillage alimentaire à la maison",
    excerpt: "Découvrez des astuces simples pour éviter de jeter de la nourriture et économiser de l'argent.",
    image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "15 mai 2025",
    author: "Sophie Martin",
    category: "Conseils",
    readTime: "5 min",
    location: "Casablanca",
    content: `
      <h2>Économiser et réduire le gaspillage</h2>
      <p>Le gaspillage alimentaire est un problème majeur dans nos sociétés modernes. Chaque année, des millions de tonnes de nourriture finissent à la poubelle alors qu'elles pourraient être consommées. Voici quelques astuces simples pour réduire votre propre gaspillage alimentaire à la maison.</p>
      
      <h3>Planifiez vos repas</h3>
      <p>La première étape pour réduire le gaspillage est de planifier vos repas à l'avance. Faites une liste de courses en fonction des repas que vous allez préparer durant la semaine et tenez-vous-y lors de vos achats. Cela vous évitera d'acheter des produits dont vous n'avez pas réellement besoin.</p>
      
      <h3>Stockez correctement vos aliments</h3>
      <p>Apprenez à ranger votre réfrigérateur et vos placards de manière optimale. Chaque aliment a sa place idéale pour une conservation maximale. Par exemple, les fruits et légumes se conservent mieux dans les bacs du bas du réfrigérateur, tandis que les produits laitiers peuvent être rangés sur les étagères du milieu.</p>
      
      <h3>Utilisez les restes</h3>
      <p>Transformez vos restes en nouveaux repas créatifs. Un reste de poulet peut devenir un délicieux sandwich le lendemain, ou être ajouté à une salade. Les légumes un peu fanés peuvent être transformés en soupe ou en purée.</p>
    `
  },
  {
    id: 2,
    title: "Les restaurants qui font la différence dans la lutte contre le gaspillage",
    excerpt: "Rencontrez les chefs et restaurateurs engagés qui transforment l'industrie de la restauration.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "2 mai 2025",
    author: "Thomas Dubois",
    category: "Témoignages",
    readTime: "8 min",
    location: "Rabat",
    content: `
      <h2>La restauration responsable</h2>
      <p>De plus en plus de restaurants prennent conscience de l'impact environnemental de leurs activités et mettent en place des solutions innovantes pour réduire leur gaspillage alimentaire. Découvrez ces établissements qui font bouger les lignes.</p>
      
      <h3>Des menus flexibles et saisonniers</h3>
      <p>Les restaurants les plus engagés proposent des menus qui s'adaptent aux produits disponibles et de saison. Cela leur permet de n'acheter que ce dont ils ont besoin et de valoriser l'intégralité des produits qu'ils utilisent.</p>
      
      <h3>La valorisation des déchets organiques</h3>
      <p>Certains restaurants ont mis en place des systèmes de compostage pour leurs déchets organiques, créant ainsi un cercle vertueux où les déchets d'aujourd'hui deviennent les nutriments des cultures de demain.</p>
      
      <h3>Des portions adaptées</h3>
      <p>Pour éviter que les clients ne laissent de la nourriture dans leur assiette, de nombreux restaurants proposent désormais des portions adaptées aux appétits de chacun, voire des demi-portions pour les plus petits mangeurs.</p>
    `
  },
  {
    id: 3,
    title: "Impact environnemental de la surproduction alimentaire",
    excerpt: "Analyse des conséquences écologiques de notre système alimentaire actuel et des solutions possibles.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1613&q=80",
    date: "25 avril 2025",
    author: "Emma Leclerc",
    category: "Environnement",
    readTime: "12 min",
    location: "Marrakech"
  },
  {
    id: 4,
    title: "L'économie circulaire dans l'alimentation",
    excerpt: "Comment repenser notre façon de produire et de consommer pour créer un système plus durable.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "18 avril 2025",
    author: "Lucas Bernard",
    category: "Économie",
    readTime: "10 min",
    location: "Agadir"
  },
  {
    id: 5,
    title: "Recettes anti-gaspi : cuisiner avec les restes",
    excerpt: "Des idées créatives pour transformer vos restes en délicieux repas et réduire vos déchets.",
    image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    date: "10 avril 2025",
    author: "Chloé Petit",
    category: "Recettes",
    readTime: "7 min",
    location: "Fès"
  },
  {
    id: 6,
    title: "Les applications qui révolutionnent notre façon de manger",
    excerpt: "Tour d'horizon des technologies qui nous aident à consommer de façon plus responsable.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    date: "5 avril 2025",
    author: "Antoine Durand",
    category: "Technologie",
    readTime: "6 min",
    location: "Tanger"
  },
];

// Points d'intérêt pour la carte
export const pointsOfInterest: PointOfInterest[] = [
  {
    id: 1,
    name: "Marché bio de Casablanca",
    description: "Marché hebdomadaire avec produits frais et locaux",
    location: [-7.6115, 33.5883] as [number, number]
  },
  {
    id: 2,
    name: "Restaurant La Sqala",
    description: "Restaurant éco-responsable à Casablanca",
    location: [-7.6167, 33.6056] as [number, number]
  },
  {
    id: 3,
    name: "Coopérative agricole d'Agadir",
    description: "Produits frais directement des producteurs",
    location: [-9.5982, 30.4278] as [number, number]
  },
  {
    id: 4,
    name: "Café Clock",
    description: "Café-restaurant utilisant des ingrédients locaux",
    location: [-5.0012, 34.0346] as [number, number]
  },
  {
    id: 5,
    name: "Jardin Bio Marrakech",
    description: "Jardin communautaire et éducatif",
    location: [-8.0100, 31.6295] as [number, number]
  }
];

// Assign points of interest to blog posts
blogPosts.forEach(post => {
  if (post.id === 1) {
    post.pointsOfInterest = [
      pointsOfInterest.find(p => p.id === 1)!,
      pointsOfInterest.find(p => p.id === 3)!
    ];
  } else if (post.id === 2) {
    post.pointsOfInterest = [
      pointsOfInterest.find(p => p.id === 2)!,
      pointsOfInterest.find(p => p.id === 4)!
    ];
  } else if (post.id === 3) {
    post.pointsOfInterest = [
      pointsOfInterest.find(p => p.id === 5)!
    ];
  }
});

export const categories = ["Tous", "Conseils", "Témoignages", "Environnement", "Économie", "Recettes", "Technologie"];
