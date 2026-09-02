import { extname, resolve } from 'node:path';
import Vue from '@vitejs/plugin-vue';
import VueMacros from 'unplugin-vue-macros/vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

const root = resolve(__dirname);
const srcDir = resolve(root, 'src');

/**
 * Appends `.js` to a dayjs subpath in the emitted output.
 *
 * dayjs ships no `exports` map, so Node resolves `dayjs/plugin/utc` as a
 * plain path - and an ESM resolver does not guess extensions, so it looks
 * for a file named `utc` and fails. A bundler hides this, which is why the
 * build and this repository's own tests never noticed. A consumer running
 * the published files through Node does not: vitest fails while collecting,
 * before a single test runs.
 *
 * vue and vuetify do declare `exports`, so their specifiers are left alone;
 * appending an extension there would break the lookup instead of fixing it.
 */
function withDayjsSubpathExtension(id: string): string {
  if (!id.startsWith('dayjs/') || extname(id) !== '') {
    return id;
  }

  return `${id}.js`;
}

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
      // Only src produces declarations, and they are rooted there so they
      // land beside the modules package.json's "exports" points at. Left to
      // itself unplugin-dts roots them at the project root and writes
      // dist/src/..., and an exclude list has to keep chasing test files.
      include: ['src/**/*.ts', 'src/**/*.vue'],
      entryRoot: srcDir,
    }),
    libInjectCss(),
  ],
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
        'lib/string': resolve(srcDir, 'lib', 'string.ts'),
        'lib/theme': resolve(srcDir, 'lib', 'theme.ts'),
        'lib/use/index': resolve(srcDir, 'lib', 'use', 'index.ts'),
        'lib/worker': resolve(srcDir, 'lib', 'worker.ts'),
      },
      name: 'alnilam',
      formats: ['es'],
    },
    rollupOptions: {
      // The three peerDependencies. Left bundled, a consumer that already
      // has them would load a second copy, and for vue and vuetify a
      // second copy does not share reactivity or the theme it injects.
      external: ['vue', /^vuetify/, /^dayjs/],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
        paths: withDayjsSubpathExtension,
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
    outDir: resolve(root, './dist'),
    emptyOutDir: true,
  },
});
