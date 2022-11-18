import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import autoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports: ['vue', 'vue-router'],
      vueTemplate: true,
      dts: './src/auto-imports.d.ts'
    })
  ],

  resolve: {
    // https://cn.vitejs.dev/config/#resolve-alias
    alias: {
      // 设置别名
      '@': resolve(__dirname, './src')
    }
    // https://cn.vitejs.dev/config/#resolve-extensions
    // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
})
