
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { BarChart2, Calendar, Clock, MapPin, Image, Star, MessageSquare } from "lucide-react";

const RestaurantDashboard = () => {
  const [showAddOfferDialog, setShowAddOfferDialog] = useState(false);
  const [showRestaurantDetailsDialog, setShowRestaurantDetailsDialog] = useState(false);

  const handleAddOffer = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Nouvelle offre publiée avec succès!");
    setShowAddOfferDialog(false);
  };

  // Example restaurant data
  const restaurantData = {
    name: "Pasta Bella",
    address: "123 Rue de la Gastronomie, 75001 Paris",
    phone: "+33 1 23 45 67 89",
    email: "contact@pastabella.com",
    description: "Restaurant italien authentique proposant des plats faits maison avec des produits frais et de saison.",
    openingHours: {
      monday: "11:30 - 14:30, 18:30 - 22:30",
      tuesday: "11:30 - 14:30, 18:30 - 22:30",
      wednesday: "11:30 - 14:30, 18:30 - 22:30",
      thursday: "11:30 - 14:30, 18:30 - 22:30",
      friday: "11:30 - 14:30, 18:30 - 23:00",
      saturday: "18:00 - 23:30",
      sunday: "Fermé"
    },
    rating: 4.7,
    reviewCount: 128,
    cuisineType: "Italien",
    priceRange: "€€",
    averagePickupTime: "10-15 min"
  };

  // Environmental impact statistics
  const impactStats = {
    foodSaved: 48.3, // kg
    co2Saved: 145.2, // kg
    waterSaved: 9560, // liters
    mealsSaved: 187
  };

  // Financial statistics
  const financialStats = {
    currentMonth: 426.50,
    previousMonth: 382.75,
    totalRevenue: 3784.25,
    averageOrderValue: 10.85
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">{restaurantData.name}</h1>
          <p className="text-muted-foreground">Tableau de bord restaurant</p>
          <div className="flex items-center mt-1 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{restaurantData.address}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Dialog open={showRestaurantDetailsDialog} onOpenChange={setShowRestaurantDetailsDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                Détails du restaurant
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Informations du restaurant</DialogTitle>
                <DialogDescription>
                  Gérez les informations de votre restaurant
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="restaurant-name">Nom du restaurant</Label>
                    <Input id="restaurant-name" value={restaurantData.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cuisine-type">Type de cuisine</Label>
                    <Input id="cuisine-type" value={restaurantData.cuisineType} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="restaurant-address">Adresse</Label>
                  <Input id="restaurant-address" value={restaurantData.address} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="restaurant-phone">Téléphone</Label>
                    <Input id="restaurant-phone" value={restaurantData.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="restaurant-email">Email</Label>
                    <Input id="restaurant-email" value={restaurantData.email} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="restaurant-description">Description</Label>
                  <Textarea id="restaurant-description" rows={3} value={restaurantData.description} />
                </div>
                <div className="space-y-2">
                  <Label>Horaires d'ouverture</Label>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Lundi:</span>
                        <span>{restaurantData.openingHours.monday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Mardi:</span>
                        <span>{restaurantData.openingHours.tuesday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Mercredi:</span>
                        <span>{restaurantData.openingHours.wednesday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Jeudi:</span>
                        <span>{restaurantData.openingHours.thursday}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Vendredi:</span>
                        <span>{restaurantData.openingHours.friday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Samedi:</span>
                        <span>{restaurantData.openingHours.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Dimanche:</span>
                        <span>{restaurantData.openingHours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowRestaurantDetailsDialog(false)}>
                  Annuler
                </Button>
                <Button 
                  className="bg-lime hover:bg-lime-hover text-black" 
                  onClick={() => {
                    toast.success("Informations mises à jour avec succès!");
                    setShowRestaurantDetailsDialog(false);
                  }}
                >
                  Enregistrer
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Dialog open={showAddOfferDialog} onOpenChange={setShowAddOfferDialog}>
            <DialogTrigger asChild>
              <Button className="bg-lime hover:bg-lime-hover text-black">
                Ajouter une offre
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Nouvelle offre</DialogTitle>
                <DialogDescription>
                  Créez une nouvelle offre pour réduire votre gaspillage alimentaire
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddOffer} className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre de l'offre</Label>
                  <Input id="title" placeholder="ex: Menu complet italien" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Décrivez votre offre en détail" 
                    rows={3} 
                    required 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="originalPrice">Prix original (€)</Label>
                    <Input id="originalPrice" type="number" step="0.01" min="0" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="discountedPrice">Prix réduit (€)</Label>
                    <Input id="discountedPrice" type="number" step="0.01" min="0" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Nombre disponible</Label>
                  <Input id="quantity" type="number" min="1" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="availableFrom">Disponible de</Label>
                    <Input id="availableFrom" type="time" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availableTo">Disponible jusqu'à</Label>
                    <Input id="availableTo" type="time" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="menu">Menu complet</SelectItem>
                      <SelectItem value="main">Plat principal</SelectItem>
                      <SelectItem value="dessert">Dessert</SelectItem>
                      <SelectItem value="starter">Entrée</SelectItem>
                      <SelectItem value="bakery">Boulangerie</SelectItem>
                      <SelectItem value="groceries">Épicerie</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="allergens">Allergènes</Label>
                  <Textarea 
                    id="allergens" 
                    placeholder="Listez les allergènes présents dans votre offre" 
                    rows={2} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Photo de l'offre</Label>
                  <Input id="image" type="file" accept="image/*" />
                </div>
                <DialogFooter className="pt-4">
                  <Button variant="outline" onClick={() => setShowAddOfferDialog(false)} type="button">
                    Annuler
                  </Button>
                  <Button 
                    className="bg-lime hover:bg-lime-hover text-black" 
                    type="submit"
                  >
                    Publier l'offre
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Offres actives</CardDescription>
            <CardTitle className="text-2xl">3</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xs text-muted-foreground">
              5 offres cette semaine
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Réservations aujourd'hui</CardDescription>
            <CardTitle className="text-2xl">12</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xs text-muted-foreground">
              +4 par rapport à hier
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Revenus (ce mois)</CardDescription>
            <CardTitle className="text-2xl">{financialStats.currentMonth.toFixed(2)} €</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xs text-muted-foreground">
              +{(((financialStats.currentMonth - financialStats.previousMonth) / financialStats.previousMonth) * 100).toFixed(1)}% par rapport au mois dernier
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Nourriture sauvée (kg)</CardDescription>
            <CardTitle className="text-2xl">{impactStats.foodSaved.toFixed(1)} kg</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xs text-muted-foreground">
              {impactStats.mealsSaved} repas sauvés au total
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Impact environnemental */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Impact environnemental</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="text-lime text-2xl font-bold mb-2">{impactStats.co2Saved.toFixed(1)} kg</div>
                <div className="text-sm text-center">CO₂ économisé</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="text-lime text-2xl font-bold mb-2">{impactStats.waterSaved.toLocaleString()} L</div>
                <div className="text-sm text-center">Eau économisée</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="text-lime text-2xl font-bold mb-2">{impactStats.mealsSaved}</div>
                <div className="text-sm text-center">Repas sauvés</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="w-full max-w-md grid grid-cols-3">
          <TabsTrigger value="active">Offres actives</TabsTrigger>
          <TabsTrigger value="orders">Réservations</TabsTrigger>
          <TabsTrigger value="history">Historique</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="mt-6">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-semibold">Menu complet italien</h3>
                      <div className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                        Actif
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      Un menu complet avec entrée, plat et dessert italien fait maison.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <div>
                        <span className="text-sm text-muted-foreground">Prix original</span>
                        <p className="font-medium">24,90 €</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Prix réduit</span>
                        <p className="font-medium text-lime">12,45 €</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Disponible</span>
                        <p className="font-medium">3 / 5</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Horaires</span>
                        <p className="font-medium">19:00 - 21:30</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-sm text-muted-foreground">Allergènes</span>
                      <p className="text-sm">Gluten, lactose, fruits à coque</p>
                    </div>
                    <div className="mt-3 flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span className="font-medium">4.8</span>
                      <span className="text-sm text-muted-foreground">(12 avis)</span>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col gap-2 justify-end">
                    <Button variant="outline" size="sm">
                      Modifier
                    </Button>
                    <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
                      Désactiver
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-semibold">Panier surprise pâtisserie</h3>
                      <div className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                        Actif
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      Assortiment de viennoiseries et pâtisseries du jour.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <div>
                        <span className="text-sm text-muted-foreground">Prix original</span>
                        <p className="font-medium">18,50 €</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Prix réduit</span>
                        <p className="font-medium text-lime">9,25 €</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Disponible</span>
                        <p className="font-medium">2 / 8</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Horaires</span>
                        <p className="font-medium">17:00 - 19:00</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-sm text-muted-foreground">Allergènes</span>
                      <p className="text-sm">Gluten, œuf, lactose</p>
                    </div>
                    <div className="mt-3 flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span className="font-medium">4.6</span>
                      <span className="text-sm text-muted-foreground">(8 avis)</span>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col gap-2 justify-end">
                    <Button variant="outline" size="sm">
                      Modifier
                    </Button>
                    <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
                      Désactiver
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="orders" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Client</th>
                      <th className="text-left p-4">Offre</th>
                      <th className="text-left p-4">Date</th>
                      <th className="text-left p-4">Prix</th>
                      <th className="text-left p-4">Statut</th>
                      <th className="text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">
                        <div>Martin Dupont</div>
                        <div className="text-xs text-muted-foreground">Tel: 06 12 34 56 78</div>
                      </td>
                      <td className="p-4">
                        <div>Menu complet italien</div>
                        <div className="text-xs text-muted-foreground">Quantité: 2</div>
                      </td>
                      <td className="p-4">
                        <div>Aujourd'hui, 19:30</div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Dans 3h</span>
                        </div>
                      </td>
                      <td className="p-4">24,90 €</td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                          En attente
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Confirmer
                          </Button>
                          <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
                            Refuser
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">
                        <div>Sophie Martin</div>
                        <div className="text-xs text-muted-foreground">Tel: 06 98 76 54 32</div>
                      </td>
                      <td className="p-4">
                        <div>Panier surprise pâtisserie</div>
                        <div className="text-xs text-muted-foreground">Quantité: 1</div>
                      </td>
                      <td className="p-4">
                        <div>Aujourd'hui, 18:15</div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Dans 1h45</span>
                        </div>
                      </td>
                      <td className="p-4">9,25 €</td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                          Confirmé
                        </span>
                      </td>
                      <td className="p-4">
                        <Button variant="outline" size="sm">
                          Détails
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">
                        <div>Jean Lefebvre</div>
                        <div className="text-xs text-muted-foreground">Tel: 06 45 67 89 01</div>
                      </td>
                      <td className="p-4">
                        <div>Menu complet italien</div>
                        <div className="text-xs text-muted-foreground">Quantité: 3</div>
                      </td>
                      <td className="p-4">
                        <div>Aujourd'hui, 20:00</div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Dans 3h30</span>
                        </div>
                      </td>
                      <td className="p-4">37,35 €</td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          Prêt
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Détails
                          </Button>
                          <Button variant="outline" size="sm" className="border-green-200 text-green-600 hover:bg-green-50">
                            Remis
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Historique des offres</CardTitle>
              <CardDescription>Visualisez toutes vos offres passées et leur performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Menu découverte végétarien</h3>
                    <p className="text-sm text-muted-foreground">13-15 juin 2023</p>
                    <div className="mt-2 flex items-center text-sm">
                      <Star className="h-4 w-4 text-amber-500 mr-1" />
                      <span>4.6 (6 avis)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p><span className="font-medium">8/10</span> vendus</p>
                    <p className="text-sm text-lime">104,00 € de revenus</p>
                    <p className="text-xs text-muted-foreground">3,2 kg de nourriture sauvée</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Box antipasti à partager</h3>
                    <p className="text-sm text-muted-foreground">10-12 juin 2023</p>
                    <div className="mt-2 flex items-center text-sm">
                      <Star className="h-4 w-4 text-amber-500 mr-1" />
                      <span>4.8 (5 avis)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p><span className="font-medium">6/6</span> vendus</p>
                    <p className="text-sm text-lime">57,00 € de revenus</p>
                    <p className="text-xs text-muted-foreground">2,5 kg de nourriture sauvée</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Assortiment de desserts</h3>
                    <p className="text-sm text-muted-foreground">5-6 juin 2023</p>
                    <div className="mt-2 flex items-center text-sm">
                      <Star className="h-4 w-4 text-amber-500 mr-1" />
                      <span>4.9 (12 avis)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p><span className="font-medium">12/15</span> vendus</p>
                    <p className="text-sm text-lime">96,00 € de revenus</p>
                    <p className="text-xs text-muted-foreground">3,8 kg de nourriture sauvée</p>
                  </div>
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
