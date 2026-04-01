import { rm } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig } from "vite";

function removeJsBundle() {
  return {
    name: "remove-js-bundle",
    async closeBundle() {
      await rm(resolve(__dirname, "dist", "keture.js"), { force: true });
    }
  };
}

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: "dist",
    rollupOptions: {
      input: resolve(__dirname, "index.css"),
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.names.includes("index.css")) {
            return "keture.css";
          }

          return "assets/[name]-[hash][extname]";
        },
        entryFileNames: "keture.js"
      }
    }
  },
  plugins: [removeJsBundle()]
});
