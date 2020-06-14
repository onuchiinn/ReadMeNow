<template lang="pug">
  .home
      bHeader
      router-view
      bFooter
</template>

<script>

import bHeader from '../components/bHeader'
import bFooter from '../components/bFooter'

export default {
  name: "Home",
  components: {
    bHeader, bFooter
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
.menu__list {
    display: flex;
    justify-content: space-between;
}
</style>