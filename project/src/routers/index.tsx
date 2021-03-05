import React, { Component, ComponentType, ReactElement } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import { Home, Test } from '../views/index';

interface RouteType {
  path: string,
  component: ComponentType,
}

export const routers: Array<RouteType> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/test',
    component: Test,
  },
];

class Routes extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render(): ReactElement {
    return (
      <Switch>
        {
          routers.map((router) => (
            <Route
              exact
              key={router.path}
              path={router.path}
              component={router.component}
            />
          ))
        }
      </Switch>
    );
  }
}

export default Routes;
