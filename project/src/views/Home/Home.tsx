import React, {
  useEffect,
} from 'react';
import { withRouter } from 'react-router-dom';
import { Board } from '@/components/Board/Board';
import { ToolBar } from '@/components/ToolBar/ToolBar';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = '画板';
  });

  return (
    <div>
      <Board />
      <ToolBar />
    </div>
  );
};

export default withRouter(Home);
