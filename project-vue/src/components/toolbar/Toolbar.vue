<template>
	<div class="toolbar">
		<div
			class="toolbar-item"
			v-for="(item, index) in drawList"
			:key="index"
			@mouseenter="() => enter(item)"
			@mouseleave="() => leave(item)"
			@click="() => select(item)"
		>
			<div class="toolbar-item-icon">
				<img v-show="item.type != curDraw && item.type != curMenuHover" :src="item.icon" />
				<img v-show="item.type == curDraw || item.type == curMenuHover" :src="item.actIcon" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

import { SET_DRAW } from '../../store/mutationType';

export default {
	data() {
		return {
			curMenuHover: '',
		};
	},
	computed: {
		...mapState({
			drawList: (state) => state.status.drawList,
			curDraw: (state) => state.status.curDraw,
		}),
	},
	methods: {
		// 进入
		enter(item) {
			this.curMenuHover = item.type;
		},

		// 离开
		leave() {
			this.curMenuHover = '';
		},

		// 选择
		select(item) {
			this.$store.commit(SET_DRAW, item.type);
		},
	},
};
</script>

<style lang="less" scoped>
.toolbar {
	position: fixed;
	top: 20px;
	left: 20px;
	background-color: #fff;
	border-radius: 6px;
	cursor: pointer;
	z-index: 1000;

	.toolbar-item {
		padding: 10px;

		.toolbar-item-icon {
			width: 28px;
			height: 28px;

			& > img {
				width: 100%;
				height: 100%;
				user-select: none;
				overflow: hidden;
				display: block;
				pointer-events: none; // 需要了解
			}
		}
	}
}
</style>
