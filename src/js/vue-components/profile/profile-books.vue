<template lang="pug">
.profile__books
  profileCardBookNew
  profileCardBook
  profileCardBook
  profileCardBook
  profileCardBook

</template>

<script>

import profileCardBook from './profile-card-book.vue'
import profileCardBookNew from './profile-card-book-new.vue'

export default {
    components: {
      profileCardBook, profileCardBookNew
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
