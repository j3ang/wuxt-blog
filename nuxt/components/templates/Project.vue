<template>
  <main>
    <h1 v-html="thisProject[0].title.rendered" class="wp__title"></h1>
    <div v-html="thisProject[0].content.rendered" class="wp__content"></div>
  </main>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  computed: {
    thisProject: function () {
      return JSON.parse(this.project)
    },
  },
}
</script>
