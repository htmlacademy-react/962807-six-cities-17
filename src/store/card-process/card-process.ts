import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CITIES_NAMES,
  DEFAULT_CITY,
  NameSpace,
  SortingOption,
} from '../../const';
import { CardProcessType, City, Offers } from '../../types';
import { fetchOffersAction } from '../api-actions';

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

const initialState: CardProcessType = {
  offers: [],
  offersByCity: [],
  offersByCityQuantity: 0,
  cities: CITIES_NAMES,
  currentCity: DEFAULT_CITY,
  sort: SortingOption.POPULAR,
  isOffersLoading: false,
  isOffersLoadingError: false,
  activeCardOffer: null,
};

export const cardProcess = createSlice({
  name: NameSpace.Cards,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      const cityData = getCityData(state.offers, action.payload);
      if (cityData) {
        state.currentCity = cityData;
        const offersByCity = filterOffersByCity(
          state.currentCity,
          state.offers
        );
        state.offersByCityQuantity = offersByCity.length;
        sortOffers(offersByCity, state.sort);
        state.offersByCity = offersByCity;
      }
    },
    changeSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
      sortOffers(state.offersByCity, state.sort);
    },
    changeActiveCard: (state, action: PayloadAction<string | null>) => {
      state.activeCardOffer = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
        state.isOffersLoadingError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersLoading = false;
        state.offers = action.payload;
        const offersByCity = filterOffersByCity(
          state.currentCity,
          state.offers
        );
        state.offersByCityQuantity = offersByCity.length;
        state.offersByCity = offersByCity;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
        state.isOffersLoadingError = true;
      });
  },
});

export const { changeCity, changeSort, changeActiveCard } = cardProcess.actions;
