import { useEffect, useRef } from 'react';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap/useMap';
import { useAppSelector } from '../../hooks/useSelector/useAppSelector';

type MapProps = {
  selectedOffer: number | null;
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
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const map = useMap(mapRef, city);
  // const markersGroup = leaflet.layerGroup();
  // потом реализовать очистку маркеров при смене города.

  useEffect(() => {
    if (map && offers) {
      // markersGroup.clearLayers();
      // console.log(markersGroup);

      offers.forEach((offer) => {
        leaflet
          .marker([offer.location.lat, offer.location.lng], {
            icon: offer.id === selectedOffer ? activeIcon : defaultIcon,
          })
          // .addTo(markersGroup)
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
