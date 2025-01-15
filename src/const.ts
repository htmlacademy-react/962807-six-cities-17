import { City, FullOfferData } from './types';

export enum SortingOption {
  POPULAR = 'Popular',
  PRICE_LOW_HIGHT = 'Price: low to high',
  PRICE_HIGHT_LOW = 'Price: high to low',
  RATING = 'Top rated first',
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer',
  Favorites = '/favorites',
  Empty = '*',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite',
  Offers = '/offers',
  Offer = 'offers/',
  NearBy = '/nearby',
  Reviews = '/comments/',

}

export const DEFAULT_CITY: City = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
};

export const CITIES_NAMES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const INIT_OFFER: FullOfferData = {
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
