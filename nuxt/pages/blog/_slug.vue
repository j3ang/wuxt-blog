<!-- @format -->

<template>
	<main v-if="postBySlug">
		<article class="container position-relative">
			<h1 v-html="postBySlug.title" class="wp__title"></h1>
			<hr />
			<div v-html="postBySlug.content" class="wp__content"></div>
		</article>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import hljs from "highlight.js";
	import Tags from "~/components/templates/Tags";
	var EmojiConvertor = require("emoji-js");

	export default {
		name: "single",
		components: { Tags },
		computed: {
			...mapGetters("posts", ["postBySlug"]),
		},
		async fetch() {
			await this.$store.dispatch("posts/GET_POST_BY_SLUG", $nuxt.$route.params.slug);
			console.log("fetching");
		},
	};
</script>

<style lang="scss" scoped></style>
