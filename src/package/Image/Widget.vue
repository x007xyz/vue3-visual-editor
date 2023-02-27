<template>
  <div class="image-wrapper">
    <img :src="options.url" alt="">
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  options: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
</style>