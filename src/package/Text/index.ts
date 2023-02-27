export * as Widget from "./Widget.vue"

export const schema = {
  type: 'object',
  widget: 'text',
  title: '文本',
  properties: {
    text: {
      type: "string",
      title: "文本内容",
      widget: "input",
      defaultValue: "请添加内容"
    },
    color: {
      type: "string",
      title: "文本颜色",
      widget: "color",
      defaultValue: "#000000"
    },
    align: {
      type: "string",
      title: "对齐方式",
      widget: "select",
      defaultValue: "left",
      options: [{
        label: "左对齐", value: "left"
      }, {
        label: "居中", value: "center"
      }, {
        label: "右对齐", value: "right"
      }]
    },
    size: {
      type: "string",
      title: "字体大小",
      widget: "px-input",
      defaultValue: "14",
    },
    weight: {
      type: "string",
      title: "字体粗细",
      widget: "select",
      defaultValue: "normal",
      options: [
        "normal",
        "bold",
        "bolder",
        "lighter",
      ]
    }
  }
}