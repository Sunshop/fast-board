/**
 * 当前画笔的状态
 */
import { drawList } from '../config/drawList';
import { SET_DRAW } from './mutationType';

const status = {
	state: () => ({
		count: 0,
		drawList: drawList, // 画笔 list
		curDraw: drawList[0].type, // 当前 画笔
		lineStyle: {
			color: '#333333',
			weight: 2,
		},
	}),

	mutations: {
		increment(state, num) {
			state.count += num;
		},
		// 设置当前画笔
		[SET_DRAW](state, draw) {
			state.curDraw = draw;
		},
	},

	getters: {
		doubleCount(state) {
			return state.count * 2;
		},
	},
};

export { status };
