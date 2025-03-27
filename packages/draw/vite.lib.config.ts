// /** @type {import("vite").UserConfig} */
import { resolve } from "path"
import { defineConfig } from "vite"
// plugins
import { createStyleImportPlugin, AndDesignVueResolve } from "vite-plugin-style-import"
// import { viteStaticCopy } from "vite-plugin-static-copy"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"

export default defineConfig({
  mode: "lib",
  resolve: {
    alias: {
      // pass
    }
  },

  build: {
    outDir: "dist",
    assetsDir: "./dist/assets",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@zazn-gis/draw-methods",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      // 将不想打包进库的依赖外部化
      external: ["vue", "mars3d", "mars3d-cesium", "@turf/turf"]
    }
  },
  plugins: [
    vue(), // 引入antd样式
    dts({
      outDir: "./dist/types",
      // rollupTypes: true,
      tsconfigPath: "./tsconfig.lib.json"
    }),
    createStyleImportPlugin({
      resolves: [AndDesignVueResolve()]
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: "less"
        })
      ]
    })
    // viteStaticCopy({
    //   targets: [{ src: "src/assets/svgs/**/", dest: "src/assets/svgs/" }]
    // })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
