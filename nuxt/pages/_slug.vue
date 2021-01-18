<!-- @format -->

<template>
	<!-- <Page v-if="single.type === 'page'" :page="single" />
  <Post v-else :post="single" /> -->

	<div>check console</div>
</template>

<script>
	import Page from "~/components/templates/Page";
	import Post from "~/components/templates/Post";

	export default {
		async asyncData(context) {
			const { route, app, error } = context;
			try {
				this.single = await app;
				console.log("hello", single);
				// return { single }
			} catch (e) {
				error(e);
			}
		},
		created() {},
		data() {
			return {
				single: "",
			};
		},
		props: ["tag"],
		methods: {
			async getRencentPosts() {
				const posts = await this.$store.dispatch("posts/GET_POST_BY_ID");
			},
		},
	};
</script>

<style lang="scss" scoped></style>
