import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Exported-Whatsapp-Chat-Viewer/',
  plugins: [svelte()]
})
