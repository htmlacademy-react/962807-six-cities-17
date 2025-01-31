import { faker } from '@faker-js/faker';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import {
  AuthenticationStatus,
  CITIES_DATA,
  NameSpace,
  SortingOption,
} from '../const';
import { createAPI } from '../services/api';
import {
  AuthenticationData,
  CardProcessType,
  City,
  FullOfferData,
  Location,
  Offer,
  OfferProcessType,
  Offers,
  Review,
  Reviews,
  State,
  User,
  UserData,
  UserProcessType,
  UserReview,
} from '../types';
import { getRandomInteger } from './utils';

export const makeFakeLocation = (): Location => ({
  latitude: faker.location.latitude(),
  longitude: faker.location.longitude(),
  zoom: faker.number.int({ min: 10, max: 15 }),
});

export const getRandomCity = (): City =>
  CITIES_DATA[getRandomInteger(0, CITIES_DATA.length - 1)];

export const makeFakeOffer = (): Offer => ({
  id: faker.string.nanoid(),
  title: faker.commerce.productName(),
  type: faker.commerce.product(),
  price: faker.number.int({ min: 100, max: 1000 }),
  city: getRandomCity(),
  location: makeFakeLocation(),
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
  previewImage: faker.system.filePath(),
});

export const makeFakeOffers = (quantity?: number): Offers =>
  Array.from({ length: quantity ? quantity : 15 }, () => makeFakeOffer());

export const makeFakeUser = (): User => ({
  name: faker.person.firstName(),
  avatarUrl: faker.system.filePath(),
  isPro: faker.datatype.boolean(),
});

export const makeFakeUseData = (): UserData => ({
  ...makeFakeUser(),
  email: faker.string.nanoid(),
  token: faker.string.nanoid(),
});

export const makeFakeAuthenticationData = (): AuthenticationData => ({
  login: faker.string.nanoid(),
  password: faker.string.nanoid(),
});

export const makeFakeUserReview = (): UserReview => ({
  id: faker.string.nanoid(),
  comment: faker.word.words(10),
  rating: faker.number.int({ min: 1, max: 5 }),
});

export const makeFakeReview = (): Review => ({
  ...makeFakeUserReview(),
  date: String(faker.date.anytime()),
  user: makeFakeUser(),
});

export const makeFakeReviews = (quantity?: number): Reviews =>
  Array.from({ length: quantity ? quantity : 4 }, () => makeFakeReview());

export const makeFakeImages = (): string[] =>
  Array.from({ length: getRandomInteger(6, 10) }, () =>
    faker.system.filePath()
  );

export const makeFakeFullOffer = (): FullOfferData => ({
  id: faker.string.nanoid(),
  title: faker.commerce.productName(),
  type: faker.commerce.product(),
  price: faker.number.int({ min: 100, max: 1000 }),
  city: getRandomCity(),
  location: makeFakeLocation(),
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
  description: faker.commerce.productDescription(),
  images: makeFakeImages(),
  goods: faker.word.words({ count: { min: 1, max: 10 } }).split(' '),
  host: makeFakeUser(),
  bedrooms: faker.number.int({ min: 1, max: 3 }),
  maxAdults: faker.number.int({ min: 1, max: 5 }),
});

export type AppThunkDispatch = ThunkDispatch<
  State,
  ReturnType<typeof createAPI>,
  Action
>;

export const extractActionsTypes = (actions: Action<string>[]) =>
  actions.map(({ type }) => type);

export const makeFakeCardProcessSlice = (): CardProcessType => {
  const offers = makeFakeOffers();
  const currentCity = getRandomCity();
  const offersByCity = offers.filter(
    (offer) => offer.city.name === currentCity.name
  );
  return {
    offers: offers,
    offersByCity: offersByCity,
    favoriteOffers: offers.slice(0, getRandomInteger(0, offers.length - 1)),
    offersByCityQuantity: offersByCity.length,
    cities: CITIES_DATA,
    currentCity: currentCity,
    sort: SortingOption.POPULAR,
    isOffersLoading: false,
    isOffersLoadingError: false,
    isFavoriteOffersLoading: false,
    isFavoriteOffersLoadingError: false,
    isPushingFavoriteStatus: false,
    activeCardOffer: null,
  };
};

export const makeFakeOfferProcessSlice = (): OfferProcessType => ({
  offer: makeFakeFullOffer(),
  reviews: makeFakeReviews(),
  nearOffers: makeFakeOffers(),
  isFullOfferLoading: false,
  isNearOffersLoading: false,
  isReviewsLoading: false,
  isReviewPushing: false,
  isFullOfferLoadingError: false,
  isNearOffersLoadingError: false,
  isReviewsLoadingError: false,
  isReviewPushingError: false,
});

export const makeFakeUserProcessSlice = (
  authenticationStatus: AuthenticationStatus = AuthenticationStatus.Unknown
): UserProcessType => {
  const user =
    authenticationStatus === AuthenticationStatus.Auth
      ? makeFakeUseData()
      : null;
  return {
    authenticationStatus: authenticationStatus,
    user: user,
    isLoginError: false,
    isLogoutError: false,
  };
};

export const makeFakeState = (
  authenticationStatus: AuthenticationStatus = AuthenticationStatus.Unknown
): State => ({
  [NameSpace.Cards]: makeFakeCardProcessSlice(),
  [NameSpace.Offer]: makeFakeOfferProcessSlice(),
  [NameSpace.User]: makeFakeUserProcessSlice(authenticationStatus),
});
