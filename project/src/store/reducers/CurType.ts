/**
 * 当前输入状态
 * 线，图片，文字
 */

import { KEY_CHANAGECURTTYPE } from '../actions/CurType';

interface CurType {
  curType: SvgChildType,
  parent: SvgMainType,
}

const curInitData: CurType = {
  curType: 'handLine',
  parent: 'line',
};

const CurTypeReducer = (state: CurType = curInitData, action: CurType.ActionType): CurType => {
  switch (action.type) {
    case KEY_CHANAGECURTTYPE: {
      return {
        ...state,
        curType: action.value.curType,
        parent: action.value.parent,
      };
    }
    default:
      return state;
  }
};

export {
  CurTypeReducer,
};
