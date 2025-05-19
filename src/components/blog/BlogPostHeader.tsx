
import { Badge } from "@/components/ui/badge";
import VoiceReader from '@/components/VoiceReader';
import ShareArticle from '@/components/ShareArticle';
import { BlogPost } from "@/types/blog";

interface BlogPostHeaderProps {
  post: BlogPost;
  content?: string;
}

const BlogPostHeader = ({ post, content }: BlogPostHeaderProps) => {
  // Prepare text for voice reader by combining title, excerpt and content
  const readerText = post.title + '. ' + post.excerpt + 
    (content ? '. ' + content.replace(/<[^>]*>/g, ' ') : '');

  return (
    <>
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
        <VoiceReader text={readerText} />
        <ShareArticle 
          title={post.title} 
          url={window.location.href} 
        />
      </div>
    </>
  );
};

export default BlogPostHeader;
