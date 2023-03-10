import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "https://tillintallin.com/",
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3003/",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: "../server/dist"
  }
})
