/**
 * 当前画笔的状态
 */
import { drawList } from '../config/drawList';

const status = {
	state: () => ({
		count: 0,
		drawList: drawList, // 画笔 list
		curDraw: '', // 当前 画笔
		lineStyle: {
			color: '#333333',
			weight: 2,
		},
	}),

	mutations: {
		increment(state, num) {
			state.count += num;
		},
		setDraw(state, draw) {
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
