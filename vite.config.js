// 你是用户主页仓库，base 必须是 '/'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => ({
  base: '/', 
  plugins: [vue(), mode === 'development' && vueDevTools()].filter(Boolean),
}))
