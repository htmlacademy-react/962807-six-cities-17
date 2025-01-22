import { NameSpace } from '../../const';
import { FullOfferData, Offers, Reviews, State } from '../../types';

export const getIsFullOfferLoading = (state: State): boolean =>
  state[NameSpace.Offer].isFullOfferLoading;
export const getIsReviewsLoading = (state: State): boolean =>
  state[NameSpace.Offer].isReviewsLoading;
export const getIsNearOffersLoading = (state: State): boolean =>
  state[NameSpace.Offer].isNearOffersLoading;

export const getIsFullOfferLoadingError = (state: State): boolean =>
  state[NameSpace.Offer].isFullOfferLoadingError;
export const getIsReviewsLoadingError = (state: State): boolean =>
  state[NameSpace.Offer].isReviewsLoadingError;
export const getIsNearOffersLoadingError = (state: State): boolean =>
  state[NameSpace.Offer].isNearOffersLoadingError;

export const getFullOfferData = (state: State): FullOfferData =>
  state[NameSpace.Offer].offer;
export const getReviewsData = (state: State): Reviews =>
  state[NameSpace.Offer].reviews;
export const getNearOffersData = (state: State): Offers =>
  state[NameSpace.Offer].nearOffers;
