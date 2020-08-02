import Vue from "vue";
import cModal from "../vue-components/modal/modal.vue";
import cAuth from "../vue-components/auth/layout.vue"

export default (store) => {
    // eslint-disable-next-line no-new
    new Vue({
        el: "#header",
        store,
        components: {
            cModal,
            cAuth,
        },
        data: {
            modalAuth: false
        },
        methods: {
            openModalAuth() {
                if (this.$store.getters["auth/getUser"]) {
                window.location.href = "/lk";
                return;
                };
                this.modalAuth = true;
            },
            modalAuthToggle() {
                this.modalAuth = !this.modalAuth
            }      
        },
    });
};

