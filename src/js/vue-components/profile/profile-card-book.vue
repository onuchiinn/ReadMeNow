<template lang="pug">
.cardbook
  a(href="#").cardbook__link
    img(:src="cardbookImg" alt="cardbook-img").cardbook__img
  .cardbook__author {{book.author}}
  a(href="#").cardbook__title {{book.title}}
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    components: {
    },
    data() {
        return {
          cardbookImg: require('../../../images/cardbookImg.jpeg')
        };
    },
    props: {
      book: {
        type: Object,
        author:null,
        title:null,
      },
    },
    methods: {
    },
    computed: {
          ...mapGetters(
        "auth",["getBooks"]),
    },
};
</script>
