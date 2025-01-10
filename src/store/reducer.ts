import { createReducer } from '@reduxjs/toolkit';
import { CITIES, City } from '../mocks/cities';
import { Offers, OFFERS } from '../mocks/offers';
import { changeCity } from './action';

type StateProps = {
  city: City;
  offers: Offers;
};

const initialCity = CITIES[0];
const initialOffers = OFFERS.filter((offer) => offer.city === initialCity.name);

const initialState: StateProps = {
  city: initialCity,
  offers: initialOffers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
    state.offers = OFFERS.filter((offer) => offer.city === state.city.name);
  });
});
