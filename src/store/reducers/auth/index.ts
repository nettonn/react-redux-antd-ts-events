import { AuthAction, AuthActionEnum, AuthState } from "./types";
import { IUser } from "../../../models/IUser";

const initialState: AuthState = {
  isAuthChecked: false,
  isAuth: false,
  user: {} as IUser,
  error: "",
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_IS_AUTH_CHECKED:
      return { ...state, isAuthChecked: action.payload };
    case AuthActionEnum.SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActionEnum.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionEnum.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
