import React, {
  useState,
  useMemo,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RootState } from '@/store';
import {
  MemoIconFc,
  MemoChildContent,
  ToolObjType,
  ToolChildType,
  ToolListType,
} from './Common';
import './ToolBar.less';

const lineToolList: ToolListType = [
  [
    {
      id: '1',
      icon: '//ps.veazer.cn/images/pencil.png',
      actIcon: '//ps.veazer.cn/images/pencil-act.png',
      parent: 'line',
      key: 'handLine',
    },
    {
      id: '2',
      icon: '//ps.veazer.cn/images/line-alt.png',
      actIcon: '//ps.veazer.cn/images/line-alt-act.png',
      parent: 'line',
      key: 'straightLine',
    },
  ],
  [
    {
      id: '3',
      icon: '//ps.veazer.cn/images/text.png',
      actIcon: '//ps.veazer.cn/images/text-act.png',
      parent: 'text',
      key: 'text',
    },
  ],
  [
    {
      id: '4',
      icon: '//ps.veazer.cn/images/img.png',
      actIcon: '//ps.veazer.cn/images/img-act.png',
      parent: 'img',
      key: 'img',
    },
  ],
  [
    {
      id: '5',
      icon: '//ps.veazer.cn/images/tip.png',
      actIcon: '//ps.veazer.cn/images/tip-act.png',
      parent: 'tip',
      key: 'tip',
    },
  ],
];

interface ToolItemType {
  list: ToolChildType,
}

const ToolItem: React.FC<ToolItemType> = (props: ToolItemType) => {
  const { list } = props;
  const CurTypeStore = useSelector((state: RootState) => (state.CurType));
  const [childShow, setChildShow] = useState(false);
  const [main, setMain] = useState<ToolObjType>(list[0]);
  const dispatch = useDispatch();

  const upCurType = (e: ToolObjType) => {
    const params: CurType.ChangeCurTypeActionType = {
      type: 'changeCurType',
      value: {
        curType: e.key,
        parent: e.parent,
      },
    };
    dispatch(params);
  };

  const onSelectFn = useCallback((item: ToolObjType) => {
    setMain(item);
    upCurType(item);
  }, [CurTypeStore]);

  const mainClick = (e: ToolObjType) => {
    upCurType(e);
  };

  return (
    <div
      className="tool-item"
      onMouseEnter={() => setChildShow(true)}
      onMouseLeave={() => setChildShow(false)}
    >
      <div className="main" onClick={() => mainClick(main)}>
        <MemoIconFc
          item={useMemo(() => ({
            show: childShow || CurTypeStore.parent === main.parent,
            icon: main.icon,
            actIcon: main.actIcon,
          }), [childShow, main, CurTypeStore.parent])}
        />
      </div>
      {
        list.length > 1 && (
          <div className={`child-box ${childShow ? 'show' : ''}`} key="index">
            <MemoChildContent list={useMemo(() => (list), [])} onSelect={onSelectFn} />
            <div className="arrow" />
          </div>
        )
      }
    </div>
  );
};

const ToolBox: React.FC = () => {
  console.log('ToolBox effect');
  return (
    <div className="tool-container">
      {
        lineToolList.map((item, index) => <ToolItem key={index.toString()} list={item} />)
      }
      {/* <div className="tool-wrapper">颜色</div> */}
    </div>
  );
};

export const ToolBar = withRouter(ToolBox);
