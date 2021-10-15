import React from "react";
// const Login = React.lazy(() => import("../pages/Login"));
// const Event = React.lazy(() => import("../pages/Event"));
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
  EVENT_2 = "/calendar2",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: Login, exact: true },
];
export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, component: Event, exact: true },
  { path: RouteNames.EVENT_2, component: Event, exact: true },
];
