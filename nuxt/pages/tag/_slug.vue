<!-- @format -->

<template>
	<main>
		<h1>
			<span class="text-secondary font-weight-bold">Tag:</span>
			{{ $nuxt.$route.params.slug }}
		</h1>
		<hr />
		<Posts :posts="postsByTag" type="tag" />
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import Posts from "~/components/templates/Posts";

	export default {
		name: "Test",
		computed: {
			...mapGetters("posts", ["postsByTag"]),
		},
		props: ["tag"],
		components: { Posts },
		methods: {
			async getPostsByTag() {
				const posts = await this.$store.dispatch(
					"posts/GET_POSTS_BY_TAG",
					this.$helpers.slugify($nuxt.$route.params.slug)
				);
			},
		},
		created() {
			this.getPostsByTag();
		},
	};
</script>

<style lang="scss" scoped></style>
