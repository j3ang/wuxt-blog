<!-- @format -->

<template>
	<main>
		<h1>
			<span class="text-secondary font-weight-bold">Category:</span>
			{{ $nuxt.$route.params.slug }}
		</h1>
		<hr />
		<Posts :posts="postsByCategory" type="tag" />
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import Posts from "~/components/templates/Posts";

	export default {
		name: "Category",
		computed: {
			...mapGetters("posts", ["postsByCategory"]),
		},
		async fetch() {
			await this.$store.dispatch("posts/GET_POSTS_BY_CATEGORY", $nuxt.$route.params.slug);
			console.log("fetching posts from category slug");
		},
		props: ["category"],
		components: { Posts },
	};
</script>

<style lang="scss" scoped></style>
