
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
  );
};

export default BlogCard;
