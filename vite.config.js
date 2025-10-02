// 你是用户主页仓库，base 必须是 '/'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => ({
  base: '/',  // ⚠️ 用户主页固定用 '/'
  plugins: [vue(), mode === 'development' && vueDevTools()].filter(Boolean),
}))
