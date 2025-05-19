
import { Button } from "@/components/ui/button";

interface BlogPaginationProps {
  visible: boolean;
}

const BlogPagination = ({ visible }: BlogPaginationProps) => {
  if (!visible) return null;
  
  return (
    <div className="flex justify-center mt-12">
      <div className="flex gap-2">
        <Button variant="outline" disabled>Précédent</Button>
        <Button className="bg-lime hover:bg-lime-hover text-black">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Suivant</Button>
      </div>
    </div>
  );
};

export default BlogPagination;
