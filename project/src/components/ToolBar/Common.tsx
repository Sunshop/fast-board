import React, {
  memo,
  useState,
  useMemo,
} from 'react';

export interface ToolObjType {
  id: string,
  icon: string,
  actIcon: string,
  key: SvgContentType,
}
export type ToolChildType = ToolObjType[];
export type ToolListType = ToolChildType[];

interface IconFnType {
  item: {
    show: boolean,
    icon: string,
    actIcon: string,
  }
}

const IconFc: React.FC<IconFnType> = (props: IconFnType) => {
  const {
    item: {
      show = false,
      icon,
      actIcon,
    },
  } = props;
  return (
    <>
      <div
        className="icon-main"
        style={{
          visibility: (show ? 'visible' : 'hidden'),
          backgroundImage: `url(${actIcon})`,
          backgroundSize: '100% 100%',
        }}
      />
      <div
        className="icon-main"
        style={{
          visibility: (show ? 'hidden' : 'visible'),
          backgroundImage: `url(${icon})`,
          backgroundSize: '100% 100%',
        }}
      />
    </>
  );
};

const MemoIconFc = memo(IconFc);
interface ChildContentType {
  list: ToolChildType,
  onSelect: (item: ToolObjType) => void,
}

const ChildContent: React.FC<ChildContentType> = (props: ChildContentType) => {
  const { list, onSelect } = props;
  const [childShowIndex, setChildShowIndex] = useState(-1);

  return (
    <div className="child-content">
      {
        list.map((item, index) => (
          <div
            className="child-item"
            key={item.id}
            onMouseEnter={() => setChildShowIndex(index)}
            onMouseLeave={() => setChildShowIndex(-1)}
            onClick={() => onSelect(item)}
          >
            <MemoIconFc
              item={useMemo(() => ({
                show: index === childShowIndex,
                icon: item.icon,
                actIcon: item.actIcon,
              }), [childShowIndex])}
            />
          </div>
        ))
      }
    </div>
  );
};

const MemoChildContent = memo(ChildContent);

export {
  MemoIconFc,
  MemoChildContent,
};
