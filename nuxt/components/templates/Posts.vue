<!-- @format -->

<template>
  <div v-if="type === 'home'">
    <Post
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
      :type="type"
    />
  </div>

  <main v-else>
    <Post
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
      :type="type"
    />
  </main>
</template>

<script>
import Post from '~/components/templates/Post'

export default {
  name: 'Posts',
  components: {
    Post,
  },
  props: ['posts', 'type'],
}
</script>

<style lang="scss" scoped></style>