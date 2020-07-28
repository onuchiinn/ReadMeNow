<template lang="pug">
section.profile
  .profile__wrapper.container
    .profile__column
      .profile__logo МОЯ АВАТАРКА
      .profile__name Иванов И.И.
      ul.profile__menu
        li МОИ КНИГИ
        li СПИСОК ЖЕЛАЕМОГО
    .profile__column
      profileBooks
</template>

<script>
import profileBooks from './profile-books.vue'

export default {
    components: {
      profileBooks
    },
    data() {
        return {};
    },
    methods: {
    },
    computed: {
    },
};
</script>
