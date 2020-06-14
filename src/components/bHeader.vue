<template lang="pug">
header.header
    .container
        nav.menu
            h1.logo
                router-link(to="/") READMENOW
            ul.menu__list
                li
                    router-link(to="/books") ХОРОШИЕ КНИГИ
                li
                    router-link(to="/vmore") ХОЧУ ПОЧИТАТЬ
            ul.authButton
                li(v-on:click='show = !show') ВОЙТИ В ЛИЧНЫЙ КАБИНЕТ
                li РЕГИСТРАЦИЯ
            login(v-if="show")
</template>

<script>
import login from "./login";

export default {
  name: "Header",
  components: {
    login
  },
  props: {},
  data() {
    return {
      show: false
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {}
};
</script>

<style lang="scss">
.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.menu__list,
.auth {
  display: flex;
  li + li {
    margin-left: 40px;
  }
}
</style>