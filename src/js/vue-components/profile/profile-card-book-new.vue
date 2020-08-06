<template lang="pug">
.cardbook
  a(href="#").cardbook__link
    img(:src="cardbookImg" alt="cardbook-img").cardbook__img
  .cardbook__author Автор книги
  a(href="#").cardbook__title Название книги
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
          cardbookImg: require('../../../images/newBook.png')
        };
    },
    methods: {
    },
    computed: {
    },
};
</script>
