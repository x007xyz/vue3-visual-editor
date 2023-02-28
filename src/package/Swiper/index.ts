export * as Widget from "./Widget.vue"

export const schema = {
  type: 'object',
  widget: 'swiper',
  title: '轮播图',
  properties: {
    radius: {
      type: "string",
      title: "图片圆角",
      widget: "px-input",
      defaultValue: "4"
    },
    content: {
      type: "object",
      title: "轮播列表",
      widget: "input",
      defaultValue: [],
      properties: {
        url: {
          type: "string",
        },
        link: {
          type: "string",
        }
      }
    }
  }
}