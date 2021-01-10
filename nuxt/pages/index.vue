<template>
  <main class="wp__content">
    <article
      v-for="(post, postIndex) in topPosts"
      :key="postIndex"
      class="mb-5 d-flex flex-column"
    >
      <nuxt-link :to="post.node.slug" class="h2 text-capitalize">{{
        post.node.title
      }}</nuxt-link>

      <tags class="post--tags m-0 d-inline-block">
        <span v-for="(tag, index) in post.node.tags" :key="index">
          <tag v-for="t in tag" :key="t">
            <span class="text-capitalize badge bg-dark text-light mr-2 mt-2">{{
              t.name
            }}</span>
          </tag>
        </span>
      </tags>

      <blockquote
        v-html="post.node.excerpt"
        class="blockquote post-excerpt"
      ></blockquote>

      <footer class="post--info-footer d-flex flex-column w-100 m-0">
        <div class="post--author">
          <span class="post--author-name m-0"
            >By
            <img
              :src="post.node.author.node.avatar.url"
              :alt="post.node.author.node.name"
              class="post--author-avatar rounded-circle"
            />
            {{ post.node.author.node.name }}
          </span>
        </div>

        <div class="post--categories d-inline-block m-0">
          <span
            v-for="(cat, i) in post.node.categories.nodes"
            :key="i"
            class="post--category"
          >
            <template
              class="text-capitalize badge bg-dark text-light mr-2 mt-2"
            >
              {{ cat.name }}
            </template>
          </span>
        </div>

        <span class="post--date m-0 p-0">
          {{
            new Date(Date.parse(post.node.date)) | moment('ddd, MMM Do YYYY')
          }}
        </span>
      </footer>
    </article>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // async asyncData(context) {
  //   const { route, app, error } = context
  //   try {
  //     let posts = await app.$wp.posts()
  //     return { posts }
  //   } catch (e) {
  //     error(e)
  //   }
  // },
  computed: {
    ...mapGetters('posts', ['topPosts']),
  },
  async created() {
    this.handleClick()
  },
  methods: {
    async handleClick() {
      this.data = await this.$store.dispatch('posts/GET_DATA')
    },
  },
}
</script>

<style lang="scss" scoped>
article {
  .post-excerpt {
    font-weight: 200;
    font-size: 1em;
    line-height: 0.8em;
  }

  .post--info-footer {
    @media only screen and (min-width: 360px) {
      flex-direction: row !important;
    }
    .post--author {
      &:not(:last-child):after {
        display: inline-block;
        border: none;
        content: '//';
        margin-right: 5px;
      }

      .post--author-avatar {
        width: 24px !important;
        position: relative;
        img {
          width: 100%;
        }
      }
    }
    .post--categories {
      &:not(:last-child):after {
        display: inline-block;
        border: none;
        content: '//';
        margin-right: 5px;
      }
      .post--category {
        border-bottom: solid 2px $primary;

        &:not(:last-child):after {
          display: inline-block;
          border: none;
          content: ', ';
          margin-right: 5px;
        }
      }
    }
  }
}
p {
  &:nth-child(1n + 2) {
    margin-top: 1rem;
  }
}

ul {
  margin-top: 1rem;

  li {
    &:nth-child(1n + 2) {
      margin-top: 1rem;
    }
  }
}

.bold {
  font-weight: 700;
}

.italic {
  font-style: italic;
}

code {
  padding: 3px 10px;

  background-color: #37495c;
  border-radius: 4px;

  color: #fff;
}
</style>
