<template>
  <main class="wp__content">
    <div v-for="(post, index) in posts" :key="index">
      <nuxt-link :to="post.slug">{{ post.title.rendered }}</nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData(context) {
    const { route, app, error } = context
    try {
      let posts = await app.$wp.posts()
      return { posts }
    } catch (e) {
      error(e)
    }
  },
}
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
