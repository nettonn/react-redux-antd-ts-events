import { IUser } from "../../../models/IUser";

export interface AuthState {
  isAuthChecked: boolean;
  isAuth: boolean;
  user: IUser;
  error: string;
}

export const enum AuthActionEnum {
  SET_IS_AUTH_CHECKED = "SET_IS_AUTH_CHECKED",
  SET_IS_AUTH = "SET_IS_AUTH",
  SET_USER = "SET_USER",
  SET_ERROR = "SET_ERROR",
}

export interface SetIsAuthCheckedAction {
  type: AuthActionEnum.SET_IS_AUTH_CHECKED;
  payload: boolean;
}
export interface SetIsAuthAction {
  type: AuthActionEnum.SET_IS_AUTH;
  payload: boolean;
}

export interface SetUserAction {
  type: AuthActionEnum.SET_USER;
  payload: IUser;
}

export interface SetErrorAction {
  type: AuthActionEnum.SET_ERROR;
  payload: string;
}

export type AuthAction =
  | SetIsAuthCheckedAction
  | SetIsAuthAction
  | SetUserAction
  | SetErrorAction;
