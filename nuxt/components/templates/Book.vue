<template>
  <main>
    <h1 v-html="thisBook[0].title.rendered" class="wp__title"></h1>
    <div v-html="thisBook[0].content.rendered" class="wp__content"></div>
  </main>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  computed: {
    thisBook: function () {
      return JSON.parse(this.book)
    },
  },
}
</script>
