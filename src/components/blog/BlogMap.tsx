
import { useState } from "react";
import Map from "@/components/Map";
import { PointOfInterest } from "@/types/blog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BlogMapProps {
  pointsOfInterest: PointOfInterest[];
}

const BlogMap = ({ pointsOfInterest }: BlogMapProps) => {
  const [sortedPoints, setSortedPoints] = useState<PointOfInterest[]>(pointsOfInterest);
  const [sortType, setSortType] = useState<string>("default");

  const handleLocationSort = (sorted: PointOfInterest[]) => {
    setSortedPoints(sorted);
    setSortType("distance");
  };

  // Reset to original order
  const resetSort = () => {
    setSortedPoints(pointsOfInterest);
    setSortType("default");
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium">Carte des points d'intérêt</h3>
        <Select
          value={sortType}
          onValueChange={(value) => {
            if (value === "default") {
              resetSort();
            }
            // "distance" sorting happens via the Map component
            setSortType(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Par défaut</SelectItem>
            <SelectItem value="distance">Par distance (utilisez le bouton de localisation)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Map 
        className="h-[400px] w-full rounded-lg overflow-hidden" 
        pointsOfInterest={sortedPoints} 
        onSortByDistance={handleLocationSort}
      />
      
      {sortType === "distance" ? (
        <p className="mt-2 text-sm text-gray-500 text-center">
          Points d'intérêt triés par proximité à votre position
        </p>
      ) : (
        <p className="mt-2 text-sm text-gray-500 text-center">
          Découvrez les points d'intérêt mentionnés dans nos articles
        </p>
      )}
    </div>
  );
};

export default BlogMap;
