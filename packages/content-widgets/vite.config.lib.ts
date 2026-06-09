import { svelte } from "@sveltejs/vite-plugin-svelte";
import { copyFileSync, mkdirSync, rmSync } from "fs";
import { minify } from "terser";
import { fileURLToPath } from "url";
import { defineConfig, type Plugin } from "vite";

const haloStaticDir = fileURLToPath(new URL("../../src/main/resources/static", import.meta.url));
const browserBundleName = "content-widgets";

// See https://github.com/vitejs/vite/issues/6555
const minifyBundle = (): Plugin => ({
  name: "minify-bundle",
  async generateBundle(_, bundle) {
    for (const asset of Object.values(bundle)) {
      if (asset.type === "chunk") {
        const code = (await minify(asset.code, { sourceMap: false })).code;
        if (code) {
          asset.code = code;
        }
      }
    }
  },
});

const copyBundleToHaloStatic = (): Plugin => ({
  name: "copy-bundle-to-halo-static",
  closeBundle() {
    mkdirSync(haloStaticDir, { recursive: true });
    rmSync(`${haloStaticDir}/index.iife.js`, { force: true });
    rmSync(`${haloStaticDir}/index.css`, { force: true });
    rmSync(`${haloStaticDir}/index.js`, { force: true });
    copyFileSync(`dist/${browserBundleName}.iife.js`, `${haloStaticDir}/${browserBundleName}.iife.js`);
    copyFileSync(`dist/${browserBundleName}.css`, `${haloStaticDir}/${browserBundleName}.css`);
  },
});

export default defineConfig({
  experimental: {
    enableNativePlugin: true,
  },
  plugins: [
    svelte(),
    minifyBundle(),
    copyBundleToHaloStatic(),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "XhhaoComContentWidgets",
      fileName: browserBundleName,
      formats: ["es", "iife"],
    },
    cssFileName: browserBundleName,
    rollupOptions: {
      output: {
        extend: true,
      },
    },
  },
});
