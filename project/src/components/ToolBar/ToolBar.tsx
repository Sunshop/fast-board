import { RootState } from '@/store';
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  MemoIconFc,
  ToolObjType,
  ToolChildType,
  ToolListType,
} from './Common';
import './ToolBar.less';

const initToolObj: ToolObjType = {
  id: '',
  icon: '',
  actIcon: '',
  key: 'line',
  action: '',
};

const lineToolList: ToolListType = [
  [
    {
      id: '1',
      icon: '//ps.veazer.cn/images/pencil.png',
      actIcon: '//ps.veazer.cn/images/pencil-act.png',
      key: 'line',
      action: '',
    },
    {
      id: '2',
      icon: '//ps.veazer.cn/images/line-alt.png',
      actIcon: '//ps.veazer.cn/images/line-alt-act.png',
      key: 'line',
      action: '',
    },
  ],
  [
    {
      id: '3',
      icon: '//ps.veazer.cn/images/pencil.png',
      actIcon: '//ps.veazer.cn/images/pencil-act.png',
      key: 'img',
      action: '',
    },
    {
      id: '4',
      icon: '//ps.veazer.cn/images/line-alt.png',
      actIcon: '//ps.veazer.cn/images/line-alt-act.png',
      key: 'img',
      action: '',
    },
  ],
];

interface ToolItemType {
  list: ToolChildType,
}

const ToolItem: React.FC<ToolItemType> = (props: ToolItemType) => {
  const { list } = props;
  const [childShow, setChildShow] = useState(false);
  const [childShowIndex, setChildShowIndex] = useState(-1);
  const CurTypeStore = useSelector((state: RootState) => (state.CurType));
  const [main, setMain] = useState<ToolObjType>(initToolObj);

  const dispatch = useDispatch();

  useEffect(() => {
    setMain(list[0]);
    console.log(CurTypeStore);
  }, []);

  const setMainFn = (item: ToolObjType) => {
    setMain(item);
    setChildShow(false);
    console.log(item.key);
    const params: CurType.ChangeCurTypeActionType = {
      type: 'changeCurType',
      value: item.key,
    };
    dispatch(params);
  };

  console.log('ToolItem render');

  return (
    <div
      className="tool-item"
      onMouseEnter={() => setChildShow(true)}
      onMouseLeave={() => setChildShow(false)}
      key={main?.id}
    >
      <div className="main">
        <MemoIconFc
          item={useMemo(() => ({
            show: childShow || CurTypeStore.curType === main.key,
            icon: main.icon,
            actIcon: main.actIcon,
          }), [childShow, main, CurTypeStore.curType])}
        />
      </div>
      <div className={`child-box ${childShow ? 'show' : ''}`} key="index">
        <div className="child-content">
          {
            list.map((item, index) => (
              <div
                className="child-item"
                key={item.id}
                onMouseEnter={() => setChildShowIndex(index)}
                onMouseLeave={() => setChildShowIndex(-1)}
                onClick={() => setMainFn(item)}
              >
                <MemoIconFc
                  item={useMemo(() => ({
                    show: index === childShowIndex,
                    icon: item.icon,
                    actIcon: item.actIcon,
                  }), [item, childShowIndex])}
                />
              </div>
            ))
          }
        </div>
        <div className="arrow" />
      </div>
    </div>
  );
};

const ToolBox: React.FC = () => {
  console.log('ToolBox effect');
  return (
    <div className="tool-container">
      {
        lineToolList.map((item) => <ToolItem list={item} />)
      }
      {/* <div className="tool-wrapper">颜色</div> */}
    </div>
  );
};

export const ToolBar = withRouter(ToolBox);
