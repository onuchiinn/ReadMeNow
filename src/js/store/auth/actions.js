import firebase from 'firebase/app'
import User from '../../libs/user_help'



export default {

  
  async statusUser({dispatch}) {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        dispatch('findUser', user)
        }
    })
  },

  async loginUser({dispatch}, {email, password}) {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      dispatch('findUser', user.user)
      window.location.href = "/profile.html"
      // dispatch('profile/getProfile')
    } catch (error) {
      throw error
    }
  },

  async findUser({commit}, user) {
    try {
      const db = await firebase.database().ref('profiles').once('value')
      const people = db.val()
      Object.keys(people).forEach(key => {
        const profile = people[key]
        if (profile.uid == user.uid) {
          console.log(profile)
          commit('SET_LOGIN', new User(profile))
        }
    })
  } catch (error) {
    throw error
  }
},



  async logOut({commit}) {
    await firebase.auth().signOut()
    commit('CLEAR_LOGIN')
  },

  async regUser({dispatch}, {email, password}) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then ((user) => {
        firebase.database().ref('profiles').push(new User(user.user))
      })
      console.log(`Успешная регистрация пользователя: ${email} `)
    } catch (error) {
      throw error
    }
  },

}