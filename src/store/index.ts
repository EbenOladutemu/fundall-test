import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

const setToken = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  instance.defaults.headers.common['Accept'] = 'application/json';
  instance.defaults.headers.common['Content-Type'] = 'application/json';
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: {},
    signUpData: {}
  },
  mutations: {
    setLoginSuccess(state, data) {
      state.login = data;
      setToken(data.success.user.access_token)
    },
    setSignupSuccess(state, data) {
      state.signUpData = data;
    },
    resetSignUpData(state) {
      state.signUpData = {}
    }
  },
  actions: {
    async login ({ commit }, formData) {
      const response = await instance.post(`/api/v1/login`, {
        email: formData.email,
        password: formData.password,
      })
      commit('setLoginSuccess', response.data);
    },
    async signUp ({ commit }, formData) {
      const response = await instance.post('/api/v1/register', {
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword
      })
      commit('setSignupSuccess', response.data);
    },
    async resetSignUp({ commit }) {
      commit('resetSignUpData')
    }
  },
  modules: {
  },
  plugins: [createPersistedState({
      key: 'fundall',
    }
  )]
})
