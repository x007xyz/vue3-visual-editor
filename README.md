创建项目
```
pnpm create vite vue3-visual-editor --template vue-ts
```
安装依赖
```
pnpm install --registry=https://registry.npm.taobao.org/
```
安装自动导入插件
```bash
pnpm install unplugin-auto-import unplugin-vue-components -D --registry=https://registry.npm.taobao.org/
```

安装eslint插件
```bash
pnpm add eslint eslint-plugin-vue prettier eslint-plugin-prettier eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser -D --registry=https://registry.npm.taobao.org/
```

构建基本的页面结构

widget功能：
[] 渲染组件

定义jsonschema DSL

typescript类型
   vue组件的props和emit

[] 声明option
   [] 提供option默认值
   [] 能够更具option渲染为组件


{
   type: "stirng" // 配置项数据类型
   title: "内容" // 配置项名称
   widget: "组件" // 配置项使用到的组件
   rules: [] // 校验规则
   required: true // 是否必填
   props: { // 配置项使用
      
   }
   options: {} // 选项
   description: 描述信息
}
// 配置项组
[{
   type: "object",
   id: "",
   package: "Text",
   properties: {
      text: {
         type: "string",
         title: "文本内容",
         widget: "input"
      }
   }
}, {
   type: "object",
   package: "Image",
   properties: {
      text: {
         type: "string",
         title: "图片标题",
         widget: "input"
      },
      url: {
         type: "string",
         title: "图片链接",
         widget: "upload-image"
      }
   }
}, {
   type: "object",
   package: ""
}]

https://tencent.github.io/tmagic-editor/docs/guide/conception.html

https://github.com/wangyuan389/mall-cook

基础组件
1. 文本
2. 图片
3. 视频
4. 导航栏
5. 图片轮播图
6. 富文本
7. 图片热区
8. 魔方？

业务组件
1. 商品Item
2. 商品列表
3. 商品组
4. 优惠券