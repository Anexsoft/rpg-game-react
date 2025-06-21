import path from "path";

import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

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
      "@npc": path.resolve(__dirname, "src/modules/npc"),
      "@player": path.resolve(__dirname, "src/modules/player"),
      "@enemy": path.resolve(__dirname, "src/modules/enemy"),
      "@weapons": path.resolve(__dirname, "src/modules/items/weapons"),
      "@armor": path.resolve(__dirname, "src/modules/items/armor"),
      "@consumables": path.resolve(__dirname, "src/modules/items/consumables"),
      "@scenes": path.resolve(__dirname, "src/scenes"),
      "@src": path.resolve(__dirname, "src"),
    },
  },
});
