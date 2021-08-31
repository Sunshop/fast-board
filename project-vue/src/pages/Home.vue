<template>
	<div class="home">
		<Toolbar />
		<Board />
	</div>
</template>

<script>
import Board from '../components/board/Board.vue';
import Toolbar from '../components/toolbar/Toolbar.vue';

export default {
	components: {
		Board,
		Toolbar,
	},
};
</script>

<style lang="less" scoped>
.home {
	position: relative;
}
</style>
