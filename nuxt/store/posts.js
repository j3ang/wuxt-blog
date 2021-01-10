import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { RECENT_POSTS_QUERY } from '~/graphql/gql_queries'

Vue.use(Vuex)

export const initialState = () => ({ topPosts: null })

export const state = () => initialState()

export const actions = {
  async GET_DATA({ commit }) {
    try {
      const result = await axios({
        url: process.env.baseUrl + '/graphql/',
        method: 'get',
        params: {
          query: RECENT_POSTS_QUERY
        }
      })
      console.log('got posts: ', result.data.data.posts)
      commit('SET_TOP_POSTS', result.data.data.posts.edges)
    } catch (err) {
      console.error(err, 'err')
    }
  }
}

export const mutations = {
  SET_TOP_POSTS(state, data) {
    state.topPosts = data
  },

  RESET_STATE(state) {
    Object.assign(state, initialState())
  }
}

export const getters = {
  topPosts: state => {
    if (!state.topPosts) {
      return null
    } else {
      return state.topPosts
    }
  }
}

export default { state, actions, mutations, getters }
