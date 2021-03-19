import React, {
  useRef,
  useState,
  useEffect,
} from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import './Board.less';
import { RootState } from '../../store/index';
import { ActionType } from '../../store/actions/Line';

const handleMouseMove = (e: any) => {};

const handleMouseDown = () => {};

const handleMouseUp = () => {};

const handleMouseOver = () => {};

const handleMouseOut = () => {};

const BoardFC: React.FC = () => {
  const lineInfo = useSelector((state: RootState) => state.Line);
  const dispatch = useDispatch();

  const change = () => {
    const params: ActionType = {
      type: 'changeLineColor',
      value: 'red',
    };
    dispatch(params);
  };

  console.log('lineInfo', lineInfo);
  return (
    <div
      className="svg-container"
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      onMouseUp={handleMouseUp}
    >
      <svg width="100%" height="100%">
        <circle
          cx="200"
          cy="200"
          r="40"
          stroke="black"
          strokeWidth="2"
          fill="red"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        {
          `board_${lineInfo.weight}__${lineInfo.color}_`
        }
        <Button type="primary" onClick={change}>
          Open the notification box
        </Button>
      </div>
    </div>
  );
};

export const Board = withRouter(BoardFC);
