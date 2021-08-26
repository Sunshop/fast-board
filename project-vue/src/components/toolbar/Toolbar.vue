<template>
	<div class="toolbar">
		<div
			class="toolbar-item"
			v-for="(item, index) in menuList"
			:key="index"
			@mouseenter="() => enter(item)"
			@mouseleave="() => leave(item)"
		>
			<div class="toolbar-item-icon">
				<img v-show="item.type == curMenuMain || item.type == curMenuHover" :src="item.icon" />
				<img v-show="item.type != curMenuMain || item.type == curMenuHover" :src="item.actIcon" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			curMenuHover: '',
			curMenuMain: 'pencil',
			menuList: [
				{
					name: '笔',
					type: 'pencil',
					icon: './img/pencil.png',
					actIcon: './img/pencil-act.png',
				},
				{
					name: '线',
					type: 'line',
					icon: './img/line.png',
					actIcon: './img/line-act.png',
				},
				{
					name: '文字',
					type: 'text',
					icon: './img/text.png',
					actIcon: './img/text-act.png',
				},
				{
					name: '图片',
					type: 'img',
					icon: './img/img.png',
					actIcon: './img/img-act.png',
				},
				{
					name: '文件',
					type: 'file',
					icon: './img/file.png',
					actIcon: './img/file-act.png',
				},
			],
		};
	},
	created() {},
	methods: {
		enter(item) {
			this.curMenuHover = item.type;
		},

		leave() {
			this.curMenuHover = '';
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

	.toolbar-item {
		padding: 10px;

		.toolbar-item-icon {
			width: 28px;
			height: 28px;

			& > img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
