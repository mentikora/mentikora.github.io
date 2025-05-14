import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss()],
    json: {
      stringify: true,
    },
    build: {
      chunkSizeWarningLimit: 500,
      outDir: 'dist',
      assetsDir: 'assets',
    },
    test: {
      globals: true,
      environment: 'jsdom',
      reporter: ['default'],
      setupFiles: './src/test.setup.ts',
      mockReset: false,
      include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    },
    resolve: {
      alias: {
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
  }
})
