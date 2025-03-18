import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

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
    },
    test: {
      globals: true,
      environment: 'jsdom',
      reporter: ['default'],
      setupFiles: './src/test.setup.ts',
      mockReset: false,
      include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    },
  }
})
