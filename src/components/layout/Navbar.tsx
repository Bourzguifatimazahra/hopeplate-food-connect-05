import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/main" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/328fef81-1031-4394-ba30-a2eef2f006f6.png" 
            alt="HopEplate Logo"
            className="h-10 w-10"
          />
          <span className="font-bold text-xl">HopEplate</span>
        </Link>

        {isMobile ? (
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/main" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Accueil
                </Link>
                <Link to="/offers" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Offres
                </Link>
                <Link to="/how-it-works" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Comment ça marche
                </Link>
                <Link to="/blog" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
                <Link to="/contact" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      navigate("/signin");
                      setIsMenuOpen(false);
                    }}
                  >
                    Connexion
                  </Button>
                  <Button 
                    className="bg-lime hover:bg-lime-hover text-black"
                    onClick={() => {
                      navigate("/signup"); 
                      setIsMenuOpen(false);
                    }}
                  >
                    Inscription
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-10">
            <nav className="flex items-center gap-6">
              <Link to="/main" className="text-sm font-medium transition-colors hover:text-lime">
                Accueil
              </Link>
              <Link to="/offers" className="text-sm font-medium transition-colors hover:text-lime">
                Offres
              </Link>
              <Link to="/how-it-works" className="text-sm font-medium transition-colors hover:text-lime">
                Comment ça marche
              </Link>
              <Link to="/blog" className="text-sm font-medium transition-colors hover:text-lime">
                Blog
              </Link>
              <Link to="/contact" className="text-sm font-medium transition-colors hover:text-lime">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" onClick={() => navigate("/signin")}>
                Connexion
              </Button>
              <Button 
                className="bg-lime hover:bg-lime-hover text-black" 
                onClick={() => navigate("/signup")}
              >
                Inscription
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
