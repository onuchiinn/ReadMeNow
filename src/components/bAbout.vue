<template lang="pug">
  section.about
    .container
      .about-inner
        img(src='../img/image2.jpg').main-picture
        .about-inner__title|It's library for all!

</template>

<script>


export default {
  name: "bAbout",
  components: {
  },
  props: {},
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {}
};
</script>

<style lang="scss">

.main-picture {
  width: 100%;
  position: relative;
}
.about-inner__title {
  position: absolute;
  top: 50%;
  left: 32%;
  color: #ffffff;
  font-size: 80px;
  background: chocolate;
}
</style>