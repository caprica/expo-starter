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

## Running Expo

```
npx expo start
```

Follow the instructions in the terminal to run the application on your device.

Note that you may need to use the "r | reload app" option.
