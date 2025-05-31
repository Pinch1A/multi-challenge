import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
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
})
