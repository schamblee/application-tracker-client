import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      // Proxy API requests to your Rails backend
      '/api': {
        target: 'http://localhost:4000', // Your Rails API URL
        changeOrigin: true,              // Changes the origin of the host header
        secure: false,                   // Disable SSL verification in dev mode
      },
    },
  },
})
