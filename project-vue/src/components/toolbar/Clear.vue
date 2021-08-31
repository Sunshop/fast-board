<template>
	<div
		class="clear-box"
		@mouseenter="() => fn(true)"
		@mouseleave="() => fn(false)"
		@click="() => select()"
	>
		<img v-show="!show" :src="icon" />
		<img v-show="show" :src="actIcon" />
	</div>
</template>

<script>
import { DEL_EL } from '../../store/mutationType';

export default {
	data() {
		return {
			icon: './img/clear.png',
			actIcon: './img/clear-act.png',
			show: false,
		};
	},
	methods: {
		// 进入 or 离开
		fn(e) {
			this.show = e;
		},

		// 选择
		select() {
			// ...
			this.$store.commit(DEL_EL);
		},
	},
};
</script>

<style lang="less" scoped>
.clear-box {
	position: fixed;
	bottom: 20px;
	left: 20px;
	background-color: #fff;
	border-radius: 6px;
	cursor: pointer;
	z-index: 1000;
	padding: 10px;

	& > img {
		width: 28px;
		height: 28px;
		display: block;
	}
}
</style>
