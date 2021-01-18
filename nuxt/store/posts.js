import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as postsQL from '~/graphql/gql_queries'

Vue.use(Vuex)

export const initialState = () => ({
  recentPosts: null,
  postsByTag: null,
  postsByCategory: null,
  postBySlug: null
})

export const state = () => initialState()

export const actions = {
  async GET_RENCENT_POSTS({ commit }) {
    try {
      const result = await axios({
        url: process.env.baseUrl + '/graphql/',
        method: 'get',
        params: {
          query: postsQL.RECENT_POSTS_QUERY
        }
      })
      console.log('got posts: ', result.data.data.posts)
      commit('SET_RECENT_POSTS', result.data.data.posts.edges)
    } catch (err) {
      console.error(err, 'err')
    }
  },
  async GET_POSTS_BY_TAG({ commit }, tag) {
    try {
      const result = await axios({
        url: process.env.baseUrl + '/graphql/',
        method: 'get',
        params: {
          query: postsQL.POSTS_BY_TAG_QUERY,
          variables: { Tag: tag }
        }
      })
      console.log('got tag from dispathch: ', tag)
      console.log('got posts by tag: ', result.data.data.posts.nodes)
      commit('SET_POSTS_BY_TAG', result.data.data)
    } catch (err) {
      console.error(err, 'err')
    }
  },
  async GET_POSTS_BY_CATEGORY({ commit }, category) {
    try {
      const result = await axios({
        url: process.env.baseUrl + '/graphql/',
        method: 'get',
        params: {
          query: postsQL.POSTS_BY_CATEGORY_QUERY,
          variables: { Category: category }
        }
      })
      console.log('got category from dispathch: ', category)
      console.log('got posts by category: ', result.data.data.posts.nodes)
      commit('SET_POSTS_BY_CATEGORY', result.data.data)
    } catch (err) {
      console.error(err, 'err')
    }
  },
  async GET_POST_BY_SLUG({ commit }, slug) {
    try {
      const result = await axios({
        url: process.env.baseUrl + '/graphql/',
        method: 'get',
        params: {
          query: postsQL.POST_BY_SLUG_QUERY,
          variables: { Slug: slug }
        }
      }).then(res => {
        console.log('got post slug from dispathch: ', slug)
        const data = res.data.data.postBy
        console.log('got post by slug: ', data)

        var EmojiConvertor = require('emoji-js')
        const emoji = new EmojiConvertor()
        // change the path to your emoji images (requires trailing slash)
        // you can grab the images from the emoji-data link here:
        // https://github.com/iamcal/js-emoji/tree/master/build
        emoji.img_sets.apple.path =
          'https://cdn.learningexecutive.com/img-apple-64/'
        emoji.img_sets.apple.sheet =
          'https://cdn.learningexecutive.com/sheet_apple_64.png'

        console.log('about to replace ', data.content)
        const parsedContent = emoji.replace_colons(data.content)
        // Object.assign(data.content, parsedContent)
        console.log('parsed content', parsedContent)
        // replace content
        data.content = parsedContent
        commit('SET_POST_BY_SLUG', data)
      })
    } catch (err) {
      console.error(err, 'err')
    }
  }
}

export const mutations = {
  SET_RECENT_POSTS(state, data) {
    state.recentPosts = data
  },
  SET_POSTS_BY_TAG(state, data) {
    state.postsByTag = data
  },
  SET_POSTS_BY_CATEGORY(state, data) {
    state.postsByCategory = data
  },
  SET_POST_BY_SLUG(state, data) {
    state.postBySlug = data
  },

  RESET_STATE(state) {
    Object.assign(state, initialState())
  }
}

export const getters = {
  recentPosts: state => {
    if (!state.recentPosts) {
      return null
    } else {
      return state.recentPosts
    }
  },
  postsByTag: state => {
    if (!state.postsByTag) {
      return null
    } else {
      return state.postsByTag
    }
  },
  postsByCategory: state => {
    if (!state.postsByCategory) {
      return null
    } else {
      return state.postsByCategory
    }
  },
  postBySlug: state => {
    if (!state.postBySlug) {
      return null
    } else {
      return state.postBySlug
    }
  }
}

export default { state, actions, mutations, getters }
