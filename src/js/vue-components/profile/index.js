import Vue from "vue";
import profileLayout from "./layout.vue";


export default (store) => {
    new Vue({
        el: "#vue-profile",
        store,
        render(h) {
            return h(profileLayout);
        },
    });
};
