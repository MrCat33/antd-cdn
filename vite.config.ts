import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from "rollup-plugin-visualizer";
import externalGlobals from 'rollup-plugin-external-globals'
import cdnImport,{autoComplete} from 'vite-plugin-cdn-import-async'
import ViteComponents from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less',
        }),
      ],
    }),
    visualizer({open:false}),
    cdnImport({
      modules:[
        autoComplete('vue'),
        {
          name:'ant-design-vue',
          var:'antd',
          path:'https://cdn.jsdelivr.net/npm/ant-design-vue@4/dist/antd.min.js',
          css:"https://cdn.jsdelivr.net/npm/ant-design-vue@4/dist/reset.min.css"
        }
      ]
    })
  ],
  build:{
    rollupOptions:{
      external: ["vue"],
        plugins: [
          externalGlobals({
            vue:'Vue'
          })
        ]
    }
  }
})
