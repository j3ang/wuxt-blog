<template>
  <main>
    <article>
      <h1 v-html="post.title.rendered" class="wp__title"></h1>
      <!-- {{ this.post }} -->
      <nuxt-content :document="post" />
    </article>

    <!-- <div v-html="post.content.rendered" class="wp__content"></div> -->
  </main>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  async asyncData({ $content }) {
    const content = await $content('concatenating-row-values-by-groups').fetch()
    console.log('this page:', content)
    return {
      content,
    }
  },
}
</script>
