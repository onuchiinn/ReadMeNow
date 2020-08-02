import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp({
  apiKey: "AIzaSyB5tRZoava09lxaACRiFaF_4mXEs6bRIqo",
  authDomain: "readmenow-daef5.firebaseapp.com",
  databaseURL: "https://readmenow-daef5.firebaseio.com",
  projectId: "readmenow-daef5",
  storageBucket: "readmenow-daef5.appspot.com",
  messagingSenderId: "366854606872",
  appId: "1:366854606872:web:f3ce9e7162a441a333b36d",
  measurementId: "G-0PVYBL8LYX"
})

class AuthError extends Error {
  constructor(message) {
    super(message)
    this.name = "authError"
  }
}




export default async ({email, password}) => {
  
  // const localStorageJSON = window.localStorage.getItem(jwtKey)
  // if (!localStorageJSON)
  //     throw new AuthError("Вы не авторизованы")
  // const localStorageJwt = JSON.parse(localStorageJSON)
  // const apiLink = new URL(url)
  // apiLink.searchParams
  const user = firebase.auth().currentUser;
  // if (!user) {
  //     throw new AuthError("Вы не авторизованы");
  // }
  console.log(firebase.auth().currentUser)
  console.log(email)
  try {
    console.log(email)
    console.log(password)
      await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log('SUCCESS!')
      if (user != null) {
        console.log(user.displayName)
        console.log(user.email)
        console.log(user.photoURL)
        console.log(user.emailVerified)
        console.log(user.uid)
      }
  } catch (e) {
    throw new AuthError("Что-то пошло не так");
    }

}