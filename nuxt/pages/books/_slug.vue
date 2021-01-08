<template>
  <Book :book="thisBook" />
</template>

<script>
import Book from '~/components/templates/Book'
export default {
  async asyncData(context) {
    const { route, app, error } = context
    try {
      const book = await app.$wp.cpt('book').slug(route.params.slug)
      const thisBook = JSON.stringify(book)
      return { thisBook }
    } catch (e) {
      error(e)
    }
  },
  components: {
    Book,
  },
}
</script>
