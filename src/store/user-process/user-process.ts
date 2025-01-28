import { createSlice } from '@reduxjs/toolkit';
import { AuthenticationStatus, NameSpace } from '../../const';
import { UserProcessType } from '../../types';
import {
  checkAuthenticationAction,
  loginAction,
  logoutAction,
} from '../api-actions';

const initialState: UserProcessType = {
  authenticationStatus: AuthenticationStatus.Unknown,
  user: null,
  isLogin: false,
  isLogout: false,
  isLoginError: false,
  isLogoutError: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthenticationAction.fulfilled, (state, action) => {
        state.isLoginError = false;
        state.authenticationStatus = AuthenticationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthenticationAction.rejected, (state) => {
        state.isLoginError = true;
        state.authenticationStatus = AuthenticationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoginError = false;
        state.authenticationStatus = AuthenticationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isLoginError = true;
        state.authenticationStatus = AuthenticationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.isLogoutError = false;
        state.authenticationStatus = AuthenticationStatus.NoAuth;
        state.user = null;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.isLogoutError = true;
      });
  },
});

export { initialState };
