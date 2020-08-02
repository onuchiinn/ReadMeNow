import Vue from 'vue'
import Vuex from 'vuex'
import storeAuth from './store/auth'
import './config/api'
import "./libs/icons"
import "../scss/profile.scss"
import profile from "./vue-components/profile"
// import "./styles" //подключение глобальных стилей
// import "../scss/lk.scss"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
      auth: storeAuth,
  }
});

profile('#vue-profile', store)
