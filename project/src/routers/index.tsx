import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routers } from './config';

const NotFound: React.FunctionComponent = () => (<div>404</div>);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Routers = () => (
  <Switch>
    {
      routers.map((route) => (
        <Route
          exact
          key={route.path}
          path={route.path}
          component={route.component}
        />
      ))
    }

    <Route component={NotFound} />
  </Switch>
);

export { Routers };
