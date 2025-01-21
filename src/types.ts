import { AxiosInstance } from 'axios';
import { AuthStatus } from './const';
import { AppDispatch, store, Store } from './store/store';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type Offers = Offer[];

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type FullOfferData = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  host: User;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];
  images: [string];
  maxAdults: number;
};

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = User & {
  email: string;
  token: string;
};

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type Reviews = Review[];

export type UserReview = {
  id: string;
  comment: string;
  rating: number;
};

export type AsyncThunkType = {
  dispatch: AppDispatch;
  store: Store;
  extra: AxiosInstance;
};

export type CardProcessType = {
  offers: Offers;
  offersByCity: Offers;
  cities: string[];
  currentCity: City;
  sort: string;
  isOffersLoading: boolean;
  isOffersLoadingError: boolean;
};

export type UserProcessType = {
  authStatus: AuthStatus;
  user: UserData | null;
  isLogin: boolean;
  isLogout: boolean;
  isLoginError: boolean;
  isLogoutError: boolean;
};

export type OfferProcessType = {
  offer: FullOfferData;
  nearOffers: Offers;
  reviews: Reviews;
  isNearOffersLoading: boolean;
  isFullOfferLoading: boolean;
  isReviewsLoading: boolean;
  isReviewPushing: boolean;
  isNearOffersLoadingError: boolean;
  isFullOfferLoadingError: boolean;
  isReviewsLoadingError: boolean;
  isReviewPushingError: boolean;
};

export type State = ReturnType<typeof store.getState>;
