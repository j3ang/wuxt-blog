<!-- @format -->

<template>
	<main class="wp__content">
		<Posts :posts="recentPosts" type="home" />

		<hr v-show="recentPosts" />

		<footer>
			<Tags :tags="siteTags" type="home" />
		</footer>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import Tags from "~/components/templates/Tags";
	import Posts from "~/components/templates/Posts";
	import Page from "~/components/templates/Page";

	export default {
		computed: {
			...mapGetters("posts", ["recentPosts"]),
			...mapGetters("tags", ["siteTags"]),
		},
		async created() {
			this.posts = this.getRencentPosts();
			this.tags = this.getSiteTags();
		},
		components: { Tags, Posts },
		methods: {
			async getRencentPosts() {
				const posts = await this.$store.dispatch("posts/GET_RENCENT_POSTS");
			},
			async getSiteTags() {
				const tags = await this.$store.dispatch("tags/GET_SITE_TAGS");
			},
		},
		mounted() {
			console.log("route params", this.$route);
		},
	};
</script>

<style lang="scss" scoped>
	p {
		&:nth-child(1n + 2) {
			margin-top: 1rem;
		}
	}

	ul {
		margin-top: 1rem;

		li {
			&:nth-child(1n + 2) {
				margin-top: 1rem;
			}
		}
	}

	.bold {
		font-weight: 700;
	}

	.italic {
		font-style: italic;
	}

	code {
		padding: 3px 10px;

		background-color: #37495c;
		border-radius: 4px;

		color: #fff;
	}
</style>
