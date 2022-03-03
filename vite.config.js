import { defineConfig } from 'vite';
// import { svelte } from '@sveltejs/vite-plugin-svelte';
// import Icons from 'unplugin-icons/vite';
import legacy from '@vitejs/plugin-legacy';
export default defineConfig({
  root: './src/',
  publicDir: 'static',
  plugins: [
    /*  svelte(),
    Icons({
      compiler: 'svelte',
    }), */
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  build: {
    outDir: 'website',
  },
  server: {
    open: true,
  },
});
