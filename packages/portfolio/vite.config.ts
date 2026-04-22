import { fileURLToPath } from "node:url"
import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/blocks": path.resolve(__dirname, "../blocks"),
      "@/constants": path.resolve(__dirname, "../constants"),
      "@/layouts": path.resolve(__dirname, "../layouts"),
      "@/patterns": path.resolve(__dirname, "../patterns"),
      "@/print": path.resolve(__dirname, "../print"),
      "@/ui": path.resolve(__dirname, "../ui"),
      "@/utils": path.resolve(__dirname, "../utils"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
