import { MouseEvent } from 'react';
import { CITIES_NAMES } from '../const';
import { changeCity } from '../store/card-process/card-process';
import { store } from '../store/store';

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

export const getRatingStarStyle = (rating: number) =>
  `${(100 / 5) * Math.round(rating)}%`;
