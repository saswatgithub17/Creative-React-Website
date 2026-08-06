import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CTC%20NEW%20REACT%20WEBSITE/',
  server: {
    proxy: {
      '/DNB': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
})