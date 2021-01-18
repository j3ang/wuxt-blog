<!-- @format -->

<template>
  <div class="tags" v-if="type === 'home'">
    <datalist
      v-show="tags.length > 0"
      v-for="tag in tags"
      :key="tag.databaseId"
      class="tag h4 d-inline-block mr-3"
    >
      <nuxtLink
        :to="`/tag/${$nuxt.$helpers.slugify(tag.node.name)}`"
        class="d-inline-block text-decoration-none p-2 ml-0 border"
        >{{ tag.node.name }}

        <span class="tag--count text-muted">{{ tag.node.count }}</span>
      </nuxtLink>
    </datalist>
  </div>

  <div class="tags m-0" v-else-if="type === 'post' && tags.nodes.length > 0">
    <datalist
      v-for="(tag, index) in tags"
      :key="index"
      class="tags--post m-0 d-inline-block"
    >
      <data
        v-for="t in tag"
        :key="t.databaseId"
        class="badge bg-dark text-light mr-2 mt-2 p-2"
        v-html="t.name"
      ></data>
    </datalist>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'

export default {
  name: 'Tags',
  props: ['tags', 'type'],
  mounted() {
    console.log('printing tags:', this.tags)
  },
}
</script>

<style lang="scss">
.tags {
  position: relative;
  .tag--count {
    font-size: 55%;
  }
}
</style>
