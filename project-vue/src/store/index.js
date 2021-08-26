import { createStore } from 'vuex';
import { status } from './status';

const store = createStore({
	modules: {
		status,
	},
});

export default store;
