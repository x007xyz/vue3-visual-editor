<template>
  <a-layout class="screen">
    <a-layout-header class="header">Header</a-layout-header>
    <a-layout>
      <a-layout-sider style="background-color: #fff;" width="280">
        <MenuWrapper></MenuWrapper>
      </a-layout-sider>
      <a-layout-content>
        <div class="box">
          <div class="content"></div>
        </div>
      </a-layout-content>
      <a-layout-sider style="background-color: #fff;" width="240">Sider</a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">

</script>

<style scoped>
.screen {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.header {
  background-color: white;
  box-shadow: 0 2px 4px rgb(49 70 102 / 10%);
  z-index: 9;
}
.box {
  display: flex;
  justify-content: center;
  height: 100%;
  overflow-y: auto;
  padding: 24px 0;
}
.content {
  background-color: #fff;
  width: 375px;
}
</style>