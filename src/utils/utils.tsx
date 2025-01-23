import { MouseEvent } from 'react';
import { store } from '../store/store';
import { CardType, CITIES_NAMES } from '../const';
import { changeCity } from '../store/card-process/card-process';
import { Offers } from '../types';
import PlacesCard from '../components/places-card/places-card';

export const handleCityChange: (
  evt: MouseEvent<HTMLAnchorElement>,
  currentCityName: string
) => void = (evt, currentCityName) => {
  const targetCityName = (evt.currentTarget.textContent as string).trim();
  const nextCity = CITIES_NAMES.find((city) => city === targetCityName);
  if (nextCity && currentCityName !== nextCity) {
    store.dispatch(changeCity(nextCity));
  }
};

export const getRandomKey = (): string =>
  (Date.now() * Math.random()).toFixed(10);

export const getOffersCards: (
  offers: Offers,
  cardType: CardType
) => JSX.Element[] = (offers, cardType) =>
  offers.map((offerItem) => (
    <PlacesCard cardType={cardType} key={offerItem.id} {...offerItem} />
  ));
