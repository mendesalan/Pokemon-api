## What's inside it

### Tech stack
- [Node](https://github.com/nodejs/node)
- [Express](https://github.com/expressjs/express)
- [GraphQL](https://github.com/graphql/graphql-js)
- [Apollo Server](https://github.com/apollographql/apollo-server)
- [Typescript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org/)

## Dependencies
- Node js => v10

## Up and Running
- Install dependencies `yarn (or npm i)`
- Run `yarn dev (or npm dev)` to run development server (API will be available in `http://localhost:8000/api` and GraphQL in `http://localhost:8000/graphql`)

## Available scripts
- `yarn start (or npm start)`: Run server in production mode
- `yarn dev (or npm dev)`: Run server in development mode
- `yarn build (or npm run build)`: Generate production build (files will be available on `build` directory)
- `yarn lint (or npm run lint)`: Run linter based on eslint configurations
- `yarn lint:fix (or npm run lint:fix )`: Run linter and fix errors

### Folders structure
```
├── /src/               # Source of the server code
│   ├── /api/           # REST api routes
│   ├── /config/        # Routes and server configurations
│   ├── /graphql/       # GraphQL types and routes
│   ├── /mocks/         # Dumb mocks -- Development purposes
```

## Anatomyre
- REST API routes will reside on `api` folder
- GraphQL types and resolvers will reside on `graphql` folder
