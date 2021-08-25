<template>
	<div class="toolbar">
		<div class="toolbar-item" v-for="(item, index) in menuList" :key="index">
			<div class="toolbar-item-icon">
				<img v-show="item.type == curMenuMain" :src="item.icon" />
				<img v-show="item.type != curMenuMain" :src="item.actIcon" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			curMenu: "",
			curMenuMain: "pencil",
			menuList: [
				{
					name: "笔",
					type: "pencil",
					icon: "./img/pencil.png",
					actIcon: "./img/pencil-act.png",
				},
				{
					name: "线",
					type: "line",
					icon: "./img/line.png",
					actIcon: "./img/line-act.png",
					children: [
						{
							name: "直线",
							type: "straight-line",
							icon: "",
							actIcon: "",
						},
					],
				},
				{
					name: "文字",
					type: "text",
					icon: "./img/text.png",
					actIcon: "./img/text-act.png",
				},
				{
					name: "图片",
					type: "img",
					icon: "./img/img.png",
					actIcon: "./img/img-act.png",
				},
				{
					name: "文件",
					type: "file",
					icon: "./img/file.png",
					actIcon: "./img/file-act.png",
				},
			],
		};
	},
	created() {},
	methods: {},
};
</script>

<style lang="less" scoped>
.toolbar {
	position: fixed;
	top: 20px;
	left: 20px;
	width: 50px;
	background-color: #fff;
	border-radius: 6px;
	cursor: pointer;

	.toolbar-item {
		width: 40px;
		height: 40px;

		.toolbar-item-icon {
			width: 40px;
			height: 40px;

			& > img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
