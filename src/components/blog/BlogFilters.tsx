
import { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Map as MapIcon } from "lucide-react";

interface BlogFiltersProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  showMap: boolean;
  setShowMap: Dispatch<SetStateAction<boolean>>;
  categories: string[];
}

const BlogFilters = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  showMap,
  setShowMap,
  categories
}: BlogFiltersProps) => {
  return (
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
  );
};

export default BlogFilters;
