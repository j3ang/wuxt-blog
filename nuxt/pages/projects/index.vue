<template>
  <main>
    <div v-for="(project, index) in projects" :key="index">
      <nuxt-link :to="'/projects/' + project.slug">
        {{ project.title.rendered }}
      </nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData(context) {
    const { route, app, error } = context
    try {
      let projects = await app.$wp.cpt('project')
      return { projects }
    } catch (e) {
      error(e)
    }
  },
}
</script>

<style>
</style>