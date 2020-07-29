import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const api = firebase.initializeApp({
  apiKey: "AIzaSyB5tRZoava09lxaACRiFaF_4mXEs6bRIqo",
  authDomain: "readmenow-daef5.firebaseapp.com",
  databaseURL: "https://readmenow-daef5.firebaseio.com",
  projectId: "readmenow-daef5",
  storageBucket: "readmenow-daef5.appspot.com",
  messagingSenderId: "366854606872",
  appId: "1:366854606872:web:f3ce9e7162a441a333b36d",
  measurementId: "G-0PVYBL8LYX"
})

export default {
  api
};