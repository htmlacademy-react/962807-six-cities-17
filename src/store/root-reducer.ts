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

// import { createReducer } from '@reduxjs/toolkit';
// import {
//   AuthStatus,
//   CITIES_NAMES,
//   DEFAULT_CITY,
//   INIT_OFFER,
//   SortingOption,
// } from '../const';
// import {
//   City,
//   FullOfferData,
//   Offers,
//   Review,
//   Reviews,
//   UserData,
// } from '../types';
// import { changeCity, changeSort, setError } from './action';
// import {
//   checkAuthAction,
//   fetchFullOfferDataAction,
//   fetchNearOffersAction,
//   fetchOffersAction,
//   fetchReviewsAction,
//   loginAction,
//   logoutAction,
//   postReviewAction,
// } from './api-actions';

// export type StateProps = {
//   offers: Offers;
//   offersByCity: Offers;
//   offer: FullOfferData;
//   nearOffers: Offers;
//   reviews: Reviews;
//   cities: string[];
//   currentCity: City;
//   sort: string;
//   authStatus: AuthStatus;
//   user: UserData | null;
//   isOffersLoading: boolean;
//   isNearOffersLoading: boolean;
//   isFullOfferLoading: boolean;
//   isReviewsLoading: boolean;
//   isReviewPushing: boolean;
//   isLogin: boolean;
//   isLogout: boolean;
//   isOffersLoadingError: boolean;
//   isNearOffersLoadingError: boolean;
//   isFullOfferLoadingError: boolean;
//   isReviewsLoadingError: boolean;
//   isReviewPushingError: boolean;
//   isLoginError: boolean;
//   isLogoutError: boolean;
//   error: string | null;
// };

// const sortReviewsNewToOld = (reviews: Reviews) =>
//   reviews.sort(
//     (reviewA: Review, reviewB: Review) =>
//       Date.parse(reviewB.date) - Date.parse(reviewA.date)
//   );

// const filterOffersByCity = (currentCity: City, offers: Offers): Offers =>
//   offers.filter((offer) => offer.city.name === currentCity.name);

// const sortOffers = (offers: Offers, sortType: string): void => {
//   if (!offers.length) {
//     return;
//   }
//   const sortingCallback = (
//     offerA: Offers[number],
//     offerB: Offers[number]
//   ): number => {
//     switch (sortType) {
//       case SortingOption.PRICE_HIGHT_LOW:
//         return offerB.price - offerA.price;
//       case SortingOption.PRICE_LOW_HIGHT:
//         return offerA.price - offerB.price;
//       case SortingOption.RATING:
//         return offerB.rating - offerA.rating;
//       default:
//         return offerA.isPremium ? -1 : 1;
//     }
//   };
//   offers.sort(sortingCallback);
// };

// const getCityData = (offers: Offers, cityName: string) => {
//   const offerByCity = offers.find((offer) => offer.city.name === cityName);
//   return offerByCity ? offerByCity.city : null;
// };

// const initialState: StateProps = {
//   offers: [],
//   offersByCity: [],
//   offer: INIT_OFFER,
//   cities: CITIES_NAMES,
//   currentCity: DEFAULT_CITY,
//   sort: SortingOption.POPULAR,
//   authStatus: AuthStatus.Unknown,
//   user: null,
//   reviews: [],
//   nearOffers: [],
//   error: null,
//   isFullOfferLoading: false,
//   isOffersLoading: false,
//   isNearOffersLoading: false,
//   isReviewsLoading: false,
//   isReviewPushing: false,
//   isLogin: false,
//   isLogout: false,
//   isFullOfferLoadingError: false,
//   isOffersLoadingError: false,
//   isNearOffersLoadingError: false,
//   isReviewsLoadingError: false,
//   isReviewPushingError: false,
//   isLoginError: false,
//   isLogoutError: false,
// };
// export const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(changeCity, (state, action) => {
//       const cityData = getCityData(state.offers, action.payload);
//       if (cityData) {
//         state.currentCity = cityData;
//         const offersByCity = filterOffersByCity(
//           state.currentCity,
//           state.offers
//         );
//         sortOffers(offersByCity, state.sort);
//         state.offersByCity = offersByCity;
//       }
//     })
//     .addCase(changeSort, (state, action) => {
//       state.sort = action.payload;
//       sortOffers(state.offersByCity, state.sort);
//     })
//     .addCase(fetchOffersAction.pending, (state) => {
//       state.isOffersLoading = true;
//       state.isOffersLoadingError = false;
//     })
//     .addCase(fetchOffersAction.fulfilled, (state, action) => {
//       state.isOffersLoading = false;
//       state.offers = action.payload;
//       state.offersByCity = filterOffersByCity(state.currentCity, state.offers);
//     })
//     .addCase(fetchOffersAction.rejected, (state) => {
//       state.isOffersLoading = false;
//       state.isOffersLoadingError = true;
//     })
//     .addCase(fetchNearOffersAction.pending, (state) => {
//       state.isNearOffersLoading = true;
//       state.isNearOffersLoadingError = false;
//     })
//     .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
//       state.isNearOffersLoading = false;
//       state.nearOffers = action.payload.slice(0, 3);
//     })
//     .addCase(fetchNearOffersAction.rejected, (state) => {
//       state.isNearOffersLoading = false;
//       state.isNearOffersLoadingError = true;
//     })
//     .addCase(fetchFullOfferDataAction.pending, (state) => {
//       state.isFullOfferLoading = true;
//       state.isFullOfferLoadingError = false;
//     })
//     .addCase(fetchFullOfferDataAction.fulfilled, (state, action) => {
//       state.isFullOfferLoading = false;
//       state.offer = action.payload;
//     })
//     .addCase(fetchFullOfferDataAction.rejected, (state) => {
//       state.isFullOfferLoading = false;
//       state.isFullOfferLoadingError = true;
//     })
//     .addCase(fetchReviewsAction.pending, (state) => {
//       state.isReviewsLoading = true;
//       state.isReviewsLoadingError = false;
//     })
//     .addCase(fetchReviewsAction.fulfilled, (state, action) => {
//       state.isReviewsLoading = false;
//       state.isReviewsLoadingError = false;
//       const reviews = action.payload.slice(0, 10);
//       sortReviewsNewToOld(reviews);
//       state.reviews = reviews;
//     })
//     .addCase(fetchReviewsAction.rejected, (state) => {
//       state.isReviewsLoading = false;
//       state.isReviewsLoadingError = true;
//     })

//     .addCase(postReviewAction.pending, (state) => {
//       state.isReviewPushing = true;
//       state.isReviewPushingError = false;
//     })
//     .addCase(postReviewAction.fulfilled, (state, action) => {
//       const review = action.payload;
//       state.reviews.unshift(review);
//       state.reviews.slice(0, 10);
//       state.isReviewPushing = false;
//       state.isReviewPushingError = false;
//     })
//     .addCase(postReviewAction.rejected, (state) => {
//       state.isReviewPushing = false;
//       state.isReviewPushingError = true;
//     })

//     .addCase(checkAuthAction.fulfilled, (state, action) => {
//       state.isLoginError = false;
//       state.authStatus = AuthStatus.Auth;
//       state.user = action.payload;
//     })
//     .addCase(checkAuthAction.rejected, (state) => {
//       state.isLoginError = true;
//       state.authStatus = AuthStatus.NoAuth;
//     })

//     .addCase(loginAction.fulfilled, (state, action) => {
//       state.isLoginError = false;
//       state.authStatus = AuthStatus.Auth;
//       state.user = action.payload;
//     })
//     .addCase(loginAction.rejected, (state) => {
//       state.isLoginError = true;
//       state.authStatus = AuthStatus.NoAuth;
//     })

//     .addCase(logoutAction.fulfilled, (state) => {
//       state.isLogoutError = false;
//       state.authStatus = AuthStatus.NoAuth;
//       state.user = null;
//     })
//     .addCase(logoutAction.rejected, (state) => {
//       state.isLogoutError = true;
//     })
//     .addCase(setError, (state, action) => {
//       state.error = action.payload;
//     });
// });
