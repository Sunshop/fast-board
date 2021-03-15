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

type PathInfo = Array<string>;

let isDown = false;
let timer: any = null;

const Home: React.FC = () => {
  const [User, setUser] = useState('fast');
  const [X_Y, setXY] = useState<LocationInfo>({ x: 0, y: 0 });
  const [Path, setPath] = useState<PathInfo>([]);

  useEffect(() => {
    document.title = '画板';
  });

  useEffect(() => {
    console.log('useEffect', Path);
  }, [Path]);

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

  const handleMouseDown = (e: any) => {
    console.log(e);
    isDown = true;
  };

  const handleMouseUp = (e: any) => {
    console.log(e);
    isDown = false;
  };

  const handleMouseOver = (e: any) => {
    console.log(e);
  };

  const handleMouseOut = (e: any) => {
    console.log(e);
    isDown = false;
  };

  const creatPath = () => {
    const d = Path.join(' ');
    return (
      <svg width="100%" height="100%">
        <path d={`${d}`} stroke="red" strokeWidth="3" strokeLinejoin="round" fill="none" />
      </svg>
    );
  };

  const ref = useRef(null);
  return (
    <div>
      <div
        ref={ref}
        style={{
          width: '1500px',
          height: '500px',
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
      <h1>Fast board</h1>
      <button
        type="button"
        onClick={() => setUser('Fast board')}
      >
        change
      </button>
      {
        User
      }
      <ToolBar />
    </div>
  );
};

export default withRouter(Home);
