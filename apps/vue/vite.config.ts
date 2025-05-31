import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../../packages/shared'),
      '@shared/*': path.resolve(__dirname, '../../packages/shared/*'),
      '@types': path.resolve(__dirname, '../../packages/shared/types'),
      '@types/*': path.resolve(__dirname, '../../packages/shared/types/*'),
      '@myorg/tailwind-config': path.resolve(__dirname, '../../packages/tailwind-config'),
      '@myorg/tailwind-config/*': path.resolve(__dirname, '../../packages/tailwind-config/*')
    },
  },
  plugins: [vue()],
})
