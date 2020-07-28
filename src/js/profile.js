import Vue from 'vue'
import Vuex from 'vuex'
import { storeProfilePage } from './store';
import "./libs/icons"
import "../scss/profile.scss"
import profile from "./vue-components/profile"
// import "./styles" //подключение глобальных стилей
// import "../scss/lk.scss"

Vue.use(Vuex)

const store = new Vuex.Store(storeProfilePage)

profile('#vue-profile', store)
