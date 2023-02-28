<template>
  <div class="text">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
  size: String,
  color: String,
  align: String,
  weight: String
})

const fontSize = computed(() => {
  return props.size + "px"
})
</script>

<style scoped>
.text {
  color: v-bind("color");
  text-align: v-bind("align");
  font-size: v-bind("fontSize");
  font-weight: v-bind("weight");
}
</style>