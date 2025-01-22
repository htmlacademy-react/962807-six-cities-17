import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../const';
import { UserProcessType } from '../../types';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const initialState: UserProcessType = {
  authStatus: AuthStatus.Unknown,
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
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.isLoginError = false;
        state.authStatus = AuthStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.isLoginError = true;
        state.authStatus = AuthStatus.NoAuth;
      })

      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoginError = false;
        state.authStatus = AuthStatus.Auth;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isLoginError = true;
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.isLogoutError = false;
        state.authStatus = AuthStatus.NoAuth;
        state.user = null;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.isLogoutError = true;
      });
  },
});
