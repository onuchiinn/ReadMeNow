<template lang="pug">
section.profile
  .profile__wrapper.container
    .profile__info
      img(:src="userPhoto" alt="profile-photo").profile__logo
      .profile__name Иванов И.И.
      ul.profile__menu
        li
          a(href="#") МОИ КНИГИ
        li
          a(href="#") СПИСОК ЖЕЛАЕМОГО
    profileBooks
</template>

<script>
import profileBooks from './profile-books.vue'

export default {
    components: {
      profileBooks
    },
    data() {
        return {
          // eslint-disable-next-line global-require
          userPhoto: require('../../../images/avatar.png')
        };
    },
    methods: {
    },
    computed: {
    },
};
</script>
