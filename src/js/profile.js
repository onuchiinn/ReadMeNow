import Vue from 'vue'
import Vuex from 'vuex'
import storeAuth from './store/auth'
import storeProfile from './store/profile'
import './config/api'
import "./libs/icons"
import "../scss/profile.scss"
import profile from "./vue-components/profile"
import header from './libs/header';



Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
      auth: storeAuth,
      profile: storeProfile
  }
});

header(store)
profile(store)


