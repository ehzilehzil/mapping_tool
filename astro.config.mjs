// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/mapping_tool/', // GitHub Pages에서 사용하는 서브 디렉토리 경로
  vite: {
    plugins: [tailwindcss()]
  }
});