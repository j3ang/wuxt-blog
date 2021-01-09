<template>
  <project :project="thisproject" />
</template>

<script>
import project from '~/components/templates/project'
export default {
  components: {
    project,
  },
  async asyncData(context) {
    const { route, app, error } = context
    try {
      const project = await app.$wp.cpt('project').slug(route.params.slug)
      const thisproject = JSON.stringify(project)
      return { thisproject }
    } 
    catch (e) {
      error(e)
    }
  },
}
</script>
