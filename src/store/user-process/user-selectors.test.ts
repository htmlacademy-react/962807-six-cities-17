import { makeFakeState } from '../../utils/mocks';
import { getAuthenticationStatus, getUserData } from './user-selectors';

describe('UserProcess selectors', () => {
  const initialState = makeFakeState();
  it('should return authenticationStatus from state', () => {
    const { authenticationStatus } = initialState.User;
    const result = getAuthenticationStatus(initialState);
    expect(result).toBe(authenticationStatus);
  });
  it('should return user from state', () => {
    const { user } = initialState.User;
    const result = getUserData(initialState);
    expect(result).toBe(user);
  });
});
