import Vue from 'vue';
import Vuex from 'vuex';
import './libs/icons'
// import './config/api'
// import auth from './libs/auth'
// import "./libs/lazyimages";
// import './styles';
import "../scss/index.scss"
import mainSlider from "./modules/main-slider"
// import LoginModal from "./vue-components/modalLogin"
import storeAuth from './store/auth';
import header from './libs/header';



Vue.use(Vuex);

// // eslint-disable-next-line no-unused-vars
const store = new Vuex.Store({
  modules: {
      auth: storeAuth
  }
});


header(store)

mainSlider.init()
