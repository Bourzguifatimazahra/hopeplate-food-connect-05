
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Search, MapPin, Clock, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const MOCK_OFFERS = [
  {
    id: 1,
    name: "Box Surprise Végétarienne",
    restaurant: "Le Jardin Bio",
    originalPrice: 18.50,
    discountedPrice: 7.90,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    pickupTime: "18:00 - 19:30",
    distance: 0.8,
    rating: 4.7,
    category: "Végétarien",
  },
  {
    id: 2,
    name: "Assortiment de Pâtisseries",
    restaurant: "La Belle Boulangerie",
    originalPrice: 24.00,
    discountedPrice: 9.50,
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    pickupTime: "17:30 - 18:30",
    distance: 1.2,
    rating: 4.9,
    category: "Pâtisserie",
  },
  {
    id: 3,
    name: "Menu Sushi Duo",
    restaurant: "Sushi Express",
    originalPrice: 32.00,
    discountedPrice: 15.90,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    pickupTime: "21:00 - 22:00",
    distance: 2.5,
    rating: 4.5,
    category: "Japonais",
  },
  {
    id: 4,
    name: "Pizza Margherita",
    restaurant: "Pizzeria Roma",
    originalPrice: 14.50,
    discountedPrice: 6.90,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80",
    pickupTime: "20:30 - 22:00",
    distance: 1.8,
    rating: 4.3,
    category: "Italien",
  },
  {
    id: 5,
    name: "Sandwich Club & Boisson",
    restaurant: "Fresh Corner",
    originalPrice: 12.00,
    discountedPrice: 5.50,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    pickupTime: "16:00 - 17:30",
    distance: 0.5,
    rating: 4.2,
    category: "Sandwich",
  },
  {
    id: 6,
    name: "Plat du Jour",
    restaurant: "Bistro Français",
    originalPrice: 21.50,
    discountedPrice: 10.90,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    pickupTime: "19:00 - 20:30",
    distance: 1.5,
    rating: 4.6,
    category: "Français",
  },
  {
    id: 7,
    name: "Bowl Poke Saumon",
    restaurant: "Poke House",
    originalPrice: 16.90,
    discountedPrice: 8.50,
    image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    pickupTime: "19:30 - 20:30",
    distance: 2.1,
    rating: 4.4,
    category: "Hawaïen",
  },
  {
    id: 8,
    name: "Curry Thaï Végétalien",
    restaurant: "Thai Fusion",
    originalPrice: 17.50,
    discountedPrice: 8.90,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    pickupTime: "20:00 - 21:30",
    distance: 3.0,
    rating: 4.8,
    category: "Thaïlandais",
  },
];

const categories = ["Tout", "Végétarien", "Pâtisserie", "Japonais", "Italien", "Sandwich", "Français", "Hawaïen", "Thaïlandais"];
const sortOptions = ["Recommandés", "Prix croissant", "Prix décroissant", "Distance", "Note"];

const Offers = () => {
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tout");
  const [selectedSort, setSelectedSort] = useState("Recommandés");
  const [maxPrice, setMaxPrice] = useState(20);
  const [maxDistance, setMaxDistance] = useState(5);

  const filteredOffers = MOCK_OFFERS.filter(offer => 
    (offer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     offer.restaurant.toLowerCase().includes(searchQuery.toLowerCase())) && 
    (selectedCategory === "Tout" || offer.category === selectedCategory) &&
    (offer.discountedPrice <= maxPrice) &&
    (offer.distance <= maxDistance)
  );

  let sortedOffers = [...filteredOffers];
  switch (selectedSort) {
    case "Prix croissant":
      sortedOffers.sort((a, b) => a.discountedPrice - b.discountedPrice);
      break;
    case "Prix décroissant":
      sortedOffers.sort((a, b) => b.discountedPrice - a.discountedPrice);
      break;
    case "Distance":
      sortedOffers.sort((a, b) => a.distance - b.distance);
      break;
    case "Note":
      sortedOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // Recommandés - peut être un algorithme plus complexe dans une vraie application
      break;
  }

  const FiltersContent = () => (
    <>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Catégories</h3>
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

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Prix maximum: {maxPrice}€</h3>
        <Slider 
          defaultValue={[maxPrice]} 
          max={30} 
          step={1} 
          onValueChange={(value) => setMaxPrice(value[0])} 
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Distance maximum: {maxDistance} km</h3>
        <Slider 
          defaultValue={[maxDistance]} 
          max={10} 
          step={0.5} 
          onValueChange={(value) => setMaxDistance(value[0])}
        />
      </div>
    </>
  );

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Offres disponibles</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les plats à prix réduits disponibles près de chez vous et contribuez à la lutte contre le gaspillage alimentaire.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              placeholder="Rechercher un plat ou un restaurant..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Select value={selectedSort} onValueChange={setSelectedSort}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {isMobile ? (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" /> Filtres
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filtres</SheetTitle>
                    <SheetDescription>
                      Affinez votre recherche pour trouver les offres qui vous correspondent.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-6">
                    <FiltersContent />
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <div className="hidden md:block w-64 ml-4">
                <FiltersContent />
              </div>
            )}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex">
          {/* Sidebar Filters (Desktop only) */}
          <div className="hidden md:block w-64 mr-8">
            <div className="sticky top-20">
              <h2 className="text-xl font-bold mb-6">Filtres</h2>
              <FiltersContent />
            </div>
          </div>
          
          {/* Offers Grid */}
          <div className="flex-1">
            {sortedOffers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedOffers.map(offer => (
                  <Card key={offer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={offer.image} 
                        alt={offer.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105" 
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-lime text-black">
                          -{Math.round((offer.originalPrice - offer.discountedPrice) / offer.originalPrice * 100)}%
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold mb-1 line-clamp-1">{offer.name}</h3>
                      <p className="text-gray-600 mb-3">{offer.restaurant}</p>
                      
                      <div className="flex items-center gap-2 mb-2 text-sm">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{offer.pickupTime}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4 text-sm">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>à {offer.distance} km</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold">{offer.discountedPrice.toFixed(2)}€</span>
                          <span className="text-gray-500 line-through ml-2">{offer.originalPrice.toFixed(2)}€</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          <span className="ml-1 text-sm">{offer.rating}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-5 py-3 border-t">
                      <Button className="w-full bg-lime hover:bg-lime-hover text-black">
                        Réserver
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500">Aucune offre ne correspond à vos critères.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("Tout");
                    setMaxPrice(20);
                    setMaxDistance(5);
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
            
            {/* Pagination */}
            {sortedOffers.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex gap-2">
                  <Button variant="outline" disabled>Précédent</Button>
                  <Button className="bg-lime hover:bg-lime-hover text-black">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Suivant</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
