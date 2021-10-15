import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privateRoutes, RouteNames } from "../../routes";

const PrivateAppRouter: FC = () => {
  return (
    <Switch>
      {privateRoutes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect to={RouteNames.EVENT} />
    </Switch>
  );
};

export default PrivateAppRouter;
