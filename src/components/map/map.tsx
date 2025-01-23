import { useEffect, useMemo, useRef } from 'react';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  getActiveCardOffer,
  getCurrentCity,
  getOffersByCity,
} from '../../store/card-process/card-selectors';
import { getNearOffersData } from '../../store/offer-process/offer-selectors';

type MapProps = {
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
