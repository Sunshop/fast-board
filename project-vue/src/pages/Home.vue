<template>
	<div class="home">
		<div class="container">x:0,y:0</div>
		<div class="container">{{ count }}</div>
		<el-button type="primary" @click="change">测试</el-button>
		<Toolbar />
	</div>
</template>

<script>
import Toolbar from '../components/toolbar/Toolbar.vue';

export default {
	components: {
		Toolbar,
	},
	created() {
		// console.log(123);
	},
	computed: {
		count() {
			return this.$store.state.status.count;
		},
	},
	methods: {
		change() {
			this.$store.commit('increment', 10);
		},
	},
};
</script>

<style lang="less" scoped>
.container {
	color: red;
}

.home {
	padding: 100px;
}
</style>
