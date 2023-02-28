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
            <component v-for="comp in componentsInScreen" :is="componentMap[comp.componentName].component" v-bind="comp.options"></component>
          </div>
        </div>
      </a-layout-content>
      <a-layout-sider style="background-color: #fff;padding: 24px;" width="240">
        <h3>配置项：</h3>
        <Options v-if="selectedComponent" :schema="componentMap[selectedComponent.componentName].schema" :options="selectedComponent.options"></Options>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<script setup lang="tsx">
import { nanoid } from 'nanoid'
import Options from "./options";
import { generateDefaultValueObj } from "./utils";

// TODO:使用Suspense来实现组件加载
const componentMap = shallowReactive<{
  [propName: string]: {
    component: any,
    schema: any
  }
}>({})

function loadPackage() {
  const modules = import.meta.glob("./package/**/index.ts");

  for (const path in modules) {
    modules[path]().then(({ Widget, schema }) => {
      componentMap[schema.widget] = { component: Widget.default, schema }
    })
  }
}

loadPackage()

// 获取菜单列表
const menuList = computed(() => {
  return Object.values(componentMap).map((item: any) => {
    return {
      value: item.schema.widget,
      title: item.schema.title,
      icon: item.schema.icon,
    };
  });
});

// 存储screen中的组件
const componentsInScreen = reactive<{
  uuid: string,
  componentName: string,
  options: any
}[]>([])
// 当前选中的组件
const selectedComponent = ref<{
  uuid: string,
  componentName: string,
  options: any
}>()

function onAddComp (item: any) {
  // 根据组件名称获取组件，添加到componentInScreen中
  const { schema } = componentMap[item.value]
  componentsInScreen.push({
    uuid: nanoid(), // 唯一标识
    componentName: schema.widget, // 组件名称
    options: generateDefaultValueObj(schema) // 组件配置项
  })

  selectedComponent.value = componentsInScreen[componentsInScreen.length - 1]
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