<template lang="pug">
section.profile
  .profile__wrapper.container
    .profile__info
      img(:src="userPhoto" alt="profile-photo").profile__logo
      .profile__name User
      ul.profile__menu
        li
          a(href="#") МОИ КНИГИ
        li
          a(href="#") СПИСОК ЖЕЛАЕМОГО
    profileBooks
</template>

<script>
import profileBooks from './profile-books.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    components: {
      profileBooks
    },
    data() {
        return {
          userPhoto: require('../../../images/avatar.png')
        };
    },
    methods: {
    },
    computed: {
      ...mapGetters([
        "auth/getUser"
      ])
    },
};
</script>
