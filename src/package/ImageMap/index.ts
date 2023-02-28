import defaultImage from "@/assets/default.png"
export * as Widget from "./Widget.vue"

export const schema = {
  type: 'object',
  widget: 'image-map',
  title: '图片热区',
  properties: {
    url: {
      type: "string",
      title: "图片地址",
      widget: "input",
      defaultValue: defaultImage
    },
    maps: {
      type: "array",
      title: "编辑热区",
      widget: "input",
      defaultValue: [],
      properties: {
        link: {
          type: "string",
        },
        width: {
          type: "string",
        },
        height: {
          type: "string",
        },
        left: {
          type: "string",
        },
        top: {
          type: "string",
        }
      }
    }
  }
}