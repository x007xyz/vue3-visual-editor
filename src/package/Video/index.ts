import defaultImage from "@/assets/default.png"
export * as Widget from "./Widget.vue"

export const schema = {
  type: 'object',
  widget: 'video',
  title: '视频',
  properties: {
    url: {
      type: "string",
      title: "视频地址",
      widget: "input",
      defaultValue: defaultImage
    }
  }
}