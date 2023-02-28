export * as Widget from "./Widget.vue"

export const schema = {
  type: 'object',
  widget: 'rich-text',
  title: '富文本',
  properties: {
    content: {
      type: "string",
      title: "内容",
      widget: "wangEditor",
      defaultValue: ""
    }
  }
}