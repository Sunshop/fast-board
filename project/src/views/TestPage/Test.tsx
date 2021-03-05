import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class Test extends Component<RouteComponentProps> {
  constructor(props: any) {
    super(props);
    this.state = {};
    console.log('RouteComponentProps', this.props);
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
