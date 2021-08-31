<template>
	<div
		class="board"
		@mousemove="(e) => handleMouseMove(e)"
		@mousedown="(e) => handleMouseDown(e)"
		@mouseup="(e) => handleMouseUp(e)"
		@mouseenter="(e) => handleMouseEnter(e)"
		@mouseleave="(e) => handleMouseLeave(e)"
	>
		<svg width="100%" height="100%">
			<template v-for="item in elList" :key="item.value.id">
				<template v-if="item.type == 'line' || item.type == 'pencil'">
					<path
						:key="item.value.id"
						:id="item.value.d"
						:d="item.value.path"
						fill="none"
						stroke="red"
						stroke-width="3"
						stroke-linejoin="round"
					/>
				</template>
			</template>
		</svg>
		<div class="coordinate">
			<div>x:{{ x }}-y:{{ y }}</div>
			<div :class="[isDown ? 'success' : 'info', 'blocks']"></div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

import { ADD_EL, FIX_THIS_EL } from '../../store/mutationType';

export default {
	data() {
		return {
			x: 0,
			y: 0,
			timer: null, // 延迟 性能监控
			isDown: false, // 是否正在单击的状态
		};
	},
	computed: {
		...mapState({
			curDraw: (state) => state.status.curDraw,
			elList: (state) => state.data.elList,
		}),
	},
	methods: {
		// 鼠标移动
		handleMouseMove(e) {
			if (this.timer) return;
			this.timer = setTimeout(() => {
				// console.log('handleMouseMove', e);
				if (this.isDown) {
					this.mouseController(e);
				}
				this.x = e.clientX;
				this.y = e.clientY;
				this.timer = null;
			}, 5);
		},

		// 鼠标点击 按下
		handleMouseDown() {
			this.isDown = true;
			if (this.curDraw == 'pencil') {
				const newPath = {
					type: this.curDraw,
					value: {
						id: `L_${Date.now()}`,
						path: '',
						weight: 3,
						color: 'red',
						type: '1',
					},
				};
				this.$store.commit(ADD_EL, newPath);
			}
		},

		// 鼠标点击 抬起
		handleMouseUp() {
			this.isDown = false;
		},

		// 鼠标 进入
		handleMouseEnter() {},

		// 鼠标 离开
		handleMouseLeave() {
			this.isDown = false;
		},

		// 当前鼠标操作
		mouseController(e) {
			if (this.curDraw == 'pencil') {
				const index = this.elList.length - 1;
				const LastPath = this.elList[index];
				LastPath.value.path += `${LastPath.value.path ? 'L' : 'M'}${e.clientX} ${e.clientY} `;
				this.$store.commit(FIX_THIS_EL, { index, el: LastPath });
			}
		},
	},
};
</script>

<style lang="less" scoped>
.board {
	width: 100vw;
	height: 100vh;
	position: relative;
}

.coordinate {
	position: fixed;
	bottom: 20px;
	right: 20px;
	color: red;
	display: flex;
	align-items: center;
	user-select: none;

	.blocks {
		width: 20px;
		height: 20px;
		border-radius: 5px;
		margin-left: 10px;

		&.success {
			background-color: green;
		}

		&.info {
			background-color: #fff;
		}
	}
}
</style>
