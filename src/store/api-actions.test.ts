import { faker } from '@faker-js/faker';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { Action } from 'redux';
import thunk from 'redux-thunk';
import { APIRoute } from '../const';
import { createAPI } from '../services/api';
import * as tokenStorage from '../services/token';
import { State } from '../types';
import {
  AppThunkDispatch,
  extractActionsTypes,
  makeFakeAuthenticationData,
  makeFakeFullOffer,
  makeFakeOffers,
  makeFakeReview,
  makeFakeReviews,
  makeFakeState,
  makeFakeUseData,
} from '../utils/mocks';
import {
  checkAuthenticationAction,
  fetchFavoriteOffers,
  fetchFullOfferDataAction,
  fetchNearOffersAction,
  fetchOffersAction,
  fetchReviewsAction,
  loginAction,
  logoutAction,
  postReviewAction,
  pushFavoriteStatus,
} from './api-actions';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    State,
    Action<string>,
    AppThunkDispatch
  >(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator(makeFakeState());
  });
  describe('fetchOffersAction', () => {
    it('Should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled" when server response 200', async () => {
      const mockOffers = makeFakeOffers();
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);
      await store.dispatch(fetchOffersAction());

      const emittedActions = store.getActions();
      const actionTypes = extractActionsTypes(emittedActions);

      const fetchOffersActionFulfilled = emittedActions[1] as ReturnType<
        typeof fetchOffersAction.fulfilled
      >;

      expect(actionTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload).toEqual(mockOffers);
    });

    it('Should dispatch "fetchOffersAction.pending", "fetchOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);
      await store.dispatch(fetchOffersAction());

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type,
      ]);
    });
  });
  describe('fetchNearOffersAction', () => {
    it('Should dispatch "fetchNearOffersAction.pending", "fetchNearOffersAction.fulfilled" when server response 200', async () => {
      const mockNearOffers = makeFakeOffers();
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter
        .onGet(APIRoute.Offer + mockOfferId + APIRoute.NearBy)
        .reply(200, mockNearOffers);
      await store.dispatch(fetchNearOffersAction(mockOfferId));

      const emittedActions = store.getActions();
      const actionTypes = extractActionsTypes(emittedActions);

      const fetchNearOffersActionFulfilled = emittedActions[1] as ReturnType<
        typeof fetchNearOffersAction.fulfilled
      >;

      expect(actionTypes).toEqual([
        fetchNearOffersAction.pending.type,
        fetchNearOffersAction.fulfilled.type,
      ]);

      expect(fetchNearOffersActionFulfilled.payload).toEqual(mockNearOffers);
    });

    it('Should dispatch "fetchNearOffersAction.pending", "fetchNearOffersAction.rejected" when server response 400', async () => {
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter
        .onGet(APIRoute.Offer + mockOfferId + APIRoute.NearBy)
        .reply(404, []);
      await store.dispatch(fetchNearOffersAction(mockOfferId));

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchNearOffersAction.pending.type,
        fetchNearOffersAction.rejected.type,
      ]);
    });
  });
  describe('fetchFullOfferDataAction', () => {
    it('Should dispatch "fetchFullOfferDataAction.pending", "fetchFullOfferDataAction.fulfilled" when server response 200', async () => {
      const mockFullOffer = makeFakeFullOffer();
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter
        .onGet(APIRoute.Offer + mockOfferId)
        .reply(200, mockFullOffer);
      await store.dispatch(fetchFullOfferDataAction(mockOfferId));

      const emittedActions = store.getActions();
      const actionTypes = extractActionsTypes(emittedActions);

      const fetchFullOfferDataActionFulfilled = emittedActions[1] as ReturnType<
        typeof fetchFullOfferDataAction.fulfilled
      >;

      expect(actionTypes).toEqual([
        fetchFullOfferDataAction.pending.type,
        fetchFullOfferDataAction.fulfilled.type,
      ]);

      expect(fetchFullOfferDataActionFulfilled.payload).toEqual(mockFullOffer);
    });

    it('Should dispatch "fetchFullOfferDataAction.pending", "fetchFullOfferDataAction.rejected" when server response 400', async () => {
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter.onGet(APIRoute.Offer + mockOfferId).reply(404, []);
      await store.dispatch(fetchFullOfferDataAction(mockOfferId));

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchFullOfferDataAction.pending.type,
        fetchFullOfferDataAction.rejected.type,
      ]);
    });
  });
  describe('fetchReviewsAction', () => {
    it('Should dispatch "fetchReviewsAction.pending", "fetchReviewsAction.fulfilled" when server response 200', async () => {
      const mockReviews = makeFakeReviews();
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter
        .onGet(APIRoute.Reviews + mockOfferId)
        .reply(200, mockReviews);
      await store.dispatch(fetchReviewsAction(mockOfferId));

      const emittedActions = store.getActions();
      const actionTypes = extractActionsTypes(emittedActions);

      const fetchReviewsActionFulfilled = emittedActions[1] as ReturnType<
        typeof fetchReviewsAction.fulfilled
      >;

      expect(actionTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type,
      ]);

      expect(fetchReviewsActionFulfilled.payload).toEqual(mockReviews);
    });

    it('Should dispatch "fetchReviewsAction.pending", "fetchReviewsAction.rejected" when server response 400', async () => {
      const mockOfferId = faker.string.nanoid();
      mockAxiosAdapter.onGet(APIRoute.Reviews + mockOfferId).reply(404, []);
      await store.dispatch(fetchReviewsAction(mockOfferId));

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.rejected.type,
      ]);
    });
  });
  describe('checkAuthenticationAction', () => {
    it('Should dispatch "checkAuthenticationAction.pending", "checkAuthenticationAction.fulfilled" when server response 200', async () => {
      const mockUserData = makeFakeUseData();
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200, mockUserData);
      await store.dispatch(checkAuthenticationAction());

      const emittedActions = store.getActions();
      const actionTypes = extractActionsTypes(emittedActions);

      const checkAuthenticationActionFulfilled =
        emittedActions[1] as ReturnType<
          typeof checkAuthenticationAction.fulfilled
        >;

      expect(actionTypes).toEqual([
        checkAuthenticationAction.pending.type,
        checkAuthenticationAction.fulfilled.type,
      ]);

      expect(checkAuthenticationActionFulfilled.payload).toEqual(mockUserData);
    });

    it('Should dispatch "checkAuthenticationAction.pending", "checkAuthenticationAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(401, []);
      await store.dispatch(checkAuthenticationAction());

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        checkAuthenticationAction.pending.type,
        checkAuthenticationAction.rejected.type,
      ]);
    });
  });
  describe('loginAction', () => {
    it('Should dispatch "loginAction.pending", "loginAction.fulfilled" when server response 200', async () => {
      const mockAuthenticationData = makeFakeAuthenticationData();
      const mockUserData = makeFakeUseData();
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, mockUserData);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(mockAuthenticationData));

      const emittedActions = store.getActions();
      const actionTypes = extractActionsTypes(emittedActions);

      const loginActionFulfilled = emittedActions[1] as ReturnType<
        typeof loginAction.fulfilled
      >;

      expect(actionTypes).toEqual([
        loginAction.pending.type,
        loginAction.fulfilled.type,
      ]);

      expect(loginActionFulfilled.payload).toEqual(mockUserData);
      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(mockUserData.token);
    });

    it('Should dispatch "loginAction.pending", "loginAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(APIRoute.Login).reply(400, []);
      const mockAuthenticationData = makeFakeAuthenticationData();
      await store.dispatch(loginAction(mockAuthenticationData));

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        loginAction.pending.type,
        loginAction.rejected.type,
      ]);
    });
  });
  describe('logoutAction', () => {
    it('Should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockSaveToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      const actionTypes = extractActionsTypes(store.getActions());

      expect(actionTypes).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);

      expect(mockSaveToken).toBeCalledTimes(1);
    });

    it('Should dispatch "logoutAction.pending", "logoutAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(400);

      await store.dispatch(logoutAction());

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        logoutAction.pending.type,
        logoutAction.rejected.type,
      ]);
    });
  });
  describe('postReviewAction', () => {
    it('Should dispatch "postReviewAction.pending", "postReviewAction.fulfilled" when server response 201', async () => {
      const mockReview = makeFakeReview();
      const mockComment = {
        comment: mockReview.comment,
        rating: mockReview.rating,
        id: mockReview.id,
      };
      mockAxiosAdapter
        .onPost(APIRoute.Reviews + mockReview.id)
        .reply(200, mockReview);
      await store.dispatch(postReviewAction(mockComment));

      const emittedActions = store.getActions();
      const actionTypes = extractActionsTypes(emittedActions);

      const postReviewActionFulfilled = emittedActions[1] as ReturnType<
        typeof postReviewAction.fulfilled
      >;

      expect(actionTypes).toEqual([
        postReviewAction.pending.type,
        postReviewAction.fulfilled.type,
      ]);

      expect(postReviewActionFulfilled.payload).toEqual(mockReview);
    });

    it('Should dispatch "postReviewAction.pending", "postReviewAction.rejected" when server response 400', async () => {
      const mockReview = makeFakeReview();
      const mockComment = {
        comment: mockReview.comment,
        rating: mockReview.rating,
        id: mockReview.id,
      };
      mockAxiosAdapter.onPost(APIRoute.Reviews + mockReview.id).reply(400);
      await store.dispatch(postReviewAction(mockComment));

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        postReviewAction.pending.type,
        postReviewAction.rejected.type,
      ]);
    });
  });
  describe('fetchFavoriteOffers', () => {
    it('Should dispatch "fetchFavoriteOffers.pending", "fetchFavoriteOffers.fulfilled" when server response 200', async () => {
      const mockFavoriteOffers = makeFakeOffers();
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockFavoriteOffers);
      await store.dispatch(fetchFavoriteOffers());

      const emittedActions = store.getActions();
      const actionTypes = extractActionsTypes(emittedActions);

      const fetchFavoriteOffersFulfilled = emittedActions[1] as ReturnType<
        typeof fetchFavoriteOffers.fulfilled
      >;

      expect(actionTypes).toEqual([
        fetchFavoriteOffers.pending.type,
        fetchFavoriteOffers.fulfilled.type,
      ]);

      expect(fetchFavoriteOffersFulfilled.payload).toEqual(mockFavoriteOffers);
    });

    it('Should dispatch "fetchFavoriteOffers.pending", "fetchFavoriteOffers.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(401, []);
      await store.dispatch(fetchFavoriteOffers());

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteOffers.pending.type,
        fetchFavoriteOffers.rejected.type,
      ]);
    });
  });
  describe('pushFavoriteStatus', () => {
    it('Should dispatch "pushFavoriteStatus.pending", "pushFavoriteStatus.fulfilled" when server response 201', async () => {
      const mockFullOffer = makeFakeFullOffer();
      const mockIsFavoriteStatus = {
        id: mockFullOffer.id,
        isFavorite: !mockFullOffer.isFavorite,
      };
      mockAxiosAdapter
        .onPost(
          `${APIRoute.Favorite}/${mockIsFavoriteStatus.id}/${Number(
            mockIsFavoriteStatus.isFavorite
          )}`
        )
        .reply(200, mockFullOffer);
      await store.dispatch(pushFavoriteStatus(mockIsFavoriteStatus));

      const emittedActions = store.getActions();
      const actionTypes = extractActionsTypes(emittedActions);

      const pushFavoriteStatusFulfilled = emittedActions[1] as ReturnType<
        typeof pushFavoriteStatus.fulfilled
      >;

      expect(actionTypes).toEqual([
        pushFavoriteStatus.pending.type,
        pushFavoriteStatus.fulfilled.type,
      ]);

      expect(pushFavoriteStatusFulfilled.payload).toEqual(mockFullOffer);
    });

    it('Should dispatch "pushFavoriteStatus.pending", "pushFavoriteStatus.rejected" when server response 400', async () => {
      const mockIsFavoriteStatus = {
        id: faker.string.nanoid(),
        isFavorite: faker.datatype.boolean(),
      };
      mockAxiosAdapter
        .onPost(
          `${APIRoute.Favorite}/${mockIsFavoriteStatus.id}/${Number(
            mockIsFavoriteStatus.isFavorite
          )}`
        )
        .reply(400);
      await store.dispatch(pushFavoriteStatus(mockIsFavoriteStatus));

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        pushFavoriteStatus.pending.type,
        pushFavoriteStatus.rejected.type,
      ]);
    });
  });
});
