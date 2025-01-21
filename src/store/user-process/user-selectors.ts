import { AuthStatus, NameSpace } from '../../const';
import { State, UserData } from '../../types';

export const getAuthStatus = (state: State): AuthStatus =>
  state[NameSpace.User].authStatus;
export const getUserData = (state: State): UserData | null =>
  state[NameSpace.User].user;

// export const get = (state: State):  =>
//   state[NameSpace.User].;
// export const get = (state: State):  =>
//   state[NameSpace.User].;
// export const get = (state: State):  =>
//   state[NameSpace.User].;
// export const get = (state: State):  =>
//   state[NameSpace.User].;
// export const get = (state: State):  =>
//   state[NameSpace.User].;
// export const get = (state: State):  =>
//   state[NameSpace.User].;
