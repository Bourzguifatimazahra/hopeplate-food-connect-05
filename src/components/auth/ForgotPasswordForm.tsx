
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Password reset request for:", email);
      toast.success("Instructions de réinitialisation envoyées.");
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Email envoyé</CardTitle>
          <CardDescription>
            Si un compte existe avec cette adresse email, vous recevrez les instructions de réinitialisation de mot de passe dans quelques minutes.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col gap-4 pt-4">
          <Link to="/signin" className="w-full">
            <Button variant="outline" className="w-full">Retour à la connexion</Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Mot de passe oublié</CardTitle>
        <CardDescription>
          Entrez votre adresse email pour recevoir les instructions de réinitialisation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="exemple@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-lime hover:bg-lime-hover text-black" 
            disabled={isLoading}
          >
            {isLoading ? "Envoi en cours..." : "Envoyer les instructions"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 border-t pt-4">
        <div className="text-center">
          <span className="text-sm text-muted-foreground">
            Vous vous souvenez de votre mot de passe?{" "}
            <Link to="/signin" className="text-lime hover:underline">
              Se connecter
            </Link>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};


export default ForgotPasswordForm;
