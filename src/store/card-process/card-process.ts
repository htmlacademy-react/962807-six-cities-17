import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES_DATA, NameSpace, SortingOption } from '../../const';
import { CardProcessType, Cities, City, Offers } from '../../types';
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

const getCityData = (cities: Cities, cityName: string) =>
  cities.find((city) => city.name === cityName) as City;

const initialState: CardProcessType = {
  offers: [],
  offersByCity: [],
  offersByCityQuantity: 0,
  cities: CITIES_DATA,
  currentCity: CITIES_DATA[0],
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
      });

    // .addCase(loadFavoriteOfferCards.pending, (state) => {
    //   state.isFavoriteOfferLoading = true;
    // })
    // .addCase(loadFavoriteOfferCards.fulfilled, (state, action) => {
    //   state.isFavoriteOfferLoading = false;
    //   state.favoriteOfferCards = action.payload;
    // })
    // .addCase(loadFavoriteOfferCards.rejected, (state) => {
    //   state.isFavoriteOfferLoading = false;
    // })

    // .addCase(uploadFavoriteStatus.pending, (state) => {
    //   state.isFavoriteOfferUploading = true;
    // })
    // .addCase(uploadFavoriteStatus.fulfilled, (state, action) => {
    //   state.isFavoriteOfferUploading = false;
    //   if (action.payload.isFavorite) {
    //     state.favoriteOfferCards.push(action.paylaod);
    //   } else {
    //     const favoriteIndex = state.favoriteOfferCards.findIndex(
    //       (card) => card.id === action.payload.id
    //     );
    //     state.favoriteOfferCards.splice(favoriteIndex, 1);
    //   }
    // })
    // .addCase(uploadFavoriteStatus.rejected, (state) => {
    //   state.isFavoriteOfferUploading = false;
    // });
  },
});

export const { changeCity, changeSort, changeActiveCard } = cardProcess.actions;
