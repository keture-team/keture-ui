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
    cssCodeSplit: false,
    emptyOutDir: true,
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "index.js"),
      formats: ["es"],
      fileName: () => "keture.js",
      cssFileName: "keture"
    }
  },
  plugins: [removeJsBundle()]
});
