<template lang="pug">
.example
  .cardbook(@click="modalCardToggle")
    a(href="#").cardbook__link
      img(:src="cardbookImg" alt="cardbook-img").cardbook__img
    .cardbook__author Автор книги
    a(href="#").cardbook__title Новая книга
  c-modal(:open="modalCard" @click="modalCardToggle")
    new-book-modal
</template>

<script>
import newBookModal from "./new-book-modal.vue"
import cModal from "../modal/modal.vue";

export default {
    components: {
      cModal,
      newBookModal, 
    },
    data() {
      return {
        cardbookImg: require('../../../images/newBook.png'),
        modalCard: false,
      };
    },
    methods: {
       modalCardToggle() {
        this.modalCard = !this.modalCard
        },
    },
    computed: {
    },
};
</script>
