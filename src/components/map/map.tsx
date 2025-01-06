import { useEffect, useRef } from 'react';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap/useMap';
import { Offers } from '../../mocks/offers';

type MapProps = {
  offers: Offers;
  selectedOffer: number | null;
  styleModifier: 'offer' | 'cities';
};

export default function Map({
  offers,
  selectedOffer,
  styleModifier = 'cities',
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    const defaultIcon = leaflet.icon({
      iconUrl: './img/pin.svg',
      iconSize: [28, 40],
      iconAnchor: [14, 40],
    });
    const activeIcon = leaflet.icon({
      iconUrl: './img/pin-active.svg',
      iconSize: [28, 40],
      iconAnchor: [14, 40],
    });
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.lat,
              lng: offer.location.lng,
            },
            {
              icon: offer.id === selectedOffer ? activeIcon : defaultIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      className={`${styleModifier}__map map`}
      ref={mapRef}
      style={{ height: styleModifier === 'cities' ? '100%' : '579px' }}
    />
  );
}
