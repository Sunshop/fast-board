/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useRef,
  useState,
  useEffect,
} from 'react';
import './Board.less';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { ActionType } from '../../store/actions/Line';
import { PathListType, LineType, SvgContentType } from './BoardType';

const handleMouseMove = (e: any) => {};

const handleMouseDown = () => {};

const handleMouseUp = () => {};

const handleMouseOver = () => {};

const handleMouseOut = () => {};

const BoardFC: React.FC = () => {
  const [pathList, setPathList] = useState<PathListType>([]);
  const lineInfo = useSelector((state: RootState) => state.Line);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('pathList', pathList);
  });

  const createPath = () => {
    console.log('123');
    return (
      <>
        {
          pathList.map((item, index) => {
            switch (item.type) {
              case SvgContentType.line: {
                return (
                  <path
                    key={`${index + 1}`}
                    id={(item.value as LineType).id}
                    d={(item.value as LineType).d}
                  />
                );
              }
              default:
                return (
                  <div>456</div>
                );
            }
          })
        }
      </>
    );
  };

  const change = () => {
    const params: ActionType = {
      type: 'changeLineColor',
      value: 'red',
    };
    dispatch(params);
    const test: PathListType = [
      {
        type: SvgContentType.line,
        value: {
          id: 'Key',
          d: 'M150 0 L75 200 L225 200 Z',
        },
      },
    ];
    setPathList(test);
  };

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
        {
          createPath()
        }
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
