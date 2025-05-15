
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

const RestaurantDashboard = () => {
  const [showAddOfferDialog, setShowAddOfferDialog] = useState(false);

  const handleAddOffer = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Nouvelle offre publiée avec succès!");
    setShowAddOfferDialog(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Pasta Bella</h1>
          <p className="text-muted-foreground">Tableau de bord restaurant</p>
        </div>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Offres actives</CardDescription>
            <CardTitle className="text-2xl">3</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Réservations aujourd'hui</CardDescription>
            <CardTitle className="text-2xl">12</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Revenus (ce mois)</CardDescription>
            <CardTitle className="text-2xl">426,50 €</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Nourriture sauvée (kg)</CardDescription>
            <CardTitle className="text-2xl">48,3 kg</CardTitle>
          </CardHeader>
        </Card>
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
                      <td className="p-4">Martin Dupont</td>
                      <td className="p-4">Menu complet italien</td>
                      <td className="p-4">Aujourd'hui, 19:30</td>
                      <td className="p-4">12,45 €</td>
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
                      <td className="p-4">Sophie Martin</td>
                      <td className="p-4">Panier surprise pâtisserie</td>
                      <td className="p-4">Aujourd'hui, 18:15</td>
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
                  </div>
                  <div className="text-right">
                    <p><span className="font-medium">8/10</span> vendus</p>
                    <p className="text-sm text-lime">104,00 € de revenus</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Box antipasti à partager</h3>
                    <p className="text-sm text-muted-foreground">10-12 juin 2023</p>
                  </div>
                  <div className="text-right">
                    <p><span className="font-medium">6/6</span> vendus</p>
                    <p className="text-sm text-lime">57,00 € de revenus</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Assortiment de desserts</h3>
                    <p className="text-sm text-muted-foreground">5-6 juin 2023</p>
                  </div>
                  <div className="text-right">
                    <p><span className="font-medium">12/15</span> vendus</p>
                    <p className="text-sm text-lime">96,00 € de revenus</p>
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
