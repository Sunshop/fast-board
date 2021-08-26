<template>
	<div class="container">123</div>
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
};
</script>

<style lang="less" scoped>
.container {
	color: red;
}
</style>
