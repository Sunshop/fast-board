import React, { useState, useEffect, memo } from 'react';

const boxStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: '64px',
  height: '64px',
  background: '#fff',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
};

interface ClearType {
  onClear: () => void,
}

const ClearAll: React.FC<ClearType> = (props: ClearType) => {
  const [show, setShow] = useState(false);
  const { onClear } = props;

  useEffect(() => {
    const imgList: string[] = [
      '//ps.veazer.cn/images/clear-all-act.png',
      '//ps.veazer.cn/images/clear-all.png',
    ];
    imgList.forEach((v) => {
      const img = new Image();
      img.src = v;
    });
  }, []);

  return (
    <div
      style={boxStyle}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => onClear()}
    >
      <img
        style={{
          width: '42px',
          height: '42px',
        }}
        src={`${show ? '//ps.veazer.cn/images/clear-all-act.png' : '//ps.veazer.cn/images/clear-all.png'}`}
        alt=""
      />
    </div>
  );
};

const MemoClearAll = memo(ClearAll);

export {
  MemoClearAll,
};
