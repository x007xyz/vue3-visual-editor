export * as Widget from "./Widget.vue"

export const schema = {
  type: 'object',
  widget: 'image',
  title: '图片',
  properties: {
    url: {
      type: "string",
      title: "图片地址",
      widget: "input",
      defaultValue: "请添加内容"
    }
  }
}