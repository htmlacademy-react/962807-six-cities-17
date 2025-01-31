import { makeFakeState } from '../../utils/mocks';
import { getFullOfferData, getIsFullOfferLoading, getIsFullOfferLoadingError, getIsNearOffersLoading, getIsNearOffersLoadingError, getIsReviewsLoading, getIsReviewsLoadingError, getNearOffersData, getReviewsData } from './offer-selectors';

describe('OfferProcess selectors', () => {
  const initialState = makeFakeState();
  it('should return isFullOfferLoading from state', () => {
    const { isFullOfferLoading } = initialState.Offer;
    const result = getIsFullOfferLoading(initialState);
    expect(result).toBe(isFullOfferLoading);
  });
  it('should return isReviewsLoading from state', () => {
    const { isReviewsLoading } = initialState.Offer;
    const result = getIsReviewsLoading(initialState);
    expect(result).toBe(isReviewsLoading);
  });
  it('should return isNearOffersLoading from state', () => {
    const { isNearOffersLoading } = initialState.Offer;
    const result = getIsNearOffersLoading(initialState);
    expect(result).toBe(isNearOffersLoading);
  });
  it('should return isFullOfferLoadingError from state', () => {
    const { isFullOfferLoadingError } = initialState.Offer;
    const result = getIsFullOfferLoadingError(initialState);
    expect(result).toBe(isFullOfferLoadingError);
  });
  it('should return isReviewsLoadingError from state', () => {
    const { isReviewsLoadingError } = initialState.Offer;
    const result = getIsReviewsLoadingError(initialState);
    expect(result).toBe(isReviewsLoadingError);
  });
  it('should return isNearOffersLoadingError from state', () => {
    const { isNearOffersLoadingError } = initialState.Offer;
    const result = getIsNearOffersLoadingError(initialState);
    expect(result).toBe(isNearOffersLoadingError);
  });
  it('should return offer from state', () => {
    const { offer } = initialState.Offer;
    const result = getFullOfferData(initialState);
    expect(result).toBe(offer);
  });
  it('should return reviews from state', () => {
    const { reviews } = initialState.Offer;
    const result = getReviewsData(initialState);
    expect(result).toBe(reviews);
  });
  it('should return nearOffers from state', () => {
    const { nearOffers } = initialState.Offer;
    const result = getNearOffersData(initialState);
    expect(result).toBe(nearOffers);
  });
});
