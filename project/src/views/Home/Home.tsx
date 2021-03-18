import React, { useRef, useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ToolBar } from './ToolBar/ToolBar';

interface LocationInfo {
  x: number,
  y: number,
}

interface MouseInfo {
  clientX: number,
  clientY: number,
}

enum PathType {
  line = 1,
  img = 2,
  txt = 3,
}

interface PathObj {
  type: PathType,
  val: string | Array<string>,
}

type PathInfo = Array<PathObj>;

let isDown = false;
let timer: any = null;

const Home: React.FC = () => {
  const [X_Y, setXY] = useState<LocationInfo>({ x: 0, y: 0 });
  const [Path, setPath] = useState<PathInfo>([]);

  useEffect(() => {
    document.title = '画板';
  });

  const handleMouseMove = (e: MouseInfo) => {
    if (timer) return;
    timer = setTimeout(() => {
      setXY({
        x: e.clientX,
        y: e.clientY,
      });
      if (isDown) {
        if (Path.length) {
          Path.push(`L${e.clientX} ${e.clientY}`);
        } else {
          Path.push(`M${e.clientX} ${e.clientY}`);
        }
        const newPath = Path.concat();
        setPath(newPath);
      }
      timer = null;
    }, 20);
  };

  const handleMouseDown = () => {
    isDown = true;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseOver = () => {
  };

  const handleMouseOut = () => {
    isDown = false;
  };

  const creatPath = () => {
    const d = Path.join(' ');
    return (
      <svg width="100%" height="100%">
        {
          Path.map((item) => {
            if (item.type === 1) {
              return <path d={`${d}`} stroke="red" strokeWidth="3" strokeLinejoin="round" fill="none" />;
            }
            return <path d={`${d}`} stroke="red" strokeWidth="3" strokeLinejoin="round" fill="none" />;
          })
        }
      </svg>
    );
  };

  const ref = useRef(null);
  return (
    <div>
      <div
        ref={ref}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#999',
          position: 'relative',
        }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        onMouseUp={handleMouseUp}
      >
        {
          creatPath()
        }
        <div
          style={{
            color: 'blue',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          {
            `${X_Y.x}--${X_Y.y}`
          }
        </div>
      </div>
      <Link to="/test">test</Link>
      <ToolBar />
    </div>
  );
};

export default withRouter(Home);
