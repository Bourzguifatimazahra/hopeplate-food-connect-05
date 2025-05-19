
import Map from "@/components/Map";
import { PointOfInterest } from "@/types/blog";

interface BlogPostMapProps {
  pointsOfInterest: PointOfInterest[];
}

const BlogPostMap = ({ pointsOfInterest }: BlogPostMapProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Points d'intérêt</h2>
      <Map 
        className="h-[400px] w-full" 
        pointsOfInterest={pointsOfInterest} 
      />
    </div>
  );
};

export default BlogPostMap;
