import Vue from "vue";
import profileLayout from "./layout.vue";


export default (selector, store) => {
    const el = document.querySelector(selector);
    const VueProfile = new Vue({
        store,
        render(h) {
            return h(profileLayout);
        },
    });
    VueProfile.$mount(el);
};
