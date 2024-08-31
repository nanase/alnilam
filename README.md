# Aʟɴɪʟᴀᴍ :star::star2::star:

Common libraries and components for my works

## Install

To install the latest update:

```sh
yarn add -D @nanase/alnilam@git+ssh://git@github.com:nanase/alnilam.git
```

Or, to specify branch or hash:

```sh
yarn add -D @nanase/alnilam@git+ssh://git@github.com:nanase/alnilam.git#BRANCH_NAME
```

To upgrade to the latest update:

```sh
yarn upgrade @nanase/alnilam
```

## How to use

```ts
import ThemeToggleButton from '@nanase/alnilam/components/ThemeToggleButton';
```

```ts
import { SIValue } from '@nanase/alnilam/lib/siPrefix';
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

```sh
yarn run lint
yarn run prettier
```

Use VSCode extensions. ([ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode))
