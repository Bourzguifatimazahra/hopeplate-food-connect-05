
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Map as MapIcon } from "lucide-react";
import Map from "@/components/Map";

const blogPosts = [
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
const pointsOfInterest = [
  {
    id: 1,
    name: "Marché bio de Casablanca",
    description: "Marché hebdomadaire avec produits frais et locaux",
    location: [-7.6115, 33.5883]
  },
  {
    id: 2,
    name: "Restaurant La Sqala",
    description: "Restaurant éco-responsable à Casablanca",
    location: [-7.6167, 33.6056]
  },
  {
    id: 3,
    name: "Coopérative agricole d'Agadir",
    description: "Produits frais directement des producteurs",
    location: [-9.5982, 30.4278]
  },
  {
    id: 4,
    name: "Café Clock",
    description: "Café-restaurant utilisant des ingrédients locaux",
    location: [-5.0012, 34.0346]
  },
  {
    id: 5,
    name: "Jardin Bio Marrakech",
    description: "Jardin communautaire et éducatif",
    location: [-8.0100, 31.6295]
  }
];

const categories = ["Tous", "Conseils", "Témoignages", "Environnement", "Économie", "Recettes", "Technologie"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [showMap, setShowMap] = useState(false);

  const filteredPosts = blogPosts.filter(post => 
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
     post.location.toLowerCase().includes(searchQuery.toLowerCase())) && 
    (selectedCategory === "Tous" || post.category === selectedCategory)
  );

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Notre Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos articles sur la réduction du gaspillage alimentaire, la consommation responsable et les initiatives solidaires.
          </p>
        </div>

        {/* Carte et filtres */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input
                placeholder="Rechercher un article..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              variant={showMap ? "default" : "outline"}
              className={`${showMap ? "bg-lime text-black hover:bg-lime-hover" : ""}`}
              onClick={() => setShowMap(!showMap)}
            >
              {showMap ? <MapIcon className="mr-2 h-4 w-4" /> : <MapPin className="mr-2 h-4 w-4" />}
              {showMap ? "Masquer la carte" : "Afficher la carte"}
            </Button>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Badge 
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer ${selectedCategory === category ? 'bg-lime text-black hover:bg-lime-hover' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Carte interactive */}
          {showMap && (
            <div className="mb-8">
              <Map className="h-[400px] w-full rounded-lg overflow-hidden" pointsOfInterest={pointsOfInterest} />
              <p className="mt-2 text-sm text-gray-500 text-center">
                Découvrez les points d'intérêt mentionnés dans nos articles
              </p>
            </div>
          )}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105" 
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="bg-black text-white">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.readTime} de lecture</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="font-medium">{post.author}</span>
                      <span className="text-gray-500"> · {post.date}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="link" className="text-lime p-0 hover:text-lime-hover">
                        Lire plus
                      </Button>
                    </Link>
                  </div>
                  {post.location && (
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      {post.location}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-gray-500">Aucun article ne correspond à votre recherche.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline" disabled>Précédent</Button>
              <Button className="bg-lime hover:bg-lime-hover text-black">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Suivant</Button>
            </div>
          </div>
        )}

        {/* Newsletter */}
        <div className="mt-20 bg-black text-white p-10 rounded-xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Restez informé</h2>
            <p className="mb-6">Abonnez-vous à notre newsletter pour recevoir les derniers articles et actualités sur le combat contre le gaspillage alimentaire.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Votre adresse email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-lime hover:bg-lime-hover text-black whitespace-nowrap">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
