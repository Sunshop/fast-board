import React, {
  useEffect,
} from 'react';
import { withRouter } from 'react-router-dom';
import { Board } from '../../components/Board/Board';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = '画板';
  });

  return (
    <div>
      <Board />
    </div>
  );
};

export default withRouter(Home);
