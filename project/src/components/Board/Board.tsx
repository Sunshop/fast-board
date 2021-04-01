import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import './Board.less';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { MemoClearAll } from './ClearAll';

interface XyType {
  x: number,
  y: number,
}

let isDown = false;
let timer: NodeJS.Timeout | null;

const BoardFC: React.FC = () => {
  const [pathList, setPathList] = useState<PathListType>([]);
  const [xy, setXY] = useState<XyType>({ x: 0, y: 0 });
  const LineInfoStore = useSelector((state: RootState) => (state));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // setXY({ x: e.clientX, y: e.clientY });
    if (timer) return;
    timer = setTimeout(() => {
      // console.log('handleMouseMove', e);
      if (isDown) {
        const { CurType: { curType = '' } } = LineInfoStore;
        const LastPath = pathList[pathList.length - 1];
        if (curType === 'handLine') {
          (LastPath.value as LineInfoType).path += `${(LastPath.value as LineInfoType).path ? 'L' : 'M'}${e.clientX} ${e.clientY} `;
        } else if (curType === 'straightLine') {
          if (!(LastPath.value as LineInfoType).path) {
            (LastPath.value as LineInfoType).path = `M${e.clientX} ${e.clientY}`;
          } else {
            const first = (LastPath.value as LineInfoType).path.split(' ');
            const x = first[0].substr(1);
            const y = first[1];
            (LastPath.value as LineInfoType).path = `M${x} ${y} L${e.clientX} ${e.clientY}`;
          }
        }
        setPathList([...pathList]);
      }
      timer = null;
    }, 10);
  };

  useEffect(() => {
    console.log('LineInfoStore', LineInfoStore);
  });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('handleMouseDown', e);
    isDown = true;
    const { CurType: { parent = '' }, Line } = LineInfoStore;
    if (parent === 'line') {
      const newPath: PathInfoType = {
        type: 'line',
        value: {
          id: `L_${Date.now()}`,
          path: '',
          weight: Line.weight,
          color: Line.color,
          type: '1',
        },
      };
      pathList.push(newPath);
    }
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
                    key={(item.value as LineInfoType).id}
                    id={(item.value as LineInfoType).id}
                    d={(item.value as LineInfoType).path}
                    fill="none"
                    stroke={(item.value as LineInfoType).color}
                    strokeWidth={(item.value as LineInfoType).weight}
                    strokeLinejoin="round"
                    strokeLinecap="round"
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

  // 抹除按钮
  const handleClear = useCallback(() => {
    setPathList([]);
  }, []);

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
        {
          `x:${xy.x}__y:${xy.y}`
        }
      </div>
      <MemoClearAll onClear={handleClear} />
    </div>
  );
};

export const Board = withRouter(BoardFC);
