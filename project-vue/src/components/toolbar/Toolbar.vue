<template>
	<div class="toolbar">
		<div @click="mg">123</div>
	</div>
</template>

<script>
export default {
	created() {},
	methods: {
		mg() {
			this.$notify({
				title: "标题名称",
				message: "这是一条不会自动关闭的消息",
			});
		},
	},
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
}
</style>
