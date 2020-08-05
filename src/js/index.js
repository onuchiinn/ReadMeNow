import Vue from 'vue';
import Vuex from 'vuex';
import './libs/icons'
import './config/api'
// import './libs/auth'
import "../scss/index.scss"
import mainSlider from "./modules/main-slider"
import storeAuth from './store/auth';
import header from './libs/header';



Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
      auth: storeAuth
  }
});


header(store)

mainSlider.init()
