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
      "@resources": path.resolve(__dirname, "src/resources"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@shared": path.resolve(__dirname, "src/modules/shared"),
      "@player": path.resolve(__dirname, "src/modules/player"),
      "@npc": path.resolve(__dirname, "src/modules/npc"),
      "@scenes": path.resolve(__dirname, "src/scenes"),
    },
  },
});
