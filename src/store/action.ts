import { createAction } from '@reduxjs/toolkit';
import { City } from '../mocks/cities';

export const changeCity = createAction<City>('change-city');
export const changeSort = createAction<string>('change-sort');
