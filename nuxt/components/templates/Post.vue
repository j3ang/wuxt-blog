<!-- @format -->

<template>
	<div v-if="type === 'home'">
		<article class="mb-5 d-flex flex-column">
			<div>
				<nuxtLink
					:to="`/blog/${this.$helpers.slugify(post.node.slug)}`"
					class="h2 text-capitalize"
					style="width: fit-content"
					>{{ post.node.title }}</nuxtLink
				>

				<a
					:href="postEditUrl(post)"
					class="small text-capitalize d-inline-block text-muted"
					style="width: fit-content"
					>edit</a
				>
			</div>
			<Tags :tags="post.node.tags" type="post" />

			<blockquote
				v-html="post.node.excerpt"
				class="blockquote post-excerpt mb-0"
				v-show="post.node.excerpt !== ''"
			></blockquote>

			<footer class="post--info-footer d-flex flex-column w-100 m-0">
				<div class="post--author">
					<span class="post--author-name m-0"
						>By
						<img
							:src="post.node.author.node.avatar.url"
							:alt="post.node.author.node.name"
							class="post--author-avatar rounded-circle"
						/>
						{{ post.node.author.node.name }}
					</span>
				</div>

				<div v-show="post.node.categories.nodes.length > 0" class="post--categories m-0">
					<div class="d-inline-block">
						<nuxtLink
							:to="`/category/${cat.name}`"
							v-for="(cat, i) in post.node.categories.nodes"
							:key="i"
							class="post--category"
						>
							<template class="text-capitalize badge bg-dark text-light mr-2 mt-2">
								{{ cat.name }}
							</template>
						</nuxtLink>
					</div>
				</div>

				<span class="post--date m-0 p-0">
					{{ new Date(Date.parse(post.node.date)) | moment("ddd, MMM Do YYYY") }}
				</span>
			</footer>
		</article>
	</div>

	<div v-else-if="type === 'tag'">
		<article
			class="mb-5 d-flex flex-column"
			v-for="(post, index) in post.nodes"
			:key="index"
		>
			<div>
				<nuxtLink
					:to="`/blog/${$nuxt.$helpers.slugify(post.slug)}`"
					class="h2 text-capitalize"
					style="width: fit-content"
					>{{ post.title }}</nuxtLink
				>
				<a
					:href="postEditUrl(post)"
					class="small text-capitalize d-inline-block text-muted"
					style="width: fit-content"
					>edit</a
				>
			</div>
			<Tags :tags="post.tags" type="post" />
			<blockquote
				v-html="`<p>${post.excerpt}</p>`"
				class="blockquote post-excerpt mb-0"
				v-show="post.excerpt !== ''"
			></blockquote>
			<footer class="post--info-footer d-flex flex-column w-100 m-0">
				<div class="post--author">
					<span class="post--author-name m-0"
						>By
						<img
							:src="post.author.node.avatar.url"
							:alt="post.author.node.name"
							class="post--author-avatar rounded-circle"
						/>
						{{ post.author.node.name }}
					</span>
				</div>

				<div v-show="post.categories.nodes.length > 0" class="post--categories m-0">
					<div class="d-inline-block">
						<nuxtLink
							:to="`/category/${cat.name}`"
							v-for="(cat, i) in post.categories.nodes"
							:key="i"
							class="post--category"
						>
							<template class="text-capitalize badge bg-dark text-light mr-2 mt-2">
								{{ cat.name }}
							</template>
						</nuxtLink>
					</div>
				</div>

				<span class="post--date m-0 p-0">
					{{ new Date(Date.parse(post.date)) | moment("ddd, MMM Do YYYY") }}
				</span>
			</footer>
		</article>
	</div>

	<main v-else-if="type === 'single-post'">
		<article class="container position-relative">
			<div>else</div>

			<hr />

			<div v-html="renderedContent" class="wp__content"></div>
			<!-- <h1 v-html="post.title.rendered" class="wp__title"></h1>
      <div v-html="renderedContent" class="wp__content"></div> -->
		</article>
	</main>
</template>

<script>
	import Tags from "~/components/templates/Tags";

	export default {
		name: "Post",
		props: ["post", "type"],
		components: { Tags },
		mounted: function () {
			document.querySelectorAll("code").forEach((block) => {
				hljs.highlightBlock(block);
			});
		},
		methods: {
			postEditUrl: (post) => {
				// console.log('getting post edit link:', post.node.databaseId)
				return post.node === undefined
					? process.env.baseUrl + "/wp-admin/post.php?post=" + post.databaseId + "&action=edit"
					: process.env.baseUrl +
							"/wp-admin/post.php?post=" +
							post.node.databaseId +
							"&action=edit";
			},
			postTags: function (tags) {
				console.log("loging post tags", tags);
			},
		},
		// head() {
		//   return {
		//     title:
		//       this.type === 'single'
		//         ? `J3ang's Blog - Page ${this.post.title.rendered}`
		//         : '',
		//   }
		// },
	};
</script>

<style lang="scss">
	article {
		.post-excerpt {
			font-weight: 200;
			font-size: 1em;
			line-height: 0.8em;
		}

		.post--info-footer {
			@media only screen and (min-width: 360px) {
				flex-direction: row !important;
			}
			.post--author {
				&:not(:last-child):after {
					display: inline-block;
					border: none;
					content: "//";
					margin-right: 5px;
				}

				.post--author-avatar {
					width: 24px !important;
					position: relative;
					img {
						width: 100%;
					}
				}
			}
			.post--categories {
				&:not(:last-child):after {
					display: inline-block;
					border: none;
					content: "//";
					margin: 0 5px;
				}
				.post--category {
					border-bottom: solid 2px $primary;

					&:not(:last-child):after {
						display: inline-block;
						border: none;
						content: ", ";
						margin-right: 5px;
					}
				}
			}
		}
	}

	p > img {
		width: 100% !important;
		border-radius: 5px;
	}

	img[src*="#thumbnail"] {
		max-width: 350px;
		height: auto;
	}

	code {
		padding: 2em !important;

		&::-webkit-scrollbar {
			display: none; /* Chrome Safari */
		}
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE 10+ */
	}

	span.emoji {
		display: -moz-inline-box;
		-moz-box-orient: vertical;
		display: inline-block;
		vertical-align: baseline;
		*vertical-align: auto;
		*zoom: 1;
		*display: inline;
		width: 1em;
		height: 1em;
		background-size: 1em;
		background-repeat: no-repeat;
		text-indent: -9999px;
		background-position: 50%, 50%;
		background-size: contain;
	}

	span.emoji-sizer {
		line-height: 0.81em;
		font-size: 1em;
		margin: -2px 0;
	}

	span.emoji-outer {
		display: -moz-inline-box;
		display: inline-block;
		*display: inline;
		height: 1em;
		width: 1em;
	}

	span.emoji-inner {
		display: -moz-inline-box;
		display: inline-block;
		text-indent: -9999px;
		width: 100%;
		height: 100%;
		vertical-align: baseline;
		*vertical-align: auto;
		*zoom: 1;
	}

	img.emoji {
		width: 1em;
		height: 1em;
	}
</style>
