# expo-starter

A starter project for a React Native application with Expo and Typescript.

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

## Running Expo

```
npx expo start
```

Follow the instructions in the terminal to run the application on your device.

Note that you may need to use the "r | reload app" option.
