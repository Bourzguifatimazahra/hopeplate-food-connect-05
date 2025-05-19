
import { useState } from "react";
import BlogList from "@/components/blog/BlogList";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogMap from "@/components/blog/BlogMap";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import { blogPosts, pointsOfInterest, categories } from "@/data/blogData";

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
          <BlogFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            showMap={showMap}
            setShowMap={setShowMap}
            categories={categories}
          />
          
          {/* Carte interactive */}
          {showMap && <BlogMap pointsOfInterest={pointsOfInterest} />}
        </div>

        {/* Blog Posts Grid */}
        <BlogList posts={filteredPosts} />

        {/* Pagination */}
        <BlogPagination visible={filteredPosts.length > 0} />

        {/* Newsletter */}
        <BlogNewsletter />
      </div>
    </div>
  );
};

export default Blog;
