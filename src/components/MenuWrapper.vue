<template>
  <div class="menu-wrapper">
    <div class="menu-list">
      <div class="menu-item active">
        <a-button type="text" class="icon">
          <appstore-outlined/>
        </a-button>
        <div class="text">组件</div>
      </div>
    </div>
    <div class="menu-content">
      <div class="header">基础组件</div>
      <div class="widget-wrapper">
        <div class="widget-item" v-for="item in list" :key="item.value" @click="onSelect(item)">
          <check-circle-outlined style="color: #1055ff;"/>
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="header">业务组件</div>
        <div class="widget-wrapper">
          <div class="widget-item">
            <check-circle-outlined style="color: #1055ff;"/>
            <span>商品</span>
          </div>
          <div class="widget-item">
            <check-circle-outlined style="color: #1055ff;"/>
            <span>商品列表</span>
          </div>
          <div class="widget-item">
            <check-circle-outlined style="color: #1055ff;"/>
            <span>商品组</span>
          </div>
          <div class="widget-item">
            <check-circle-outlined style="color: #1055ff;"/>
            <span>导航栏</span>
          </div>
          <div class="widget-item">
            <check-circle-outlined style="color: #1055ff;"/>
            <span>优惠券</span>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppstoreOutlined, CheckCircleOutlined } from '@ant-design/icons-vue';

defineProps({
  list: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['select'])

const onSelect = (item) => {
  emit('select', item)
}
</script>

<style scoped lang="scss">
.menu-wrapper {
  display: flex;
  height: 100%;
}
.menu-list {
  width: 56px;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .06);
  padding: 24px 0;
}
.menu-content {
  flex: 1;
  padding: 0 24px;
  .header {
    font-size: 16px;
    font-weight: 500;
    margin-top: 24px;
  }
  .widget-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .widget-item {
    box-sizing: border-box;
    width: 86px;
    margin-top: 8px;
    height: 36px;
    line-height: 36px;
    padding: 0 8px;
    background-color: rgba(0, 102, 255, .08);
    border-radius: 4px;
    transition: background-color .2s ease;
    font-size: 12px;
    cursor: pointer;
    span {
      margin-left: 4px;
    }
  }
}
.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8;
  color: rgba(0, 0, 0, .85);
  font-size: 14px;
  &.active .icon {
    background-color: rgba(0, 102, 255, .08);
    color: #1055ff;
  }
  .icon {
    width: 32px;
    height: 32px;
    padding: 4px;
    font-size: 20px;
    border-radius: 8px;
    box-sizing: content-box;
    transition: all .3s;
  }
  .text {
    margin-top: 4px;
  }
}
</style>