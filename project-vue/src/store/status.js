/**
 * 当前画笔的状态
 */
const status = {
	state: () => ({
		count: 0,
	}),
	mutations: {
		increment(state, num) {
			state.count += num;
		},
	},

	getters: {
		doubleCount(state) {
			return state.count * 2;
		},
	},
};

export { status };
