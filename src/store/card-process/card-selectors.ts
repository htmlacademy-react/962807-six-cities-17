import { NameSpace } from '../../const';
import { City, Offers, State } from '../../types';

export const getCurrentCity = (state: State): City =>
  state[NameSpace.Cards].currentCity;

export const getCitiesNames = (state: State): string[] =>
  state[NameSpace.Cards].cities;

export const getIsOffersLoading = (state: State): boolean =>
  state[NameSpace.Cards].isOffersLoading;

export const getOfferByCity = (state: State): Offers =>
  state[NameSpace.Cards].offersByCity;

export const getCurrentSort = (state: State): string =>
  state[NameSpace.Cards].sort;
