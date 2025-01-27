import leaflet, { Map } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { City } from '../types';
import { MapBaseSettings } from '../const';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City,
  enableZoom: boolean
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
        scrollWheelZoom: enableZoom,
      });

      leaflet
        .tileLayer(MapBaseSettings.TitleLayer, {
          attribution: MapBaseSettings.Copyright,
        })
        .addTo(instance);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city, enableZoom]);

  useEffect(() => {
    if (map) {
      map.setView(
        {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        city.location.zoom
      );
    }
  }, [map, city]);

  return map;
}
