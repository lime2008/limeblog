import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import splitPackagePlugin from './splitPackagePlugin';
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    assetsInlineLimit: 0 // 图片转 base64 编码的阈值
  },
  plugins: [splitPackagePlugin(),vue(),],
})
