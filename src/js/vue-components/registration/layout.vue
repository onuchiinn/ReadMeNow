<template lang="pug">
  .card-modal
    button.btn.card-modal__close(@click="$emit('close')")
      svg.btn__icon.btn__icon_white
        use(href="icons/icons.svg#close")
    form(@submit.prevent="onSubmit")
      .card-modal__title РЕГИСТРАЦИЯ НА САЙТЕ
      label Электронная почта
        input.input.card-modal__input(type="text" placeholder="test@test.ru" v-model="email")
      label Пароль
        input.input.card-modal__input(type="password" placeholder="*****" v-model="password")
      button.btn.card-modal__submit(type="submit") Зарегистрироваться
</template>

<script>

export default {
 data() {
  return {
   email: "",
   password: ""
  };
 },
 methods: {
  onSubmit() {
    const user = {
          email: this.email,
          password: this.password
        }
    this.$store.dispatch('auth/regUser', user)
    this.$emit('close')
  }
 }
};
</script>