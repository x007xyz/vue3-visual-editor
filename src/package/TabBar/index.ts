export * as Widget from "./Widget.vue"

export const schema = {
  type: 'object',
  widget: 'tabbar',
  title: '导航栏',
  properties: {
    mode: {
      type: "string",
      title: "标签模式",
      widget: "select",
      defaultValue: "auto",
      options: [{
        label: "弹性", value: "auto"
      }, {
        label: "平分", value: "fixed"
      }]
    },
    tabColor: {
      type: "string",
      title: "文本颜色",
      widget: "color",
      defaultValue: "#333"
    },
    selectedColor: {
      type: "string",
      title: "选中颜色",
      widget: "color",
      defaultValue: "#409EFF"
    },
    bgColor: {
      type: "string",
      title: "背景颜色",
      widget: "color",
      defaultValue: "#fff",
    },
    tabs: {
      type: "object",
      title: "标签列表",
      widget: "input",
      defaultValue: []
    }
  }
}