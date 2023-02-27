<template>
  <a-layout class="screen">
    <a-layout-header class="header">Header</a-layout-header>
    <a-layout>
      <a-layout-sider style="background-color: #fff;" width="280">
        <MenuWrapper></MenuWrapper>
      </a-layout-sider>
      <a-layout-content>
        <div class="box">
          <div class="content">
            <Text :options="defaultOptions"></Text>
          </div>
        </div>
      </a-layout-content>
      <a-layout-sider style="background-color: #fff;padding: 24px;" width="240">
        <h3>配置项：</h3>
        <Options :schema="schema" :options="defaultOptions"></Options>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<script setup lang="tsx">
import Text from "./package/Text/widget.vue";
import { schema, generateDefaultValueObj } from "./package/Text";
import Options from "./options";
const value3 = ref("")
const defaultOptions = reactive(generateDefaultValueObj(schema));
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