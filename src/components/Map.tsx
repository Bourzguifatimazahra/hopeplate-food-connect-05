
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navigation } from 'lucide-react';

interface MapProps {
  className?: string;
  pointsOfInterest?: Array<{
    id: number;
    name: string;
    description: string;
    location: [number, number]; // [longitude, latitude]
  }>;
  onSortByDistance?: (sortedPoints: typeof pointsOfInterest) => void;
}

const Map = ({ className, pointsOfInterest = [], onSortByDistance }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState("");

  // Request user's location
  const requestUserLocation = () => {
    setIsLocating(true);
    setLocationError("");
    
    if (!navigator.geolocation) {
      setLocationError("La géolocalisation n'est pas prise en charge par votre navigateur");
      setIsLocating(false);
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLng = position.coords.longitude;
        const userLat = position.coords.latitude;
        setUserLocation([userLng, userLat]);
        setIsLocating(false);
        
        if (map.current) {
          // Add user marker
          new mapboxgl.Marker({ color: "#FF0000" })
            .setLngLat([userLng, userLat])
            .setPopup(new mapboxgl.Popup().setHTML("<h3>Votre position</h3>"))
            .addTo(map.current);
          
          // Center map on user's location
          map.current.flyTo({ center: [userLng, userLat], zoom: 13 });
        }
        
        // Sort points of interest by distance if callback provided
        if (onSortByDistance && pointsOfInterest.length > 0) {
          const sortedPoints = [...pointsOfInterest].sort((a, b) => {
            return calculateDistance(userLat, userLng, a.location[1], a.location[0]) - 
                   calculateDistance(userLat, userLng, b.location[1], b.location[0]);
          });
          onSortByDistance(sortedPoints);
        }
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Vous avez refusé la demande de géolocalisation");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Les informations de localisation ne sont pas disponibles");
            break;
          case error.TIMEOUT:
            setLocationError("La demande de localisation a expiré");
            break;
          default:
            setLocationError("Une erreur inconnue s'est produite");
        }
        setIsLocating(false);
      },
      { enableHighAccuracy: true }
    );
  };

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Initialize map if token is available
    if (mapboxToken && mapboxToken.trim() !== "") {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [2.3522, 48.8566], // Paris by default
        zoom: 12
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

      // Add markers for each point of interest
      pointsOfInterest.forEach(point => {
        const marker = new mapboxgl.Marker({ color: "#C2E233" })
          .setLngLat(point.location)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<h3>${point.name}</h3><p>${point.description}</p>`
            )
          )
          .addTo(map.current!);
      });

      // If user location is already available, add user marker
      if (userLocation) {
        new mapboxgl.Marker({ color: "#FF0000" })
          .setLngLat(userLocation)
          .setPopup(new mapboxgl.Popup().setHTML("<h3>Votre position</h3>"))
          .addTo(map.current);
      }

      // If we have points of interest, adjust the view to include them
      if (pointsOfInterest.length > 0) {
        const bounds = new mapboxgl.LngLatBounds();
        
        // Add user location to bounds if available
        if (userLocation) {
          bounds.extend(userLocation);
        }
        
        // Add all points to bounds
        pointsOfInterest.forEach(point => {
          bounds.extend(point.location);
        });
        
        // Only fit bounds if we have coordinates
        if (bounds.getNorthEast().lat !== bounds.getSouthWest().lat || 
            bounds.getNorthEast().lng !== bounds.getSouthWest().lng) {
          map.current.fitBounds(bounds, { padding: 70, maxZoom: 15 });
        }
      }
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [pointsOfInterest, mapboxToken, userLocation]);

  return (
    <Card className={`relative overflow-hidden ${className}`}>
      {!mapboxToken || mapboxToken.trim() === "" ? (
        <div className="p-4">
          <p className="mb-2">Entrez votre token Mapbox pour afficher la carte:</p>
          <input
            type="text" 
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Mapbox Access Token" 
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="mt-2 text-xs text-gray-500">
            Obtenez un token sur <a href="https://www.mapbox.com" target="_blank" rel="noreferrer" className="text-lime underline">mapbox.com</a>
          </p>
        </div>
      ) : (
        <div className="relative">
          <div 
            ref={mapContainer} 
            className="h-[400px] w-full"
          />
          <div className="absolute top-2 right-2 z-10">
            <Button 
              onClick={requestUserLocation}
              disabled={isLocating}
              size="sm"
              variant="secondary"
              className="flex items-center gap-1 bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <Navigation className="h-4 w-4" />
              {isLocating ? "Localisation..." : "Ma position"}
            </Button>
          </div>
          {locationError && (
            <div className="absolute top-12 right-2 left-2 z-10 bg-white/90 backdrop-blur-sm text-red-600 p-2 rounded text-sm">
              {locationError}
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default Map;
