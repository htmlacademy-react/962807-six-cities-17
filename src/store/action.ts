import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../const';
import { FullOfferData, Offers, Reviews } from '../types';

export const changeCity = createAction<string>('changeCity');
export const changeSort = createAction<string>('changeSort');
export const loadOffers = createAction<Offers>('loadOffers');
export const loadNearOffers = createAction<Offers>('loadNearOffers');
export const loadFullOfferData =
  createAction<FullOfferData>('loadFullOfferData');
export const loadReviews = createAction<Reviews>('loadReviews');
export const requireAuth = createAction<AuthStatus>('requireAuth');
export const setOffersLoadingStatus = createAction<boolean>(
  'setOffersLoadingStatus'
);
