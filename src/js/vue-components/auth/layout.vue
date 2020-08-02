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
// import auth from '../../libs/auth';

export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      sendData(e) {
        e.preventDefault()
        // eslint-disable-next-line no-unused-expressions
        console.log(this.email)
        console.log(this.password)
        // auth(this.email,this.password)
      }
    },
}
</script>