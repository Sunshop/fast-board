import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Home: React.FC = (props) => {
  console.log('123', props);
  return (
    <div>
      <h1>我是Home Page</h1>
    </div>
  );
};

export default withRouter(Home);
