import React, {
  useState,
  useEffect,
} from 'react';
import './Board.less';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';

let isDown = false;
let timer: NodeJS.Timeout | null;

const BoardFC: React.FC = () => {
  const [pathList, setPathList] = useState<PathListType>([]);
  const LineInfoStore = useSelector((state: RootState) => state.Line);
  const dispatch = useDispatch();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (timer) return;
    timer = setTimeout(() => {
      // console.log('handleMouseMove', e);
      if (isDown) {
        const LastPath = pathList[pathList.length - 1];
        (LastPath.value as LineType).d += `${(LastPath.value as LineType).d ? 'L' : 'M'}${e.clientX} ${e.clientY} `;
        setPathList([...pathList]);
      }
      timer = null;
    }, 10);
  };

  useEffect(() => {
    console.log(pathList);
  });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('handleMouseDown', e);
    isDown = true;
    const newPath: PathInfoType = {
      type: 'line',
      value: {
        id: `L_${Date.now()}`,
        d: '',
      },
    };
    pathList.push(newPath);
    console.log(pathList);
    setPathList([...pathList]);
  };

  const handleMouseUp = () => {
    console.log('handleMouseUp');
    isDown = false;
  };

  const handleMouseEnter = () => {
    console.log('进来 enter');
  };

  const handleMouseLeave = () => {
    console.log('离开 leave');
    isDown = false;
  };

  const createPath = () => {
    console.log('pathList', pathList);
    return (
      <>
        {
          pathList.map((item) => {
            switch (item.type) {
              case 'line': {
                return (
                  <path
                    key={(item.value as LineType).id}
                    id={(item.value as LineType).id}
                    d={(item.value as LineType).d}
                    fill="none"
                    stroke="red"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                );
              }
              default:
                return <></>;
            }
          })
        }
      </>
    );
  };

  const change = () => {
    const params: Line.ActionType = {
      type: 'changeLineColor',
      value: 'red',
    };
    dispatch(params);
  };

  return (
    <div
      className="svg-container"
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg width="100%" height="100%">
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
        <Button type="primary" onClick={change}>
          TEST
        </Button>
        <br />
        {
          `board_lineWeight:${LineInfoStore.weight}__lineColor:${LineInfoStore.color}`
        }
      </div>
    </div>
  );
};

export const Board = withRouter(BoardFC);
