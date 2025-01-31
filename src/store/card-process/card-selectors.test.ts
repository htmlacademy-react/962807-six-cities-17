import { makeFakeState } from '../../utils/mocks';
import {
  getActiveCardOffer,
  getCurrentCity,
  getCurrentSort,
  getFavoriteOffers,
  getIsOffersLoading,
  getIsOffersLoadingError,
  getOfferByCityQuantity,
  getOffersByCity,
} from './card-selectors';

describe('CardProcess selectors', () => {
  const initialState = makeFakeState();

  it('should return currentCity from state', () => {
    const { currentCity } = initialState.Cards;
    const result = getCurrentCity(initialState);
    expect(result).toBe(currentCity);
  });
  it('should return isOffersLoading from state', () => {
    const { isOffersLoading } = initialState.Cards;
    const result = getIsOffersLoading(initialState);
    expect(result).toBe(isOffersLoading);
  });
  it('should return offersByCity from state', () => {
    const { offersByCity } = initialState.Cards;
    const result = getOffersByCity(initialState);
    expect(result).toBe(offersByCity);
  });
  it('should return favoriteOffers from state', () => {
    const { favoriteOffers } = initialState.Cards;
    const result = getFavoriteOffers(initialState);
    expect(result).toBe(favoriteOffers);
  });
  it('should return sort from state', () => {
    const { sort } = initialState.Cards;
    const result = getCurrentSort(initialState);
    expect(result).toBe(sort);
  });
  it('should return activeCardOffer from state', () => {
    const { activeCardOffer } = initialState.Cards;
    const result = getActiveCardOffer(initialState);
    expect(result).toBe(activeCardOffer);
  });
  it('should return offersByCityQuantity from state', () => {
    const { offersByCityQuantity } = initialState.Cards;
    const result = getOfferByCityQuantity(initialState);
    expect(result).toBe(offersByCityQuantity);
  });
  it('should return isOffersLoadingError from state', () => {
    const { isOffersLoadingError } = initialState.Cards;
    const result = getIsOffersLoadingError(initialState);
    expect(result).toBe(isOffersLoadingError);
  });
});
