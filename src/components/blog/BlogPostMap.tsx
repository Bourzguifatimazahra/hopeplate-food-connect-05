
import { useState } from "react";
import Map from "@/components/Map";
import { PointOfInterest } from "@/types/blog";

interface BlogPostMapProps {
  pointsOfInterest: PointOfInterest[];
}

const BlogPostMap = ({ pointsOfInterest }: BlogPostMapProps) => {
  const [sortedPoints, setSortedPoints] = useState<PointOfInterest[]>(pointsOfInterest);
  const [userLocated, setUserLocated] = useState(false);

  const handleLocationSort = (sorted: PointOfInterest[]) => {
    setSortedPoints(sorted);
    setUserLocated(true);
  };

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Points d'intérêt</h2>
      </div>
      
      <Map 
        className="h-[400px] w-full" 
        pointsOfInterest={sortedPoints} 
        onSortByDistance={handleLocationSort} 
      />
      
      {userLocated && (
        <p className="mt-2 text-sm text-gray-500">
          Les points sont triés du plus proche au plus éloigné de votre position.
        </p>
      )}
    </div>
  );
};

export default BlogPostMap;
