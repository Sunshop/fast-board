<template>
	<div class="home">
		<Toolbar />
		<Board />
		<Clear />
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
};
</script>

<style lang="less" scoped>
.home {
	position: relative;
}
</style>
