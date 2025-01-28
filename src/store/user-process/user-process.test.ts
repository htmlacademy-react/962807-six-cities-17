import { AuthenticationStatus } from '../../const';
import { makeFakeAuthenticationData, makeFakeUseData } from '../../utils/mocks';
import {
  checkAuthenticationAction,
  loginAction,
  logoutAction,
} from '../api-actions';
import { initialState, userProcess } from './user-process';

describe('UserProcess Slice', () => {
  const emptyAction = { type: '' };

  it('should return initial state with empty action', () => {
    const expectedState = { ...initialState };
    const result = userProcess.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const expectedState = { ...initialState };
    const result = userProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set "isLoginError" to "false", "authenticationStatus" to "AUTH", and set payload to "user" with "checkAuthenticationAction.fulfilled"', () => {
    const mockUser = makeFakeUseData();
    const expectedState = {
      ...initialState,
      isLoginError: false,
      authenticationStatus: AuthenticationStatus.Auth,
      user: mockUser,
    };
    const result = userProcess.reducer(
      {
        ...initialState,
        isLoginError: true,
      },
      checkAuthenticationAction.fulfilled(mockUser, '', undefined)
    );
    expect(result).toEqual(expectedState);
  });

  it('should set "isLoginError" to "true", "authenticationStatus" to "NO_AUTH" with "checkAuthenticationAction.rejected"', () => {
    const expectedState = {
      ...initialState,
      isLoginError: true,
      authenticationStatus: AuthenticationStatus.NoAuth,
    };
    const result = userProcess.reducer(
      initialState,
      checkAuthenticationAction.rejected
    );
    expect(result).toEqual(expectedState);
  });
  it('should set "isLoginError" to "false", "authenticationStatus" to "AUTH", and set payload to "user" with "loginAction.fulfilled"', () => {
    const mockUser = makeFakeUseData();
    const mockAuthenticationData = makeFakeAuthenticationData();
    const expectedState = {
      ...initialState,
      isLoginError: false,
      authenticationStatus: AuthenticationStatus.Auth,
      user: mockUser,
    };
    const result = userProcess.reducer(
      {
        ...initialState,
        isLoginError: true,
      },
      loginAction.fulfilled(mockUser, '', mockAuthenticationData)
    );
    expect(result).toEqual(expectedState);
  });

  it('should set "isLoginError" to "true", "authenticationStatus" to "NO_AUTH" with "loginAction.rejected"', () => {
    const expectedState = {
      ...initialState,
      isLoginError: true,
      authenticationStatus: AuthenticationStatus.NoAuth,
    };
    const result = userProcess.reducer(
      { ...initialState, authenticationStatus: AuthenticationStatus.Auth },
      loginAction.rejected
    );
    expect(result).toEqual(expectedState);
  });

  it('should set "isLogoutError" to "false", "authenticationStatus" to "NO_AUTH", and set "null" to "user" with "logoutAction.fulfilled"', () => {
    const logoutActionInitialState = {
      ...initialState,
      isLogoutError: true,
      authenticationStatus: AuthenticationStatus.Auth,
      user: makeFakeUseData(),
    };
    const expectedState = {
      ...initialState,
      isLogoutError: false,
      authenticationStatus: AuthenticationStatus.NoAuth,
      user: null,
    };
    const result = userProcess.reducer(
      logoutActionInitialState,
      logoutAction.fulfilled
    );
    expect(result).toEqual(expectedState);
  });
  it('should set "isLogoutError" to "true",  with "logoutAction.rejected"', () => {
    const expectedState = {
      ...initialState,
      isLogoutError: true,
    };
    const result = userProcess.reducer(initialState, logoutAction.rejected);
    expect(result).toEqual(expectedState);
  });
});
