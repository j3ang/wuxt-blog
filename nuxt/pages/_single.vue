<template>
  <Post v-else :post="single" />
</template>

<script>
import Page from '~/components/templates/Page'
import Post from '~/components/templates/Post'

export default {
  // data() {
  //   return {
  //     single:{}
  //   }
  // },
  async asyncData(context) {
    const { route, app, error } = context
    try {
      let single = await app.$wp.slug().name(route.params.single)
      return { single }
    } catch (e) {
      error(e)
    }
  },
  components: {
    Page,
    Post,
  },
}
</script>
