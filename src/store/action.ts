import { createAction } from '@reduxjs/toolkit';
import { City } from '../mocks/cities';
import { Offers } from '../mocks/offers';

export const changeCity = createAction<City>('change-city');
export const changeSort = createAction<string>('change-sort');
export const loadOffers = createAction<Offers>('load-offers');
