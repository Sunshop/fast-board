import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './ToolBar.less';

interface ToolObjType {
  id: string,
  icon: string,
  actIcon: string,
  key: string,
  action: string,
}

type ToolChildType = ToolObjType[];

type ToolListType = ToolChildType[];

const lineToolList: ToolListType = [
  [
    {
      id: '1',
      icon: 'http://ps.veazer.cn/images/pencil.png',
      actIcon: 'http://ps.veazer.cn/images/pencil-act.png',
      key: '11',
      action: '11',
    },
    {
      id: '2',
      icon: 'http://ps.veazer.cn/images/pencil.png',
      actIcon: 'http://ps.veazer.cn/images/pencil-act.png',
      key: '2',
      action: '2',
    },
  ],
];

const preloadFn = (list: ToolChildType) => {
  const imgList: string[] = [];
  list.forEach((item) => {
    imgList.push(item.icon);
    imgList.push(item.actIcon);
  });
  imgList.forEach((v) => {
    const img = new Image();
    img.src = v;
  });
};

interface SimpleType {
  list: ToolChildType,
}

const Simple: React.FC<SimpleType> = (props: SimpleType) => {
  const { list } = props;
  const [show, setShow] = useState(false);
  const [main, setMain] = useState<ToolObjType>();

  useEffect(() => {
    setMain(list[0]);
    preloadFn(list); // 预加载icon
  });

  return (
    <div
      className="tool-item"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      key={main?.key}
    >
      <div className="main">
        <div
          className="icon-main"
          style={{
            visibility: (show ? 'hidden' : 'visible'),
            backgroundImage: `url(${main?.icon})`,
            backgroundSize: '100% 100%',
          }}
        />
        <div
          className="icon-main"
          style={{
            visibility: (show ? 'visible' : 'hidden'),
            backgroundImage: `url(${main?.actIcon})`,
            backgroundSize: '100% 100%',
          }}
        />
      </div>
      <div className="child-box" style={{ display: (show ? 'block' : 'none') }}>
        <div className="child-content">
          {
            list.map((item) => (
              <div className="child-item">
                123
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

const ToolBox: React.FC = () => {
  const Content = (list: ToolListType) => (
    <>
      {
        list.map((item) => <Simple key={`${Date.now()}123`} list={item} />)
      }
    </>
  );

  console.log('123');
  return (
    <div className="tool-container">
      {
        Content(lineToolList)
      }
      <div className="tool-wrapper">颜色</div>
    </div>
  );
};

export const ToolBar = withRouter(ToolBox);
