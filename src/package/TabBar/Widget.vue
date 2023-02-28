<template>
  <div class="tabbar-wrapper" :class="{ fixed: mode === 'fixed' }">
    <div class="tabbar" :style="{ backgroundColor: bgColor }">
      <template v-if="tabs.length === 0">
        <div v-for="index in 3" class="tab-item" :style="calcTabStyles(index)" :key="index" @click="selTab(index)">
          标签{{ index }}
        </div>
      </template>
      <template v-else>
        <div v-for="(tab, index) in tabs" class="tab-item" :style="calcTabStyles(index)" :key="index"
          @click="selTab(index)">
          {{ tab.title }}
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  mode: String,
  bgColor: String,
  tabColor: String,
  selectedColor: String,
  tabs: {
    type: Array,
    default() {
      return []
    }
  }
})

const emit = defineEmits(['change'])

const selectedTabIndex = ref(0);

function selTab(index: number) {
  selectedTabIndex.value = index
  if (props.tabs.length > 0) {
    emit('change', index)
  }
}

function calcTabStyles(index: number) {
  const styles = {
    color: props.tabColor
  }
  if (index === selectedTabIndex.value) {
    styles.color = props.selectedColor
    styles.borderBottom = `2px solid ${props.selectedColor}`
  }
  if (props.mode === 'fixed') {
    styles.flex = 1
  }
  return styles
}
</script>
<style lang="css" scoped>
.tabbar-wrapper {
  overflow-x: auto;
}

.tabbar {
  display: flex;
  height: 32px;
  flex-flow: nowrap;
}

.tab-item {
  white-space: nowrap;
  padding: 4px 8px;
  text-align: center;
}

.fixed .tabbar {
  width: 100%;
}

.fixed .tab-item {
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
