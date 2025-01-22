import { NameSpace } from '../../const';
import { Cities, City, Offers, State } from '../../types';

export const getCurrentCity = (state: State): City =>
  state[NameSpace.Cards].currentCity;

export const getCitiesData = (state: State): Cities =>
  state[NameSpace.Cards].cities;

export const getIsOffersLoading = (state: State): boolean =>
  state[NameSpace.Cards].isOffersLoading;

export const getOfferByCity = (state: State): Offers =>
  state[NameSpace.Cards].offersByCity;

export const getCurrentSort = (state: State): string =>
  state[NameSpace.Cards].sort;

export const getActiveCardOffer = (state: State): string | null =>
  state[NameSpace.Cards].activeCardOffer;

export const getOfferByCityQuantity = (state: State): number =>
  state[NameSpace.Cards].offersByCityQuantity;

export const getIsOffersLoadingError = (state: State): boolean =>
  state[NameSpace.Cards].isOffersLoadingError;
