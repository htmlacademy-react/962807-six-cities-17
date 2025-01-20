import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../const';
import { FullOfferData, Offers, Review, Reviews } from '../types';

export const changeCity = createAction<string>('app/changeCity');
export const changeSort = createAction<string>('app/changeSort');
export const loadOffers = createAction<Offers>('offers/loadOffers');
export const loadNearOffers = createAction<Offers>('offers/loadNearOffers');
export const loadFullOfferData = createAction<FullOfferData>(
  'offers/loadFullOfferData'
);
export const loadReviews = createAction<Reviews>('offers/loadReviews');
export const requireAuth = createAction<AuthStatus>('user/requireAuth');
export const setOffersLoadingStatus = createAction<boolean>(
  'user/setOffersLoadingStatus'
);
export const pushReview = createAction<Review>('offers/pushReview');
export const setError = createAction<string | null>('app/setError');
export const setUser = createAction<string>('user/setUser');
