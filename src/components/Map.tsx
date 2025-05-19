
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';

interface MapProps {
  className?: string;
  pointsOfInterest?: Array<{
    id: number;
    name: string;
    description: string;
    location: [number, number]; // [longitude, latitude]
  }>;
}

const Map = ({ className, pointsOfInterest = [] }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");

  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Initialiser la carte uniquement si le token est disponible
    if (mapboxToken && mapboxToken.trim() !== "") {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [2.3522, 48.8566], // Paris par défaut
        zoom: 12
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

      // Ajouter des marqueurs pour chaque point d'intérêt
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

      // Si nous avons des points d'intérêt, ajuster la vue pour les englober
      if (pointsOfInterest.length > 0) {
        const bounds = new mapboxgl.LngLatBounds();
        pointsOfInterest.forEach(point => {
          bounds.extend(point.location);
        });
        map.current.fitBounds(bounds, { padding: 70, maxZoom: 15 });
      }
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [pointsOfInterest, mapboxToken]);

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
        <div 
          ref={mapContainer} 
          className="h-[400px] w-full"
        />
      )}
    </Card>
  );
};

export default Map;
