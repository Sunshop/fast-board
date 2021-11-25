<template>
	<div class="home">
		<Toolbar />
		<Board />
		<Clear />
		<el-button type="primary" @click="getData">test</el-button>
	</div>
</template>

<script>
import Board from '../components/board/Board.vue';
import Toolbar from '../components/toolbar/Toolbar.vue';
import Clear from '../components/toolbar/Clear.vue';

export default {
	components: {
		Board,
		Toolbar,
		Clear,
	},

	created() {
		this.listenPaste();
	},

	methods: {
		// 监听剪切板
		listenPaste() {
			document.addEventListener('paste', function (event) {
				console.log(event);
				if (event.clipboardData || event.originalEvent) {
					var clipboardData = event.clipboardData || window.clipboardData;
					var val = clipboardData.getData('text');
					console.log(val);
					event.preventDefault();
				}
			});
		},

		getData() {
			navigator.clipboard.readText().then((v) => {
				console.log(v);
			});
		},
	},
};
</script>

<style lang="less" scoped>
.home {
	position: relative;
}
</style>
