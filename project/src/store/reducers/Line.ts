/**
 * 线的属性
 * 粗细，颜色
 */

import {
  KEY_CHANAGELINEWEIGHT,
  KEY_CHANAGELINECOLOR,
} from '../actions/Line';

/**
 * 颜色为 十六进制
 */
const lineWeightInitState: LineInfoType = {
  id: '123',
  path: '',
  weight: 1,
  color: '',
  type: '',
};

const LineReducer = (state: LineInfoType = lineWeightInitState, action: Line.ActionType): LineInfoType => {
  switch (action.type) {
    case KEY_CHANAGELINEWEIGHT: {
      console.log('CHANAGELINEWEIGHT', state, action);
      return {
        ...state,
        weight: action.value,
      };
    }
    case KEY_CHANAGELINECOLOR: {
      console.log('KEY_CHANAGELINECOLOR', state, action);
      return {
        ...state,
        color: action.value,
      };
    }
    default:
      return state;
  }
};

export {
  LineReducer,
};
