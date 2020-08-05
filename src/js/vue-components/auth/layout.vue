<template lang="pug">
  .card-modal
    button.btn.card-modal__close(@click="$emit('close')")
      svg.btn__icon.btn__icon_white
        use(href="icons/icons.svg#close")
    form
      .card-modal__title Введите Вашу электронную почту и пароль для авторизации
      label Электронная почта
        input.input.card-modal__input(type="text" placeholder="test@test.ru" v-model="email")
      label Пароль
        input.input.card-modal__input(type="password" placeholder="*****" v-model="password")
      button.btn.card-modal__submit(type="submit" @click="sendData($event)") Авторизироваться
</template>

<script>
import { mapActions } from "vuex";
import firebase from "firebase/app";

export default {
 data() {
  return {
   email: "",
   password: ""
  };
 },
 methods: {
  ...mapActions("auth", [
    
  ]),
  async sendData(e) {
   e.preventDefault();
   try {
    await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    this.$store.commit("auth/SET_LOGIN", firebase.auth().currentUser.email);
    console.log(firebase.auth().currentUser)
    console.log("SUCCESS!")
    // window.location.href = "/profile.html";
   } catch (e) {
    throw e;
   }
  }
 }
};
</script>