// apps/homepage/vite.config.ts
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../../packages/shared/src'),
      '@shared/*': path.resolve(__dirname, '../../packages/shared/src/*'),
      '@myorg/tailwind-config': path.resolve(__dirname, '../../packages/tailwind-config'),
      '@myorg/tailwind-config/*': path.resolve(__dirname, '../../packages/tailwind-config/*')
    },
  },
})
