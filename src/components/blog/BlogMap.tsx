
import Map from "@/components/Map";
import { PointOfInterest } from "@/types/blog";

interface BlogMapProps {
  pointsOfInterest: PointOfInterest[];
}

const BlogMap = ({ pointsOfInterest }: BlogMapProps) => {
  return (
    <div className="mb-8">
      <Map className="h-[400px] w-full rounded-lg overflow-hidden" pointsOfInterest={pointsOfInterest} />
      <p className="mt-2 text-sm text-gray-500 text-center">
        Découvrez les points d'intérêt mentionnés dans nos articles
      </p>
    </div>
  );
};

export default BlogMap;
