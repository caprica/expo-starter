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

## Running Expo

```
npx expo start
```

Follow the instructions in the terminal to run the application on your device.

Note that you may need to use the "r | reload app" option.
