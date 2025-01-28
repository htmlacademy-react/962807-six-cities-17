import { AuthenticationStatus, NameSpace } from '../../const';
import { State, UserData } from '../../types';

export const getAuthenticationStatus = (state: State): AuthenticationStatus =>
  state[NameSpace.User].authenticationStatus;
export const getUserData = (state: State): UserData | null =>
  state[NameSpace.User].user;
