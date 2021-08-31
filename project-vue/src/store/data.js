/**
 * 数据池
 */
import { ADD_EL, FIX_THIS_EL, DEL_EL, DEL_THSI_EL } from './mutationType';

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
		// 删除当前 画板 所有元素
		[DEL_EL](state) {
			state.elList = [];
		},
		// 删除 index 的元素
		[DEL_THSI_EL](state, index) {
			state.splice(index, 1);
		},
	},
};

export { data };
