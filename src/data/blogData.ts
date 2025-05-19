
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
    location: "Casablanca"
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
    location: "Rabat"
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

export const categories = ["Tous", "Conseils", "Témoignages", "Environnement", "Économie", "Recettes", "Technologie"];
