<template lang="pug">
.profile__books
  profileCardBookNew
  profileCardBook(v-for="(item,index) in getBooks" :key="item.id" :book="item")
</template>

<script>

import profileCardBook from './profile-card-book.vue'
import profileCardBookNew from './profile-card-book-new.vue'
import {mapGetters} from 'vuex'

export default {
    components: {
      profileCardBook, profileCardBookNew
    },
    data() {
        return {
        };
    },
    methods: {
    },
    computed: {
          ...mapGetters(
        "auth",["getBooks"]),
    },
};
</script>
