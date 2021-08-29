<template>
	<div
		class="home"
		@mousemove="(e) => handleMouseMove(e)"
		@mousedown="(e) => handleMouseDown(e)"
		@mouseup="(e) => handleMouseUp(e)"
		@mouseenter="(e) => handleMouseEnter(e)"
		@mouseleave="(e) => handleMouseLeave(e)"
	>
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
		handleMouseMove() {},

		handleMouseDown() {},

		handleMouseUp() {},

		handleMouseEnter() {},

		handleMouseLeave() {},

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
	width: 100vw;
	height: 100vh;
}
</style>
