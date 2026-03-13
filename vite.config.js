import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Replace 'bachelor-board' with your actual repository name on GitHub
  base: '/', 
  plugins: [react()],
})