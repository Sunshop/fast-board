import { RootState } from '@/store';
import React, {
  useState,
  useMemo,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
      key: 'line',
    },
    {
      id: '2',
      icon: '//ps.veazer.cn/images/line-alt.png',
      actIcon: '//ps.veazer.cn/images/line-alt-act.png',
      key: 'line',
    },
  ],
  [
    {
      id: '3',
      icon: '//ps.veazer.cn/images/img.png',
      actIcon: '//ps.veazer.cn/images/img-act.png',
      key: 'img',
    },
  ],
  [
    {
      id: '4',
      icon: '//ps.veazer.cn/images/tip.png',
      actIcon: '//ps.veazer.cn/images/tip-act.png',
      key: 'tip',
    },
  ],
];

interface ToolItemType {
  list: ToolChildType,
}

const ToolItem: React.FC<ToolItemType> = (props: ToolItemType) => {
  const { list } = props;
  const [childShow, setChildShow] = useState(false);
  const CurTypeStore = useSelector((state: RootState) => (state.CurType));
  const [main, setMain] = useState<ToolObjType>(list[0]);
  const dispatch = useDispatch();

  const upCurType = (e: SvgContentType) => {
    const params: CurType.ChangeCurTypeActionType = {
      type: 'changeCurType',
      value: e,
    };
    dispatch(params);
  };

  const onSelectFn = useCallback((item: ToolObjType) => {
    setMain(item);
    console.log(item.key);
    console.log(CurTypeStore);
    upCurType(item.key);
  }, [CurTypeStore]);

  const mainClick = (e: ToolObjType) => {
    upCurType(e.key);
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
            show: childShow || CurTypeStore.curType === main.key,
            icon: main.icon,
            actIcon: main.actIcon,
          }), [childShow, main, CurTypeStore.curType])}
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
