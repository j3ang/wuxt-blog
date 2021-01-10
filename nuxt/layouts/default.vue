<template>
  <div>
    <headroom :classes="headroomClasses">
      <header class="header">
        <Logo />
        <nav class="header__nav container">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/projects">Projects</nuxt-link>
          <nuxt-link to="/books">Books</nuxt-link>
          <a href="http://localhost:3080/admin">Admin</a>
        </nav>
      </header>
    </headroom>
    <nuxt class="container" />
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import { headroom } from 'vue-headroom'

export default {
  props: {
    headroomClasses: {
      // when element is initialised
      initial: 'headroom',
      // when scrolling up
      pinned: 'headroom--pinned',
      // when scrolling down
      unpinned: 'headroom--unpinned',
      // when above offset
      top: 'headroom--top',
      // when below offset
      notTop: 'headroom--not-top',
      // when at bottom of scoll area
      bottom: 'headroom--bottom',
      // when not at bottom of scroll area
      notBottom: 'headroom--not-bottom',
    },
  },
  components: {
    Logo,
    headroom,
  },
}
</script>


<style lang="scss">
.wp {
  &__title {
    margin-bottom: 30px;
    font-weight: bold;
    text-transform: capitalize;
    font-size: 3em;
  }

  &__content {
    * {
      &:nth-child(1n + 2) {
        margin-top: 1rem;
      }
    }

    p {
      line-height: 1.8rem;
    }
  }
}

.header {
  position: relative;
  background: #303334;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;
  border-bottom: 2px solid #ececec;

  &__nav {
    margin-top: 10px;

    a {
      margin-right: 1.2em;
      text-decoration: none;
      font-size: 1.5em;
    }
  }
}

main {
  margin-top: 1.5em !important;
}
</style>
