# expo-starter

A starter project for a React Native application with Expo and Typescript.

## Steps for developers after cloning the project

### Initialse the git pre-commit hook for Husky

```
yarn prepare
```

### Visual Studio Code extensions

 - React Native Tools

## Steps used to create this starter project

### Create expo application

```
npx create-expo-app -t expo-template-blank-typescript
rm package-lock.json
yarn install
```

### Initial Typescript configuration

Edit tsconfig.json:

```
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "allowJs": false,
    "strict": true
  }
}
```

### Prettier

```
yarn add -D prettier
npm pkg set scripts.format="prettier --write './**/*{ts,tsx}'"
```

Create .prettierrc:

```
{
    "semi": false,
    "useTabs": false,
    "tabWidth": 4,
    "printWidth": 120,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "bracketSpacing": true,
    "bracketSameLine": false,
    "arrowParens": "always",
    "endOfLine": "lf",
    "trailingComma": "all",
    "quoteProps": "consistent"
}
```

Run prettier:

```
yarn format
```

### Editor Config

Create .editorConfig:

```
root = true

[*]
end_of_line = lf
insert_final_newline = true
charset = utf-8
indent_style = space
indent_size = 4
```

### Check Typescript

```
npm pkg set scripts.check-typescript="tsc --noEmit"
```

Run the typescript compiler:

```
yarn check-typescript
```

### ESLint

```
yarn add -D eslint-config-universe
yarn add -D eslint
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks eslint-import-resolver-typescript
npm pkg set scripts.eslint:all="eslint './**/*{ts,tsx}'"
```

Create .eslintrc.js:

```
module.exports = {
  extends: ['universe', 'universe/shared/typescript-analysis', 'plugin:react-hooks/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  globals: {
    __dirname: true,
  },
}
```

Run ESLint:

```
yarn eslint:all
```

### Combine linting and type-checking

```
npm pkg set scripts.lint="yarn eslint:all && yarn check-typescript"
```

Run combined linting:

```
yarn lint
```

### Husky

```
yarn add -D husky lint-staged
npm pkg set scripts.prepare="husky install"
yarn prepare
npx husky add .husky/pre-commit 'npx --no-install lint-staged'
```

Create .lintstagedrc.js:

```
const path = require('path')

const prettierCommand = (filenames) =>
    `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`

const eslintCommand = (filenames) =>
    `yarn eslint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`

const checkTypescriptCommand = () =>
    `yarn check-typescript`

module.exports = {
    '*.{ts,tsx}': [prettierCommand, eslintCommand, checkTypescriptCommand],
}
```

## Jest and React Testing Library

```
npx expo install jest-expo jest
yarn add -D @types/jest
npm pkg set scripts.test="jest"
```

Add to pacakge.json:

```
"jest": {
  "preset": "jest-expo",
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ]
}
```

```
yarn add -D eslint-plugin-jest @testing-library/react-native @testing-library/jest-native eslint-plugin-testing-library
```

Add to .eslintrc.js:

```
extends: ['plugin:testing-library/react'],
plugins: ['jest', 'testing-library']
```

## Expo Router

```
npx expo install expo-router react-native-screens expo-linking expo-constants react-native-gesture-handler
```

In package.json, change the "main" entry point:

```
"main": "index.ts"
```

Create index.ts:

```
import 'expo-router/entry'
```

Change app.json:

```
{
  "expo": {
    "scheme": "starter"
  }
}
```

Note that "scheme" is used to identify the deep-linking scheme identifier for the application, this should be e.g. the lower-case application name.

Remove obsolete files, App.tsx is superseded by app/index.tsx:

```
rm App.tsx App.test.tsx
```

## React Native Elements

```
yarn add @rneui/themed @rneui/base
```

Update the transform ignore pattern in package.json to add these two new packages by appending "|@rneui/base|@rneui/themed":

```
"jest": {
  "preset": "jest-expo",
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@rneui/base|@rneui/themed)"
  ]
}
```

Add theme provider component to app/index.tsx.

*Theme changes are _not_ hot-reloaded, shake the device (or CTRL+M in the emulator) to get the reload menu or choose reload from the Expo terminal.*

## Running Expo

```
npx expo start
```

Or:

```
npx expo --clear
```

Follow the instructions in the terminal to run the application on your device.

Note that you may need to use the "r | reload app" option.

## Gotchas!

### Symbolic Links and the workspace directory

If the workspace directory is a symbolic link, then Visual Studio Code will complain about a mismatch in configuration between ESLint and Typescript:

```
Parsing error: ESLint was configured to run on `/home/coder/workspaces/expo-starter/App.tsx` using `parserOptions.project`: <tsconfigRootDir>/tsconfig.json
However, that TSConfig does not include this file. Either:
- Change ESLint's list of included files to not include this file
- Change that TSConfig to include this file
- Create a new TSConfig that includes this file and include it in your parserOptions.project
See the typescript-eslint docs for more info: https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
```

In this example, the "workspaces" directory is a symbolic link.

*I do not have a solution for this yet.*

## References

https://dev.to/vladimirvovk/starting-react-native-project-in-2023-2le
