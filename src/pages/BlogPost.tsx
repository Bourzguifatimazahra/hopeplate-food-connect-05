
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostMap from '@/components/blog/BlogPostMap';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { BlogPost as BlogPostType } from '@/types/blog';
import { blogPosts } from '@/data/blogData';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    if (id) {
      const postId = parseInt(id, 10);
      const foundPost = blogPosts.find(p => p.id === postId);
      
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
        <BlogPostHeader post={post} content={post.content} />

        {/* Contenu de l'article */}
        {post.content && <BlogPostContent content={post.content} />}

        {/* Points d'intérêt sur la carte */}
        {post.pointsOfInterest && <BlogPostMap pointsOfInterest={post.pointsOfInterest} />}
        
        {/* Articles recommandés */}
        <RelatedPosts posts={blogPosts} currentPostId={post.id} />
      </div>
    </div>
  );
};

export default BlogPost;
