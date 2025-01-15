import { createReducer } from '@reduxjs/toolkit';
import {
  AuthStatus,
  CITIES_NAMES,
  DEFAULT_CITY,
  INIT_OFFER,
  SortingOption,
} from '../const';
import { City, FullOfferData, Offers, Reviews } from '../types';
import {
  changeCity,
  changeSort,
  loadFullOfferData,
  loadNearOffers,
  loadOffers,
  loadReviews,
  requireAuth,
  setOffersLoadingStatus,
} from './action';

type StateProps = {
  offers: Offers;
  offersByCity: Offers;
  offer: FullOfferData;
  reviews: Reviews;
  nearOffers: Offers;
  cities: string[];
  currentCity: City;
  sort: string;
  authStatus: AuthStatus;
  isOffersLoading: boolean;
  error: string | null;
};

const filterOffersByCity = (currentCity: City, offers: Offers): Offers =>
  offers.filter((offer) => offer.city.name === currentCity.name);

const sortOffers = (offers: Offers, sortType: string): void => {
  if (!offers.length) {
    return;
  }
  const sortingCallback = (
    offerA: Offers[number],
    offerB: Offers[number]
  ): number => {
    switch (sortType) {
      case SortingOption.PRICE_HIGHT_LOW:
        return offerB.price - offerA.price;
      case SortingOption.PRICE_LOW_HIGHT:
        return offerA.price - offerB.price;
      case SortingOption.RATING:
        return offerB.rating - offerA.rating;
      default:
        return offerA.isPremium ? -1 : 1;
    }
  };
  offers.sort(sortingCallback);
};

const getCityData = (offers: Offers, cityName: string) => {
  const offerByCity = offers.find((offer) => offer.city.name === cityName);
  return offerByCity ? offerByCity.city : null;
};

const initialState: StateProps = {
  offers: [],
  offersByCity: [],
  offer: INIT_OFFER,
  cities: CITIES_NAMES,
  currentCity: DEFAULT_CITY,
  sort: SortingOption.POPULAR,
  authStatus: AuthStatus.Unknown,
  isOffersLoading: false,
  error: null,
  reviews: [],
  nearOffers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const cityData = getCityData(state.offers, action.payload);
      if (cityData) {
        state.currentCity = cityData;
        const offersByCity = filterOffersByCity(
          state.currentCity,
          state.offers
        );
        sortOffers(offersByCity, state.sort);
        state.offersByCity = offersByCity;
      }
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
      sortOffers(state.offersByCity, state.sort);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.offersByCity = filterOffersByCity(state.currentCity, state.offers);
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(loadFullOfferData, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});
