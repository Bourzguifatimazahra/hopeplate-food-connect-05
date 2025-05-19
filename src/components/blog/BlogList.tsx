
import BlogCard from "./BlogCard";
import { BlogPost } from "@/types/blog";

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.length > 0 ? (
        posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))
      ) : (
        <div className="col-span-full text-center py-20">
          <p className="text-xl text-gray-500">Aucun article ne correspond à votre recherche.</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;
