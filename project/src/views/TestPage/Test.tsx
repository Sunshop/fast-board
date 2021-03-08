import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class Test extends Component<RouteComponentProps> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        asffad
      </div>
    );
  }
}

export default withRouter(Test);
