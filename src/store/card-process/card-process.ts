import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES_DATA, NameSpace, SortingOption } from '../../const';
import { CardProcessType, Cities, City, Offers } from '../../types';
import {
  fetchFavoriteOffers,
  fetchOffersAction,
  pushFavoriteStatus,
} from '../api-actions';

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

const getCityData = (cities: Cities, cityName: string) =>
  cities.find((city) => city.name === cityName) as City;

const initialState: CardProcessType = {
  offers: [],
  offersByCity: [],
  favoriteOffers: [],
  offersByCityQuantity: 0,
  cities: CITIES_DATA,
  currentCity: CITIES_DATA[0],
  sort: SortingOption.POPULAR,
  isOffersLoading: false,
  isOffersLoadingError: false,
  isFavoriteOffersLoading: false,
  isFavoriteOffersLoadingError: false,
  isPushingFavoriteStatus: false,
  activeCardOffer: null,
};

export const cardProcess = createSlice({
  name: NameSpace.Cards,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.currentCity = getCityData(state.cities, action.payload);

      const offersByCity = filterOffersByCity(state.currentCity, state.offers);
      state.offersByCityQuantity = offersByCity.length;
      if (offersByCity.length) {
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
        if (offersByCity.length) {
          sortOffers(offersByCity, state.sort);
          state.offersByCity = offersByCity;
        }
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
        state.isOffersLoadingError = true;
      })

      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.isFavoriteOffersLoading = true;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.isFavoriteOffersLoading = false;
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.isFavoriteOffersLoadingError = false;
      })

      .addCase(pushFavoriteStatus.pending, (state) => {
        state.isPushingFavoriteStatus = true;
      })
      .addCase(pushFavoriteStatus.fulfilled, (state, action) => {
        state.isPushingFavoriteStatus = false;
        const evaluatedOffer = state.offers.find(
          (offer) => offer.id === action.payload.id
        );
        if (!evaluatedOffer) {
          throw new Error(`Нет предложения с данным id: ${action.payload.id}`);
        }
        if (action.payload.isFavorite) {
          state.favoriteOffers.push(evaluatedOffer);
          // console.log('pushed in state');
        } else {
          const excludedOfferIndex = state.favoriteOffers.findIndex(
            (offer) => offer.id === evaluatedOffer.id
          );
          state.favoriteOffers.splice(excludedOfferIndex, 1);
          // console.log('rejected out of state');
        }
      })
      .addCase(pushFavoriteStatus.rejected, (state) => {
        state.isPushingFavoriteStatus = false;
      });
  },
});

export const { changeCity, changeSort, changeActiveCard } = cardProcess.actions;
