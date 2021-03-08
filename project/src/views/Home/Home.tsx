import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ToolBar } from './ToolBar/ToolBar';

const Home: React.FC = () => {
  const [User, setUser] = useState('小霸王');

  useEffect(() => {
    document.title = '画板';
  });

  return (
    <div>
      <Link to="/test">test</Link>
      <h1>我是Home Page</h1>
      <button
        type="button"
        onClick={() => setUser('小码世界12312321')}
      >
        changeName
      </button>
      {
        User
      }
      <ToolBar />
    </div>
  );
};

export default withRouter(Home);
