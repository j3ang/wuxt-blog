import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { SITE_TAGS_QUERY } from '~/graphql/gql_queries'

Vue.use(Vuex)

export const initialState = () => ({ siteTags: null })

export const state = () => initialState()

export const actions = {
  async GET_SITE_TAGS({ commit }) {
    try {
      const result = await axios({
        url: process.env.baseUrl + '/graphql/',
        method: 'get',
        params: {
          query: SITE_TAGS_QUERY
        }
      })
      console.log('got site tags: ', result.data.data.tags)
      commit('SET_SITE_TAGS', result.data.data.tags.edges)
    } catch (err) {
      console.error(err, 'err')
    }
  }
}

export const mutations = {
  SET_SITE_TAGS(state, data) {
    state.siteTags = data
  },

  RESET_STATE(state) {
    Object.assign(state, initialState())
  }
}

export const getters = {
  siteTags: state => {
    if (!state.siteTags) {
      return null
    } else {
      return state.siteTags
    }
  }
}

export default { state, actions, mutations, getters }
