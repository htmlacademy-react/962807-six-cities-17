import { NameSpace } from '../../const';
import { FullOfferData, Offers, Reviews, State } from '../../types';

export const getIsFullOfferLoading = (state: State): boolean =>
  state[NameSpace.Offer].isFullOfferLoading;
export const getIsReviewsLoading = (state: State): boolean =>
  state[NameSpace.Offer].isReviewsLoading;
export const getIsNearOffersLoading = (state: State): boolean =>
  state[NameSpace.Offer].isNearOffersLoading;

export const getFullOfferData = (state: State): FullOfferData =>
  state[NameSpace.Offer].offer;
export const getReviewsData = (state: State): Reviews =>
  state[NameSpace.Offer].reviews;
export const getNearOffersData = (state: State): Offers =>
  state[NameSpace.Offer].nearOffers;
