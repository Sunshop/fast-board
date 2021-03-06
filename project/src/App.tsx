import React, { PureComponent, ErrorInfo } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { notification } from 'antd';
import { Routers } from './routers/index';

class App extends PureComponent {
  componentDidCatch(error: Error, info: ErrorInfo): void {
    notification.error({
      message: 'something was error',
      description: info.componentStack,
      duration: 5,
    });
  }

  render(): React.ReactNode {
    return (
      <Router>
        <Routers />
      </Router>
    );
  }
}

export { App };
