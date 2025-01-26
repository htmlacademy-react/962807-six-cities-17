import { useEffect, useMemo, useRef } from 'react';

import leaflet, { layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { MapIcon, MapSizeType, NEAR_OFFER_COUNT } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import useMap from '../../hooks/useMap';
import {
  getActiveCardOffer,
  getCurrentCity,
  getOffersByCity,
} from '../../store/card-process/card-selectors';
import { getNearOffersData } from '../../store/offer-process/offer-selectors';
import { FullOfferData } from '../../types';

type MapProps = {
  currentOffer?: FullOfferData;
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

export default function Map({ currentOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const styleModifier = currentOffer ? 'offer' : 'cities';
  const city = useAppSelector(getCurrentCity);
  const selectedOfferId = useAppSelector(getActiveCardOffer);
  const nearOffers = useAppSelector(getNearOffersData).slice(
    0,
    NEAR_OFFER_COUNT
  );
  const currentOffers = useAppSelector(getOffersByCity);

  const offersTemplate = currentOffer ? nearOffers : currentOffers;
  const enableZoom = !currentOffer;
  const offers = useMemo(() => offersTemplate, [offersTemplate]);

  const map = useMap(mapRef, city, enableZoom);

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
      if (currentOffer) {
        leaflet
          .marker(
            [currentOffer.location.latitude, currentOffer.location.longitude],
            { icon: activeIcon }
          )
          .addTo(markerLayer);
      }
      offers.forEach((offer) => {
        leaflet
          .marker([offer.location.latitude, offer.location.longitude], {
            icon:
              offer.id === selectedOfferId && !currentOffer
                ? activeIcon
                : defaultIcon,
          })
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [currentOffer, map, offers, selectedOfferId]);

  return (
    <section
      className={`${styleModifier}__map map`}
      ref={mapRef}
      style={{
        height: currentOffer ? MapSizeType.OfferPage : MapSizeType.MainPage,
      }}
    />
  );
}
