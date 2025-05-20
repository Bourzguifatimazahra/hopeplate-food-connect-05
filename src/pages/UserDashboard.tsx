
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MapPin, Star } from "lucide-react";

const mockOffers = [
  {
    id: 1,
    title: "Menu complet ",
    restaurant: "Pasta Bella",
    originalPrice: 249,
    discountedPrice: 99,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    distance: "1.2 km",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Panier surprise asiatique",
    restaurant: "Sushi Fusion",
    originalPrice: 199,
    discountedPrice: 89,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    distance: "2.5 km",
    rating: 4.6,
  },
  {
    id: 3,
    title: "Box déjeuner healthy",
    restaurant: "Green Garden",
    originalPrice: 159,
    discountedPrice: 79,
    image: "https://images.unsplash.com/photo-1546069901-d5aab0eef9cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    distance: "0.8 km",
    rating: 4.7,
  },
];

const mockOrders = [
  {
    id: 1,
    title: "Menu complet ",
    restaurant: "Pasta Bella",
    price: 99,
    date: "2023-06-15",
    status: "Terminé",
    rating: 5,
  },
  {
    id: 2,
    title: "Panier surprise asiatique",
    restaurant: "Sushi Fusion",
    price: 89,
    date: "2023-06-10",
    status: "Terminé",
    rating: 4,
  },
];

const mockFavorites = [
  {
    id: 1,
    name: "Pasta Bella",
    cuisine: "Italien",
    distance: "1.2 km",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Green Garden",
    cuisine: "Healthy",
    distance: "0.8 km",
    rating: 4.7,
  },
];

const UserDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Bienvenue, Fatimaezzahra</h1>
        <p className="text-muted-foreground">Trouvez des offres près de vous et réduisez le gaspillage</p>
      </div>

      <Tabs defaultValue="offers" className="w-full">
        <TabsList className="w-full max-w-md grid grid-cols-3">
          <TabsTrigger value="offers">Offres</TabsTrigger>
          <TabsTrigger value="orders">Mes Commandes</TabsTrigger>
          <TabsTrigger value="favorites">Favoris</TabsTrigger>
        </TabsList>
        
        <TabsContent value="offers" className="mt-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Offres près de vous</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockOffers.map((offer) => (
                <Card key={offer.id} className="overflow-hidden hover-lift">
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{offer.title}</CardTitle>
                        <CardDescription>{offer.restaurant}</CardDescription>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-lime">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{offer.distance}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="h-4 w-4 mr-1 text-lime" />
                        <span>{offer.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm line-through text-muted-foreground">
                          {offer.originalPrice} DH
                        </span>
                        <span className="text-xl font-bold ml-2">
                          {offer.discountedPrice} DH
                        </span>
                      </div>
                      <Button 
                        className="bg-lime hover:bg-lime-hover text-black"
                      >
                        Réserver
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="orders" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Mes commandes</h2>
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{order.title}</h3>
                      <p className="text-sm text-muted-foreground">{order.restaurant}</p>
                      <p className="text-sm mt-1">Date: {order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{order.price} DH</p>
                      <span className="inline-block px-2 py-1 mt-1 text-xs rounded bg-green-100 text-green-800">
                        {order.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="mr-2">Note:</div>
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < order.rating ? "text-lime" : "text-gray-300"}`}
                            fill={i < order.rating ? "currentColor" : "none"}
                          />
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="favorites" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Mes restaurants favoris</h2>
          <div className="space-y-4">
            {mockFavorites.map((favorite) => (
              <Card key={favorite.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{favorite.name}</h3>
                      <p className="text-sm text-muted-foreground">{favorite.cuisine}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{favorite.distance}</span>
                      </div>
                      <div className="flex items-center text-sm mt-1">
                        <Star className="h-4 w-4 mr-1 text-lime" />
                        <span>{favorite.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="mr-2">
                      Voir le profil
                    </Button>
                    <Button className="bg-lime hover:bg-lime-hover text-black">
                      Voir les offres
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserDashboard;
