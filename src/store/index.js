import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users:[]
  },
  mutations: {
    SET_USERS(state, users){
      state.users = users
    }
  },
  // ACTIONS - funcții care pot face operații asincrone
  actions: {
    async fetchUsers({ commit }) {
      try {
        // Face cerere GET către serverul nostru care rulează pe port 3000
        const response = await axios.get('http://localhost:3000/api/users')

        // response.data va conține array-ul nostru de utilizatori pe care l-am definit în server.js

        // Trimitem datele către mutation pentru a actualiza state-ul
        commit('SET_USERS', response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
  },
  // GETTERS - funcții care ne ajută să accesăm state-ul
  getters: {
    getUsers: state => state.users  // Returnează lista de utilizatori când este cerută
  }
})
