<template>
  <a-layout class="screen">
    <a-layout-header class="header">Header</a-layout-header>
    <a-layout>
      <a-layout-sider style="background-color: #fff;" width="280">
        <MenuWrapper :list="menuList" @select="onAddComp"></MenuWrapper>
      </a-layout-sider>
      <a-layout-content>
        <div class="box">
          <div class="content">
            <component v-for="comp in componentInScreen" :is="comp.Widget" :options="comp.options"></component>
          </div>
        </div>
      </a-layout-content>
      <a-layout-sider style="background-color: #fff;padding: 24px;" width="240">
        <h3>配置项：</h3>
        <Options :schema="schema" :options="currentComponentOptions"></Options>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<script setup lang="tsx">
import { nanoid } from 'nanoid'
import Options from "./options";
import { schema } from "./package/Text"
import { generateDefaultValueObj } from "./utils";

const modules = import.meta.glob("./package/**/index.ts");

const components = reactive([])

for (const path in modules) {
  modules[path]().then((mod) => {
    components.push(mod)
  })
}

// 获取菜单列表
const menuList = computed(() => {
  return components.map((item: any) => {
    console.log(item)
    return {
      value: item.schema.widget,
      title: item.schema.title,
      icon: item.schema.icon,
    };
  });
});

const value3 = ref("")
const defaultOptions = reactive(generateDefaultValueObj(schema));

const componentInScreen = reactive([])

const currentComponentOptions = ref({})

function onAddComp (item: any) {
  console.log(item)
  // 根据组件名称获取组件，添加到componentInScreen中
  const { Widget, schema } = components.find((item2: any) => item2.schema.widget === item.value)
  componentInScreen.push({
    uuid: nanoid(),
    Widget: Widget.default, options: generateDefaultValueObj(schema)
  })
  currentComponentOptions.value = componentInScreen[componentInScreen.length - 1].options
}
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