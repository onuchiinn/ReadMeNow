<template lang="pug">
  .modal(v-if="open" @click.self="$emit('click')")
    .modal__wrapper(@click.self="$emit('click')")
      slot
</template>

<script>
export default {
  props: {
    open: Boolean
  }
}
</script>