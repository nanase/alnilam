/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import VueMacros from 'unplugin-vue-macros/vite';
import Vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

const root = resolve(__dirname);
const srcDir = resolve(root, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          script: {
            defineModel: true,
          },
          features: {
            propsDestructure: true,
          },
        }),
      },
    }),
    dts({
      exclude: ['**/*.test.ts'],
    }),
  ],
  test: {
    root,
    include: ['test/**/*.test.ts'],
    globals: true,
    coverage: {
      reporter: ['text', 'json'],
      include: ['src/**/*.{ts,vue}'],
      exclude: ['**/index.ts'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(srcDir, 'index.ts'),
      name: 'alnilam',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    outDir: resolve(root, './dist'),
    emptyOutDir: true,
  },
});
