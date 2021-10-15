import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes, RouteNames } from "../../routes";

const PublicAppRouter: FC = () => {
  return (
    <Switch>
      {publicRoutes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
  );
};

export default PublicAppRouter;
