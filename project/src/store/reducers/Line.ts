/**
 * 线的属性
 * 粗细，颜色
 */

import {
  KEY_CHANAGELINEWEIGHT,
  KEY_CHANAGELINECOLOR,
  ActionType,
} from '../actions/Line';

interface LineInfo {
  weight: number,
  color: string,
}

/**
 * 颜色为 十六进制
 */
const lineWeightInitState: LineInfo = {
  weight: 1,
  color: '#000',
};

const LineReducer = (state: LineInfo = lineWeightInitState, action: ActionType): LineInfo => {
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
