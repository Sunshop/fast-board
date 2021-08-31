/**
 * 数据池
 */
import { ADD_EL, FIX_THIS_EL } from './mutationType';

const data = {
	state: () => ({
		elList: [], // 画板 数组
	}),

	mutations: {
		// 添加 画板 单个元素
		[ADD_EL](state, el) {
			state.elList.push(el);
		},
		// 修改 画板 单个元素
		[FIX_THIS_EL](state, { index, el }) {
			state.elList[index] = el;
		},
	},
};

export { data };
