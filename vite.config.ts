import path from "path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@layout": path.resolve(__dirname, "src/layout"),
      "@core": path.resolve(__dirname, "src/core"),
      "@player": path.resolve(__dirname, "src/modules/player"),
      "@shared": path.resolve(__dirname, "src/modules/shared"),
      "@resources": path.resolve(__dirname, "src/resources"),
      "@scenes": path.resolve(__dirname, "src/scenes"),
    },
  },
});
