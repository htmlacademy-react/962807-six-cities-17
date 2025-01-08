import { createReducer } from '@reduxjs/toolkit';
import { CITY, OFFERS } from '../mocks/offers';
import { changeCity, getOfferList } from './action';

const initialState = {
  city: CITY,
  offers: OFFERS,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state) => state)
    .addCase(getOfferList, (state) => state);
});
