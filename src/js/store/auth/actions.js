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
    } catch (error) {
      throw error
    }
  },

  async findUser({commit}, user) {
    try {
      const db = await firebase.database().ref('profiles/' + user.uid).once('value')
      const people = db.val()
      commit('SET_LOGIN', new User(people))
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
        firebase.database().ref('profiles/' + user.user.uid).set(new User(user.user))
      })
      console.log(`Успешная регистрация пользователя: ${email} `)
    } catch (error) {
      throw error
    }
  },


  async addBook({dispatch}, {user, book}) {
    try {
      await firebase.database().ref('profiles/' + user.uid + '/books').push(book);
      dispatch('findUser', user)
  } catch (error) {
    throw error
  }
},

}