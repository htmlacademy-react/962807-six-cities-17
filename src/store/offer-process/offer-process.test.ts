import { faker } from '@faker-js/faker';
import { UserReview } from '../../types';
import {
  makeFakeFullOffer,
  makeFakeOffers,
  makeFakeReview,
  makeFakeReviews,
} from '../../utils/mocks';
import {
  fetchFullOfferDataAction,
  fetchNearOffersAction,
  fetchReviewsAction,
  postReviewAction,
} from '../api-actions';
import { initialState, offerProcess } from './offer-process';

describe('OfferProcess Slice', () => {
  const emptyAction = { type: '' };

  it('should return initial state with empty action', () => {
    const expectedState = { ...initialState };
    const result = offerProcess.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const expectedState = { ...initialState };
    const result = offerProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set "isNearOffersLoading" to "true", "isNearOffersLoadingError" to "false" with "fetchNearOffersAction.pending"', () => {
    const expectedState = {
      ...initialState,
      isNearOffersLoading: true,
      isNearOffersLoadingError: false,
    };
    const result = offerProcess.reducer(
      initialState,
      fetchNearOffersAction.pending
    );
    expect(result).toEqual(expectedState);
  });

  it('should set "isNearOffersLoading" to "false", "isNearOffersLoadingError" to "true" with "fetchNearOffersAction.rejected"', () => {
    const expectedState = {
      ...initialState,
      isNearOffersLoading: false,
      isNearOffersLoadingError: true,
    };
    const result = offerProcess.reducer(
      initialState,
      fetchNearOffersAction.rejected
    );
    expect(result).toEqual(expectedState);
  });

  it('should set payload to "nearOffers" and "isNearOffersLoading" to "false" with "fetchNearOffersAction.fulfilled"', () => {
    const mockNearOffers = makeFakeOffers(5);
    const expectedState = {
      ...initialState,
      isNearOffersLoading: false,
      nearOffers: mockNearOffers,
    };
    const result = offerProcess.reducer(
      initialState,
      fetchNearOffersAction.fulfilled(mockNearOffers, '', '')
    );
    expect(result).toEqual(expectedState);
  });

  it('should set "isFullOfferLoading" to "true", "isFullOfferLoadingError" to "false" with "fetchFullOfferDataAction.pending"', () => {
    const expectedState = {
      ...initialState,
      isFullOfferLoading: true,
      isFullOfferLoadingError: false,
    };
    const result = offerProcess.reducer(
      initialState,
      fetchFullOfferDataAction.pending
    );
    expect(result).toEqual(expectedState);
  });
  it('should set "isFullOfferLoading" to "false", "isFullOfferLoadingError" to "true" with "fetchFullOfferDataAction.rejected"', () => {
    const expectedState = {
      ...initialState,
      isFullOfferLoading: false,
      isFullOfferLoadingError: true,
    };
    const result = offerProcess.reducer(
      initialState,
      fetchFullOfferDataAction.rejected
    );
    expect(result).toEqual(expectedState);
  });

  it('should set payload to "offer" and "isFullOfferLoading" to "false" with "fetchFullOfferDataAction.fulfilled"', () => {
    const mockFullOffer = makeFakeFullOffer();
    const expectedState = {
      ...initialState,
      isFullOfferLoading: false,
      offer: mockFullOffer,
    };
    const result = offerProcess.reducer(
      initialState,
      fetchFullOfferDataAction.fulfilled(mockFullOffer, '', '')
    );
    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsLoading" to "true", "isReviewsLoadingError" to "false" with "fetchReviewsAction.pending"', () => {
    const expectedState = {
      ...initialState,
      isReviewsLoading: true,
      isReviewsLoadingError: false,
    };
    const result = offerProcess.reducer(
      initialState,
      fetchReviewsAction.pending
    );
    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsLoading" to "false", "isReviewsLoadingError" to "true" with "fetchReviewsAction.rejected"', () => {
    const expectedState = {
      ...initialState,
      isReviewsLoading: false,
      isReviewsLoadingError: true,
    };
    const result = offerProcess.reducer(
      initialState,
      fetchReviewsAction.rejected
    );
    expect(result).toEqual(expectedState);
  });

  it('should set payload to "reviews" and "isReviewsLoading" to "false" with "fetchReviewsAction.fulfilled"', () => {
    const mockReviews = makeFakeReviews();
    const expectedState = {
      ...initialState,
      isReviewsLoading: false,
      reviews: mockReviews,
    };
    const result = offerProcess.reducer(
      initialState,
      fetchReviewsAction.fulfilled(mockReviews, '', '')
    );
    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsLoading" to "false", "isReviewPushingError" to "false" and add payload to reviews with "postReviewsAction.fulfilled"', () => {
    const mockReviews = makeFakeReviews();
    const mockReview = makeFakeReview();
    const mockUserReview: UserReview = {
      id: faker.string.nanoid(),
      comment: mockReview.comment,
      rating: mockReview.rating,
    };
    const initialPostReviewState = {
      ...initialState,
      reviews: mockReviews,
      isReviewPushing: false,
      isReviewPushingError: false,
    };

    const expectedState = {
      ...initialState,
      reviews: [mockReview, ...mockReviews],
      isReviewPushing: false,
      isReviewPushingError: false,
    };

    const result = offerProcess.reducer(
      initialPostReviewState,
      postReviewAction.fulfilled(mockReview, '', mockUserReview)
    );
    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsLoading" to "false", "isReviewPushingError" to "true" with "postReviewsAction.rejected"', () => {
    const expectedState = {
      ...initialState,
      isReviewPushing: false,
      isReviewPushingError: true,
    };
    const result = offerProcess.reducer(
      initialState,
      postReviewAction.rejected
    );

    expect(result).toEqual(expectedState);
  });
});
