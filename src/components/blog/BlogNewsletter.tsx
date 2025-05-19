
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BlogNewsletter = () => {
  return (
    <div className="mt-20 bg-black text-white p-10 rounded-xl">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Restez informé</h2>
        <p className="mb-6">Abonnez-vous à notre newsletter pour recevoir les derniers articles et actualités sur le combat contre le gaspillage alimentaire.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input 
            placeholder="Votre adresse email" 
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Button className="bg-lime hover:bg-lime-hover text-black whitespace-nowrap">
            S'abonner
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogNewsletter;
