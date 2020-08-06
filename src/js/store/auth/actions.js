import firebase from 'firebase/app'
import User from '../../libs/user_help'

export default {
  
  async statusUser({commit}) {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        commit('SET_LOGIN', new User(user))
      }
    })
  },

  async loginUser ({commit}, {email, password}) {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      commit('SET_LOGIN', new User(user.user))
      window.location.href = "/profile.html"
    } catch (error) {
      throw error
    }
  },

  async logOut({commit}) {
    await firebase.auth().signOut()
    commit('CLEAR_LOGIN')
  }

}