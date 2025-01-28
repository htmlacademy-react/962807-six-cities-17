import { faker } from '@faker-js/faker';
import { CITIES_DATA, SortingOption } from '../../const';
import {
  cardProcess,
  changeActiveCard,
  changeCity,
  changeSort,
  initialState,
} from './card-process';

describe('CardProcess Slice', () => {
  const emptyAction = { type: '' };

  it('should return initial state with empty action', () => {
    const expectedState = { ...initialState };
    const result = cardProcess.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const expectedState = { ...initialState };
    const result = cardProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should change city with "changeCity" action', () => {
    const expectedState = { ...initialState, currentCity: CITIES_DATA[1] };
    const result = cardProcess.reducer(
      initialState,
      changeCity(CITIES_DATA[1].name)
    );
    expect(result).toEqual(expectedState);
  });

  it('should change sort with "changeSort" action', () => {
    const expectedState = {
      ...initialState,
      sort: SortingOption.PRICE_HIGHT_LOW,
    };
    const result = cardProcess.reducer(
      initialState,
      changeSort(SortingOption.PRICE_HIGHT_LOW)
    );
    expect(result).toEqual(expectedState);
  });

  it('should change activeCardOffer with "changeActiveCard" action', () => {
    const activeCardOfferId = faker.string.nanoid();
    const expectedState = {
      ...initialState,
      activeCardOffer: activeCardOfferId,
    };
    const result = cardProcess.reducer(
      initialState,
      changeActiveCard(activeCardOfferId)
    );
    expect(result).toEqual(expectedState);
  });
});
