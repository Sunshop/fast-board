import React, {
  useRef,
  useState,
  useEffect,
} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ToolBar } from './ToolBar/ToolBar';
import { Board } from '../../components/Board/Board';
import { RootState } from '../../store/index';

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

  const lineInfo = useSelector((state: RootState) => state.Line);
  const dispatch = useDispatch();

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
      // if (isDown) {
      //   if (Path.length) {
      //     Path.push(`L${e.clientX} ${e.clientY}`);
      //   } else {
      //     Path.push(`M${e.clientX} ${e.clientY}`);
      //   }
      //   const newPath = Path.concat();
      //   setPath(newPath);
      // }
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

  const change = () => {
    dispatch({
      type: 'changeLineWeight',
      value: 3,
    });
  };

  return (
    <div>
      <Board />
      {
        `${lineInfo.weight}__${lineInfo.color}_`
      }
      <Link to="/test">test</Link>
      <Button type="primary" onClick={change}>
        Open the notification box
      </Button>
      {/* <ToolBar /> */}
    </div>
  );
};

export default withRouter(Home);
