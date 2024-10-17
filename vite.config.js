import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// const PORT = process.env.PORT || 8080
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    proxy: 5000
  },
  base:'/myProfile/'
})
