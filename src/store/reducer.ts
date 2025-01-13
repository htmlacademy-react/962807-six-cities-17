import { createReducer } from '@reduxjs/toolkit';
import { CITIES, City } from '../mocks/cities';
import { Offer, Offers, OFFERS } from '../mocks/offers';
import { changeCity, changeSort, loadOffers } from './action';
import { SortingOption } from '../const';

type StateProps = {
  city: City;
  offers: Offers;
  sort: string;
};

const filterOffersByCity = (city: City): Offers =>
  OFFERS.filter((offer) => offer.city === city.name);

const sortOffers = (offers: Offers, sortType: string): void => {
  if (!offers.length) {
    return;
  }
  const sortingCallback = (offerA: Offer, offerB: Offer): number => {
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

const initialState: StateProps = {
  city: CITIES[0],
  offers: OFFERS.filter((offer) => offer.city === CITIES[0].name),
  sort: SortingOption.RATING,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      const offers = filterOffersByCity(state.city);
      sortOffers(offers, state.sort);
      state.offers = offers;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
      sortOffers(state.offers, state.sort);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});
