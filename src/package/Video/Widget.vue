<template>
  <div class="video-wrapper">
    <video class="video" :src="url" controls></video>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  url: String
})
</script>

<style scoped>
.video-wrapper {
  width: 100%;
}
.video {
  width: 100%;
}
</style>