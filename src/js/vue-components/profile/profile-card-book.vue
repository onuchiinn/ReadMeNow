<template lang="pug">
.cardbook
  a(href="#").cardbook__link
    img(:src="cardbookImg" alt="cardbook-img").cardbook__img
  .cardbook__author Р.П. Уоррен
  a(href="#").cardbook__title Вся королевская рать
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
            // eslint-disable-next-line global-require
            cardbookImg: require('../../../images/cardbookImg.jpeg')
        };
    },
    methods: {
    },
    computed: {
    },
};
</script>
