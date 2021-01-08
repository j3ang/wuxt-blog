<template>
  <div class="post">
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
}
</script>
