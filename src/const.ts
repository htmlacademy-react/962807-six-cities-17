import { Cities, FullOfferData } from './types';

export const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;
export const MINIMUM_REVIEW_LENGTH = 50;
export const MAXIMUM_REVIEW_LENGTH = 300;
export const MAXIMUM_REVIEWS_QUANTITY = 50;
export const NEAR_OFFER_COUNT = 3;
export const VISIBLE_REVIEW_LIMIT = 10;
export const MAX_OFFER_IMAGES = 6;

export enum SortingOption {
  POPULAR = 'Popular',
  PRICE_LOW_HIGHT = 'Price: low to high',
  PRICE_HIGHT_LOW = 'Price: high to low',
  RATING = 'Top rated first',
}

export enum CardType {
  Main = 'cities',
  NearBy = 'near-places',
  Favorites = 'favorites',
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer',
  Favorites = '/favorites',
  Empty = '*',
}

export enum AuthenticationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Offers = '/offers',
  Offer = 'offers/',
  NearBy = '/nearby',
  Reviews = '/comments/',
}

export const CITIES_DATA: Cities = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
];

export const CITIES_NAMES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const INITIAL_OFFER: FullOfferData = {
  id: '',
  title: '',
  type: '',
  price: 0,
  city: {
    name: 'Paris',
    location: {
      latitude: 48.8589,
      longitude: 2.3469,
      zoom: 10,
    },
  },
  location: {
    latitude: 48.8589,
    longitude: 2.3469,
    zoom: 10,
  },
  host: {
    name: '',
    avatarUrl: '',
    isPro: true,
  },
  isFavorite: false,
  isPremium: false,
  rating: 0,
  description: '',
  bedrooms: 0,
  goods: [''],
  images: [''],
  maxAdults: 0,
};

export const RATING_GRADES = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

export enum NameSpace {
  Cards = 'Cards',
  Offer = 'Offer',
  User = 'User',
}

export enum MapIcon {
  Default = '/img/pin.svg',
  Active = '/img/pin-active.svg',
}

export enum MapBaseSettings {
  TitleLayer = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Copyright = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}

export enum MapSizeType {
  MainPage = '100%',
  OfferPage = '579px',
}
