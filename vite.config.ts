import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      dts: true,
      imports: ["vue", "vue-router"],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      // dts: 'src/auto-import.d.ts'
      eslintrc: { // 生成eslint的配置文件，需要在eslint配置中导入
        enabled: true, // Default `false`
        globalsPropValue: "readonly", // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      dts: true,
      dirs: ["src/components"],
      types: [{
        from: "vue-router",
        names: ["RouterLink", "RouterView"]
      }],
      resolvers: [AntDesignVueResolver()]
    })
  ],
})
