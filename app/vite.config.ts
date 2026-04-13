import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        features: path.resolve(__dirname, 'features.html'),
        pricing: path.resolve(__dirname, 'pricing.html'),
        blog: path.resolve(__dirname, 'blog.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        portal: path.resolve(__dirname, 'portal.html'),
        about: path.resolve(__dirname, 'about.html'),
        privacy: path.resolve(__dirname, 'privacy.html'),
        terms: path.resolve(__dirname, 'terms.html'),
      },
    },
  },
});
