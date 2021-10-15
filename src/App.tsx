import React, { FC, useEffect } from "react";
import "./App.css";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";
import { AuthActionCreators } from "./store/reducers/auth/action-creators";
import { useTypedSelector } from "./hooks/useTypedSelector";
import PublicLayout from "./components/Layout/PublicLayout";
import PrivateLayout from "./components/Layout/PrivateLayout";
import FullScreenLoader from "./components/FullScreenLoader";

const App: FC = () => {
  const { setUser, setIsAuth, setIsAuthChecked } =
    useActions(AuthActionCreators);

  const { isAuth, isAuthChecked } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username") } as IUser);
      setIsAuth(true);
    }
    setIsAuthChecked(true);
  }, [setUser, setIsAuthChecked, setIsAuth]);

  if (!isAuthChecked) {
    return <FullScreenLoader />;
  }

  if (!isAuth) {
    return <PublicLayout />;
  }

  return <PrivateLayout />;
};

export default App;
