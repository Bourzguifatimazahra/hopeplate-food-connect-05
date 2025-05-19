
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/types/blog";

interface RelatedPostsProps {
  posts: BlogPost[];
  currentPostId: number;
}

const RelatedPosts = ({ posts, currentPostId }: RelatedPostsProps) => {
  const relatedPosts = posts.filter(p => p.id !== currentPostId).slice(0, 3);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Articles recommandés</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map(relatedPost => (
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
  );
};

export default RelatedPosts;
