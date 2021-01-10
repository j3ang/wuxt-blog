<template>
  <main >
    <article class="container position-relative">
      <h1 v-html="post.title.rendered" class="wp__title"></h1>
      </div>
      <!-- {{ this.post }} -->
      <div v-html="renderedContent" class="wp__content"></div>

    </article>

  </main>
</template>

<script>
import hljs from 'highlight.js'
var EmojiConvertor = require('emoji-js')

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    renderedContent: function () {
      let emoji = new EmojiConvertor()
      // change the path to your emoji images (requires trailing slash)
      // you can grab the images from the emoji-data link here:
      // https://github.com/iamcal/js-emoji/tree/master/build
      emoji.img_sets.apple.path =
        'https://cdn.learningexecutive.com/img-apple-64/'
      emoji.img_sets.apple.sheet =
        'https://cdn.learningexecutive.com/sheet_apple_64.png'

      return emoji.replace_colons(this.post.content.rendered)
    },
  },
  mounted: function () {
    document.querySelectorAll('code').forEach((block) => {
      hljs.highlightBlock(block)
    })

    // let content = this.post.content.rendered;
    // window.postContent = content;
  },
  head() {
    return {
      title: `J3ang's Blog - Page ${this.post.title.rendered}`,
    }
  },
}
</script>

<style lang="scss">
p > img {
  width: 100% !important;
  border-radius: 5px;
}

img[src*='#thumbnail'] {
  max-width: 350px;
  height: auto;
}

code {
  padding: 2em !important;

  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

span.emoji {
  display: -moz-inline-box;
  -moz-box-orient: vertical;
  display: inline-block;
  vertical-align: baseline;
  *vertical-align: auto;
  *zoom: 1;
  *display: inline;
  width: 1em;
  height: 1em;
  background-size: 1em;
  background-repeat: no-repeat;
  text-indent: -9999px;
  background-position: 50%, 50%;
  background-size: contain;
}

span.emoji-sizer {
  line-height: 0.81em;
  font-size: 1em;
  margin: -2px 0;
}

span.emoji-outer {
  display: -moz-inline-box;
  display: inline-block;
  *display: inline;
  height: 1em;
  width: 1em;
}

span.emoji-inner {
  display: -moz-inline-box;
  display: inline-block;
  text-indent: -9999px;
  width: 100%;
  height: 100%;
  vertical-align: baseline;
  *vertical-align: auto;
  *zoom: 1;
}

img.emoji {
  width: 1em;
  height: 1em;
}
</style>