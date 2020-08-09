<template lang="pug">
section.profile(v-if="getUser")
  .profile__wrapper.container
    .profile__info
      img(:src="userPhoto" alt="profile-photo").profile__logo
      .profile__name {{getUser.email}}
      ul.profile__menu
        li
          a(href="#") МОИ КНИГИ
        li
          a(href="#") СПИСОК ЖЕЛАЕМОГО
    profileBooks
</template>

<script>
import profileBooks from './profile-books.vue'
import {mapGetters} from 'vuex'

export default {
    components: {
      profileBooks
    },
    data() {
        return {
          userPhoto: require('../../../images/avatar.png'),
        };
    },
    methods: {
    },
    computed: {
      ...mapGetters(
        "auth",["getUser"]),
    },
};
</script>
