// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mermaid from 'astro-mermaid';
import mdx from '@astrojs/mdx';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    mermaid({
      theme: 'forest',
      autoTheme: true
    })
  ]
});
