import { createSlice } from '@reduxjs/toolkit';
import { INIT_OFFER, NameSpace } from '../../const';
import { OfferProcessType, Review, Reviews } from '../../types';
import {
  fetchFullOfferDataAction,
  fetchNearOffersAction,
  fetchReviewsAction,
  postReviewAction,
} from '../api-actions';

const sortReviewsNewToOld = (reviews: Reviews) =>
  reviews.sort(
    (reviewA: Review, reviewB: Review) =>
      Date.parse(reviewB.date) - Date.parse(reviewA.date)
  );

const initialState: OfferProcessType = {
  offer: INIT_OFFER,
  reviews: [],
  nearOffers: [],
  isFullOfferLoading: false,
  isNearOffersLoading: false,
  isReviewsLoading: false,
  isReviewPushing: false,
  isFullOfferLoadingError: false,
  isNearOffersLoadingError: false,
  isReviewsLoadingError: false,
  isReviewPushingError: false,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearOffersAction.pending, (state) => {
        state.isNearOffersLoading = true;
        state.isNearOffersLoadingError = false;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.isNearOffersLoading = false;
        state.nearOffers = action.payload.slice(0, 3);
      })
      .addCase(fetchNearOffersAction.rejected, (state) => {
        state.isNearOffersLoading = false;
        state.isNearOffersLoadingError = true;
      })
      .addCase(fetchFullOfferDataAction.pending, (state) => {
        state.isFullOfferLoading = true;
        state.isFullOfferLoadingError = false;
      })
      .addCase(fetchFullOfferDataAction.fulfilled, (state, action) => {
        state.isFullOfferLoading = false;
        state.offer = action.payload;
      })
      .addCase(fetchFullOfferDataAction.rejected, (state) => {
        state.isFullOfferLoading = false;
        state.isFullOfferLoadingError = true;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsLoading = true;
        state.isReviewsLoadingError = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.isReviewsLoading = false;
        state.isReviewsLoadingError = false;
        const reviews = action.payload.slice(0, 10);
        sortReviewsNewToOld(reviews);
        state.reviews = reviews;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsLoading = false;
        state.isReviewsLoadingError = true;
      })

      .addCase(postReviewAction.pending, (state) => {
        state.isReviewPushing = true;
        state.isReviewPushingError = false;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        const review = action.payload;
        state.reviews.unshift(review);
        state.reviews.slice(0, 10);
        state.isReviewPushing = false;
        state.isReviewPushingError = false;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.isReviewPushing = false;
        state.isReviewPushingError = true;
      });
  },
});