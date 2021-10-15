import {
  AuthActionEnum,
  SetErrorAction,
  SetIsAuthAction,
  SetIsAuthCheckedAction,
  SetUserAction,
} from "./types";
import { IUser } from "../../../models/IUser";
import { AppDispatch } from "../../index";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
  setIsAuthChecked: (auth: boolean): SetIsAuthCheckedAction => ({
    type: AuthActionEnum.SET_IS_AUTH_CHECKED,
    payload: auth,
  }),

  setIsAuth: (auth: boolean): SetIsAuthAction => ({
    type: AuthActionEnum.SET_IS_AUTH,
    payload: auth,
  }),
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setError(""));

        const response = await UserService.getUsers();
        const user = response.data.find(
          (user) => username === user.username && password === user.password
        );
        if (user) {
          localStorage.setItem("auth", "true");
          localStorage.setItem("username", username);
          dispatch(AuthActionCreators.setUser(user));
          dispatch(AuthActionCreators.setIsAuth(true));
        } else {
          dispatch(AuthActionCreators.setError("No such user"));
        }
      } catch (e: any) {
        dispatch(
          AuthActionCreators.setError(e.message || "There is an error!")
        );
      }
    },
  logout: () => (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(AuthActionCreators.setIsAuth(false));
    dispatch(AuthActionCreators.setUser({} as IUser));
  },
};
