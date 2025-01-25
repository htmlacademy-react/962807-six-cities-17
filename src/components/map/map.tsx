import { useEffect, useMemo, useRef } from 'react';

import leaflet, { layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  getActiveCardOffer,
  getCurrentCity,
  getOffersByCity,
} from '../../store/card-process/card-selectors';
import { getNearOffersData } from '../../store/offer-process/offer-selectors';
import { MapIcon } from '../../const';

type MapProps = {
  styleModifier: 'offer' | 'cities';
};

const defaultIcon = leaflet.icon({
  iconUrl: MapIcon.Default,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});
const activeIcon = leaflet.icon({
  iconUrl: MapIcon.Active,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

export default function Map({
  styleModifier = 'cities',
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const city = useAppSelector(getCurrentCity);
  const selectedOffer = useAppSelector(getActiveCardOffer);
  const nearOffers = useAppSelector(getNearOffersData).slice(0, 3);
  const currentOffers = useAppSelector(getOffersByCity);

  const offersTemplate =
    styleModifier === 'cities' ? currentOffers : nearOffers;
  const offers = useMemo(() => offersTemplate, [offersTemplate]);
  const isZoomDisabled = styleModifier === 'cities';

  const map = useMap(mapRef, city, isZoomDisabled);

  useEffect(() => {
    if (map) {
      map.setView(
        { lat: city.location.latitude, lng: city.location.longitude },
        city.location.zoom
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (map && offers) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        leaflet
          .marker([offer.location.latitude, offer.location.longitude], {
            icon: offer.id === selectedOffer ? activeIcon : defaultIcon,
          })
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
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
