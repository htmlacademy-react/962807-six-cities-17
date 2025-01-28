import { faker } from '@faker-js/faker';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { CITIES_DATA, SortingOption } from '../const';
import { createAPI } from '../services/api';
import {
  AuthenticationData,
  City,
  FullOfferData,
  Location,
  Offer,
  Offers,
  Review,
  Reviews,
  State,
  User,
  UserData,
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

export const makeFakeReview = (): Review => ({
  id: faker.string.nanoid(),
  comment: faker.word.words(10),
  date: String(faker.date.anytime()),
  rating: faker.number.int({ min: 1, max: 5 }),
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

export const makeFakeCardProcessSlice = () => {
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

export function MockComponent(): JSX.Element {
  return (
    <div data-testid="mockComponent">
      <p>mockComponent</p>
    </div>
  );
}
