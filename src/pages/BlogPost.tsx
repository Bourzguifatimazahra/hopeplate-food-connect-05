
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import VoiceReader from '@/components/VoiceReader';
import ShareArticle from '@/components/ShareArticle';
import Map from '@/components/Map';

// Types pour les points d'intérêt
interface PointOfInterest {
  id: number;
  name: string;
  description: string;
  location: [number, number]; // [longitude, latitude]
}

// Données simulées des articles de blog complètes
const blogPostsData = [
  {
    id: 1,
    title: "Comment réduire le gaspillage alimentaire à la maison",
    excerpt: "Découvrez des astuces simples pour éviter de jeter de la nourriture et économiser de l'argent.",
    image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "15 mai 2025",
    author: "Sophie Martin",
    category: "Conseils",
    readTime: "5 min",
    content: `
      <h2>Économiser et réduire le gaspillage</h2>
      <p>Le gaspillage alimentaire est un problème majeur dans nos sociétés modernes. Chaque année, des millions de tonnes de nourriture finissent à la poubelle alors qu'elles pourraient être consommées. Voici quelques astuces simples pour réduire votre propre gaspillage alimentaire à la maison.</p>
      
      <h3>Planifiez vos repas</h3>
      <p>La première étape pour réduire le gaspillage est de planifier vos repas à l'avance. Faites une liste de courses en fonction des repas que vous allez préparer durant la semaine et tenez-vous-y lors de vos achats. Cela vous évitera d'acheter des produits dont vous n'avez pas réellement besoin.</p>
      
      <h3>Stockez correctement vos aliments</h3>
      <p>Apprenez à ranger votre réfrigérateur et vos placards de manière optimale. Chaque aliment a sa place idéale pour une conservation maximale. Par exemple, les fruits et légumes se conservent mieux dans les bacs du bas du réfrigérateur, tandis que les produits laitiers peuvent être rangés sur les étagères du milieu.</p>
      
      <h3>Utilisez les restes</h3>
      <p>Transformez vos restes en nouveaux repas créatifs. Un reste de poulet peut devenir un délicieux sandwich le lendemain, ou être ajouté à une salade. Les légumes un peu fanés peuvent être transformés en soupe ou en purée.</p>
    `,
    pointsOfInterest: [
      {
        id: 1,
        name: "Marché bio de Casablanca",
        description: "Marché hebdomadaire avec produits frais et locaux",
        location: [-7.6115, 33.5883]
      },
      {
        id: 2,
        name: "Coopérative agricole d'Agadir",
        description: "Produits frais directement des producteurs",
        location: [-9.5982, 30.4278]
      }
    ]
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
    content: `
      <h2>La restauration responsable</h2>
      <p>De plus en plus de restaurants prennent conscience de l'impact environnemental de leurs activités et mettent en place des solutions innovantes pour réduire leur gaspillage alimentaire. Découvrez ces établissements qui font bouger les lignes.</p>
      
      <h3>Des menus flexibles et saisonniers</h3>
      <p>Les restaurants les plus engagés proposent des menus qui s'adaptent aux produits disponibles et de saison. Cela leur permet de n'acheter que ce dont ils ont besoin et de valoriser l'intégralité des produits qu'ils utilisent.</p>
      
      <h3>La valorisation des déchets organiques</h3>
      <p>Certains restaurants ont mis en place des systèmes de compostage pour leurs déchets organiques, créant ainsi un cercle vertueux où les déchets d'aujourd'hui deviennent les nutriments des cultures de demain.</p>
      
      <h3>Des portions adaptées</h3>
      <p>Pour éviter que les clients ne laissent de la nourriture dans leur assiette, de nombreux restaurants proposent désormais des portions adaptées aux appétits de chacun, voire des demi-portions pour les plus petits mangeurs.</p>
    `,
    pointsOfInterest: [
      {
        id: 3,
        name: "Restaurant La Sqala",
        description: "Restaurant éco-responsable à Casablanca",
        location: [-7.6167, 33.6056]
      },
      {
        id: 4,
        name: "Café Clock",
        description: "Café-restaurant utilisant des ingrédients locaux",
        location: [-5.0012, 34.0346]
      }
    ]
  },
  // ... autres articles avec leur contenu complet
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<(typeof blogPostsData)[0] | null>(null);

  useEffect(() => {
    if (id) {
      const postId = parseInt(id, 10);
      const foundPost = blogPostsData.find(p => p.id === postId);
      
      if (foundPost) {
        setPost(foundPost);
        // Scroll to top when post changes
        window.scrollTo(0, 0);
      }
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Article non trouvé</h1>
            <Link to="/blog">
              <Button className="mt-4">Retour au blog</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Retour au blog */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-lime mb-6">
          <ArrowLeft className="h-4 w-4" />
          Retour au blog
        </Link>

        {/* En-tête de l'article */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-3 bg-black text-white">
            {post.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="font-medium text-black">{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} de lecture</span>
          </div>
        </div>

        {/* Image principale */}
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Options de lecture et partage */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <VoiceReader text={post.title + '. ' + post.excerpt + '. ' + post.content.replace(/<[^>]*>/g, ' ')} />
          <ShareArticle 
            title={post.title} 
            url={window.location.href} 
          />
        </div>

        {/* Contenu de l'article */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Points d'intérêt sur la carte */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Points d'intérêt</h2>
          <Map 
            className="h-[400px] w-full" 
            pointsOfInterest={post.pointsOfInterest} 
          />
        </div>
        
        {/* Articles recommandés */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Articles recommandés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPostsData
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105" 
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="bg-black text-white">
                        {relatedPost.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{relatedPost.readTime} de lecture</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">{relatedPost.author}</span>
                        <span className="text-gray-500"> · {relatedPost.date}</span>
                      </div>
                      <Link to={`/blog/${relatedPost.id}`}>
                        <Button variant="link" className="text-lime p-0 hover:text-lime-hover">
                          Lire plus
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
