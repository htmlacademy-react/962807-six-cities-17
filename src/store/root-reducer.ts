import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cardProcess } from './card-process/card-process';
import { offerProcess } from './offer-process/offer-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Cards]: cardProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
