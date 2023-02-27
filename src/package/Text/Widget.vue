<template>
  <div class="text">
    {{ options.text }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  options: {
    type: Object,
    required: true
  }
})

const fontSize = computed(() => {
  return props.options.size + "px"
})
</script>

<style scoped>
.text {
  color: v-bind("options.color");
  text-align: v-bind("options.align");
  font-size: v-bind("fontSize");
  font-weight: v-bind("options.weight");
}
</style>