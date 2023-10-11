import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/what-do-you-eat',
  server: {
/*
    proxy: {
      '^/v1/what-do-you-eat': {
        target: 'https://api.counterapi.dev/',
        changeOrigin: true
      },
    }
*/
  }
})
