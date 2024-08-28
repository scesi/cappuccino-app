# Cappuccino App

## Install

1. Run `npm ci` to install the dependencies.
2. Run `npm run dev` to start the development server.

#### Note

- The default port of the application is as follows: 5173

- for example: localhost:5173

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## docker

- if you need test deployment for application, use the next steps with docker-compose and dockerfiles

### build

```
docker-compose build --progress=plain
```

### Run service

- please use the next command if you need run application in backgroup with docker

- default port 80
```
docker-compose up -d
```

- open your browser localhost

- use the next command if you need down docker-compose application

```
docker-compose down
```

### Logs Service

- you can check logs with the following command

```
docker-compose logs -f
```
