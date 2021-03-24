/**
 * 当前输入状态
 * 线，图片，文字
 */

import { KEY_CHANAGECURTTYPE } from '../actions/CurType';

interface CurType {
  curType: SvgContentType,
}

const curInitData: CurType = {
  curType: 'line',
};

const CurTypeReducer = (state: CurType = curInitData, action: CurType.ChangeCurTypeActionType): CurType => {
  switch (action.type) {
    case KEY_CHANAGECURTTYPE: {
      return {
        ...state,
        curType: action.value,
      };
    }
    default:
      return state;
  }
};

export {
  CurTypeReducer,
};
