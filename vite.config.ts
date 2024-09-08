/// <reference types="vitest" />
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
      exclude: ['test/**/*.ts', '**/*.test.ts'],
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
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: srcDir }],
  },
  build: {
    lib: {
      entry: {
        'components/index': resolve(srcDir, 'components', 'index.ts'),
        'lib/array': resolve(srcDir, 'lib', 'array.ts'),
        'lib/dayjs': resolve(srcDir, 'lib', 'dayjs.ts'),
        'lib/inputRule': resolve(srcDir, 'lib', 'inputRule.ts'),
        'lib/number': resolve(srcDir, 'lib', 'number.ts'),
        'lib/object': resolve(srcDir, 'lib', 'object.ts'),
        'lib/siPrefix': resolve(srcDir, 'lib', 'siPrefix.ts'),
        'lib/sort': resolve(srcDir, 'lib', 'sort.ts'),
        'lib/state': resolve(srcDir, 'lib', 'state.ts'),
        'lib/string': resolve(srcDir, 'lib', 'string.ts'),
        'lib/theme': resolve(srcDir, 'lib', 'theme.ts'),
        'lib/use/index': resolve(srcDir, 'lib', 'use', 'index.ts'),
        'lib/worker': resolve(srcDir, 'lib', 'worker.ts'),
      },
      name: 'alnilam',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
    outDir: resolve(root, './dist'),
    emptyOutDir: true,
  },
});
