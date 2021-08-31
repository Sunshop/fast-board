import { createStore } from 'vuex';
import { status } from './status';
import { data } from './data';

const store = createStore({
	modules: {
		status,
		data,
	},
});

export default store;
