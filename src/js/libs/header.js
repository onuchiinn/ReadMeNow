import Vue from "vue";
import cModal from "../vue-components/modal/modal.vue";
import cAuth from "../vue-components/auth/layout.vue"

import { mapGetters, mapActions } from 'vuex';

export default (store) => {

    new Vue({
        el: "#header",
        store,
        components: {
            cModal,
            cAuth,
        },
        data: {
            modalAuth: false,
        },
        methods: {
            ...mapActions("auth", [
                "statusUser", "logOut"
            ]),
            // openModalAuth() {
            //     this.modalAuth = true;
            // },
            modalAuthToggle() {
                this.modalAuth = !this.modalAuth
            },
        },
        computed: {
            ...mapGetters("auth",
                ["checkUser", "getUser"]),
        },
        created() {
            this.statusUser()
        }
    });
};

