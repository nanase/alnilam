<h1 align="center">
	<img width="800" src="media/logo.svg" alt="Alnilam">
</h1>

Common libraries and components for my works

## Install

To install the latest update:

```sh
yarn add -D @nanase/alnilam@git+ssh://git@github.com:nanase/alnilam.git

# using https
yarn add -D @nanase/alnilam@https://github.com/nanase/alnilam.git
```

Or, to specify branch or hash:

```sh
yarn add -D @nanase/alnilam@git+ssh://git@github.com:nanase/alnilam.git#BRANCH_NAME
```

`vue`, `vuetify` and `dayjs` are peer dependencies, not bundled. Install
them alongside this package; the versions you already have are the ones
this package will use.

To upgrade to the latest update:

```sh
yarn upgrade @nanase/alnilam
```

## How to use

```ts
import { ThemeToggleButton } from '@nanase/alnilam';
```

```ts
import { SIValue } from '@nanase/alnilam';
```

## Development

### Build

```sh
yarn run build
```

For type checking or build only:

```sh
yarn run type-check
yarn run build-only
```

### Test

This project uses [vitest](https://vitest.dev/) ⚡️

```sh
yarn run test
```

To output code coverage:

```sh
yarn run coverage
```

If you are using VSCode, you can use [vitest extension](https://marketplace.visualstudio.com/items?itemName=vitest.explorer).

### Lint

This project uses [Biome](https://biomejs.dev/) for both linting and formatting.

```sh
yarn run lint
yarn run format
```

To check without writing, the way CI does:

```sh
yarn run lint:check
```

Use the VSCode extension. ([Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome))
