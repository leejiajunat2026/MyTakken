import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
  base: '/MyTakken/'  // 将 './' 修改为 '/仓库名/'
})
export default defineConfig({ plugins: [vue()], base: './' })
