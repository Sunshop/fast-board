import React, {
  useEffect,
  memo,
} from 'react';

export interface ToolObjType {
  id: string,
  icon: string,
  actIcon: string,
  key: SvgContentType,
  action: string,
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

export {
  MemoIconFc,
};
