<template>
  <nuxt-content :document="doc" />
</template>

<script>
import project from '~/components/templates/project'
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug || 'index').fetch()
    return { doc }
  },
}
</script>
