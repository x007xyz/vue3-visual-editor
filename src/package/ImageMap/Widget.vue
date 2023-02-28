<template>
  <div class="image-wrapper">
    <img :src="url" alt="">
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  url: String
})
</script>

<style scoped>
.image-wrapper {
  width: 100%;
}
.image-wrapper img {
  width: 100%;
}
</style>