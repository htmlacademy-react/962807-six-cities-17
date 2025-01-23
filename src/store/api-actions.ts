import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import {
  AsyncThunkType,
  AuthData,
  FullOfferData,
  Offers,
  Review,
  Reviews,
  UserData,
  UserReview,
} from '../types';

const createAppAsyncThunk = createAsyncThunk.withTypes<AsyncThunkType>();

export const fetchOffersAction = createAppAsyncThunk<Offers, undefined>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Offers);
    return data;
  }
);

export const fetchNearOffersAction = createAppAsyncThunk<Offers, string>(
  'offers/fetchNearOffers',
  async (id, { extra: api }) => {
    const { data } = await api.get<Offers>(
      APIRoute.Offer + id + APIRoute.NearBy
    );
    return data;
  }
);

export const fetchFullOfferDataAction = createAppAsyncThunk<
  FullOfferData,
  string
>('offers/fetchFullOfferData', async (id, { extra: api }) => {
  const { data } = await api.get<FullOfferData>(APIRoute.Offer + id);
  return data;
});

export const fetchReviewsAction = createAppAsyncThunk<Reviews, string>(
  'offers/fetchReviews',
  async (id, { extra: api }) => {
    const { data } = await api.get<Reviews>(APIRoute.Reviews + id);
    return data;
  }
);

export const checkAuthAction = createAppAsyncThunk<UserData, undefined>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAppAsyncThunk<UserData, AuthData>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const postReviewAction = createAppAsyncThunk<Review, UserReview>(
  'offers/postReview',
  async (userReview, { extra: api }) => {
    const { data } = await api.post<Review>(APIRoute.Reviews + userReview.id, {
      comment: userReview.comment,
      rating: userReview.rating,
    });
    return data;
  }
);

export const fetchFavoriteOffers = createAppAsyncThunk<Offers, undefined>(
  'offers/fetchFavoriteOffers',
  async (_arg, { extra: api }) => {
    // console.log('fetchFavoriteOffers');
    const { data } = await api.get<Offers>(APIRoute.Favorite);
    return data;
  }
);

// type AType = {
//   id: string;
//   isFavorite: boolean;
// };

export const pushFavoriteStatus = createAppAsyncThunk<
  FullOfferData,
  { id: string; isFavorite: boolean }
>('offers/pushFavoriteStatus', async ({ id, isFavorite }, { extra: api }) => {
  // console.log('pushOnServer', id, isFavorite);
  const { data } = await api.post<FullOfferData>(
    `${APIRoute.Favorite}/${id}/${Number(isFavorite)}`
  );
  // console.log('uploadedFromServer', data.isFavorite);
  return data;
});
