import { createStore } from 'vuex'

export default createStore({
  state: {
    subcats: [],
    categories:[],
  },
  mutations: {
    setSubcats(state, subcats) {
      state.subcats = subcats
    },
    setcats(state, subcats) {
      state.categories = subcats
    },
  },
  actions: {
    async fetchSubCategories({ commit }) {
      const Url = "https://panel.a2ztr.com/api/types/getsubcategories";
      const response = await fetch(Url);
      const data = await response.json();
      commit('setSubcats', data);
    },
    async fetchCategories({ commit }) {
      const Url = "https://panel.a2ztr.com/api/types/getcategories";
      const response = await fetch(Url);
      const data = await response.json();
      commit('setcats', data);
    },
  }
})
