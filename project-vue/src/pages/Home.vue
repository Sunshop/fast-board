<template>
	<div class="container">x:0,y:0</div>
	<div class="container">{{ count }}</div>
	<div class="container" @click="change">12312312</div>
	<Toolbar />
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
</style>
