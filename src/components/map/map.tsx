import { useEffect, useRef } from 'react';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap/useMap';
import { useAppSelector } from '../../hooks/useSelector/useAppSelector';

type MapProps = {
  selectedOffer: string | null;
  styleModifier: 'offer' | 'cities';
};

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

export default function Map({
  selectedOffer,
  styleModifier = 'cities',
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const city = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) =>
    styleModifier === 'cities'
      ? state.offersByCity
      : state.nearOffers.slice(0, 3)
  );
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map && offers) {
      offers.forEach((offer) => {
        leaflet
          .marker([offer.location.latitude, offer.location.longitude], {
            icon: offer.id === selectedOffer ? activeIcon : defaultIcon,
          })
          .addTo(map);
      });
    }
  }, [map, city, offers, selectedOffer]);

  return (
    <section
      className={`${styleModifier}__map map`}
      ref={mapRef}
      style={{ height: styleModifier === 'cities' ? '100%' : '579px' }}
    />
  );
}
