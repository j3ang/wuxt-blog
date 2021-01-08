<template>
  <main>
    <div v-for="(book, index) in books" :key="index">
      <nuxt-link :to="'/books/' + book.slug" class="font-weight-bold">
        {{ book.title.rendered }}
      </nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData(context) {
    const { route, app, error } = context
    try {
      let books = await app.$wp.cpt('book')
      return { books }
    } catch (e) {
      error(e)
    }
  },
}
</script>

<style>
</style>