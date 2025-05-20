
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Calendar, Clock, DollarSign, Tag, Users } from "lucide-react";

const mockOffers = [
  {
    id: 1,
    title: "Menu complet italien",
    originalPrice: 249,
    discountedPrice: 125,
    available: 8,
    expires: "Aujourd'hui à 20:00",
    status: "active",
  },
  {
    id: 2,
    title: "Plateau dégustation",
    originalPrice: 399,
    discountedPrice: 199,
    available: 4,
    expires: "Demain à 14:00",
    status: "active",
  },
  {
    id: 3,
    title: "Menu du jour",
    originalPrice: 159,
    discountedPrice: 79,
    available: 0,
    expires: "Hier à 20:00",
    status: "expired",
  },
];

const mockOrders = [
  {
    id: 1,
    customerName: "Hiba",
    item: "Menu complet ",
    price: 125,
    date: "2023-06-15",
    time: "18:30",
    status: "confirmed",
  },
  {
    id: 2,
    customerName: "Youssef",
    item: "Menu complet italien",
    price: 25,
    date: "2023-06-15",
    time: "19:00",
    status: "pending",
  },
  {
    id: 3,
    customerName: "Sophie Bernard",
    item: "Plateau dégustation",
    price: 99,
    date: "2023-06-16",
    time: "12:30",
    status: "confirmed",
  },
];

const stats = [
  {
    title: "Ventes Totales",
    value: "4,650 DH",
    icon: DollarSign,
    change: "+12%",
    trend: "positive",
  },
  {
    title: "Réductions en moyenne",
    value: "50%",
    icon: Tag,
    change: "",
    trend: "neutral",
  },
  {
    title: "Impact Alimentaire",
    value: "82 kg",
    icon: Users,
    change: "+18%",
    trend: "positive",
    description: "Nourriture sauvée",
  },
];

const RestaurantDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Tableau de Bord Restaurant</h1>
        <p className="text-muted-foreground">Gérez vos offres et suivez votre impact</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    {stat.change && (
                      <span className={`text-sm ${stat.trend === 'positive' ? 'text-green-500' : stat.trend === 'negative' ? 'text-red-500' : ''}`}>
                        {stat.change}
                      </span>
                    )}
                  </div>
                  {stat.description && <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>}
                </div>
                <div className="p-2 bg-lime/10 rounded-lg">
                  <stat.icon className="h-6 w-6 text-lime" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="offers" className="w-full">
        <TabsList className="w-full max-w-md grid grid-cols-3">
          <TabsTrigger value="offers">Offres</TabsTrigger>
          <TabsTrigger value="orders">Commandes</TabsTrigger>
          <TabsTrigger value="analytics">Analytiques</TabsTrigger>
        </TabsList>
        
        <TabsContent value="offers" className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Gestion des Offres</h2>
            <Button className="bg-lime hover:bg-lime-hover text-black">
              Nouvelle Offre
            </Button>
          </div>
          
          <div className="space-y-4">
            {mockOffers.map((offer) => (
              <Card key={offer.id} className={offer.status === 'expired' ? 'opacity-60' : ''}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{offer.title}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center text-sm">
                          <Tag className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="line-through text-muted-foreground">{offer.originalPrice} DH</span>
                          <span className="ml-1 font-medium">{offer.discountedPrice} DH</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{offer.expires}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>
                          {offer.status === 'active' ? 
                            `${offer.available} portions disponibles` : 
                            "Expiré"}
                        </span>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                        {offer.status === 'active' ? (
                          <Button variant="destructive" size="sm">
                            Désactiver
                          </Button>
                        ) : (
                          <Button className="bg-lime hover:bg-lime-hover text-black" size="sm">
                            Republier
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="orders" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Commandes en cours</h2>
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{order.customerName}</h3>
                      <p className="text-sm text-muted-foreground">{order.item}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{order.date}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{order.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{order.price} DH</p>
                      <span className={`inline-block px-2 py-1 mt-1 text-xs rounded ${
                        order.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                      </span>
                      {order.status === 'pending' && (
                        <div className="flex gap-2 mt-2 justify-end">
                          <Button variant="destructive" size="sm">Rejeter</Button>
                          <Button className="bg-lime hover:bg-lime-hover text-black" size="sm">Confirmer</Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Analytiques</h2>
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Ventes Hebdomadaires</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border-b mb-4 pb-4 border-dashed">
                <BarChart className="h-16 w-16 text-muted-foreground" />
                <p className="ml-4 text-muted-foreground">Graphique des ventes hebdomadaires</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total des ventes</p>
                  <p className="text-2xl font-bold">12,500 DH</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Nombre de commandes</p>
                  <p className="text-2xl font-bold">48</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Impact Environnemental</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Nourriture sauvée</p>
                  <p className="text-2xl font-bold">82 kg</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">CO₂ évité</p>
                  <p className="text-2xl font-bold">164 kg</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Eau économisée</p>
                  <p className="text-2xl font-bold">3,280 L</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RestaurantDashboard;
