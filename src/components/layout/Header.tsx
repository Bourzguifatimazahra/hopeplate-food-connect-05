import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/main" className="flex items-center gap-2">
          <img
            src="/hopeplatelogo.png"
            alt="HopEplate Logo"
            className="h-10 w-10"
          />
          <span className="font-bold text-xl">HopEplate</span>
        </Link>

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
      </div>
    </header>
  );
};

export default Header;
