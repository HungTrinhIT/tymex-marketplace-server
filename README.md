## Tech Stack

**Server:** Node, Express, typescript, ts-node

**DataBase:** mongoose


## Run Locally

Clone the project

```bash
  git clone https://github.com/HungTrinhIT/tymex-marketplace-server
```

Go to the project directory

```bash
  cd tymex-marketplace
```

Install dependencies

```bash
  npm install
```

Start the tsc

```bash
  npm run watch
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV="production"`, 
`NODE_ENV="local"`, 
`MONGO_DB_USER`, 
`MONGO_DB_PASSWORD`. 
****
## Project Structure


The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run start`

| Name               | Description                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **config**         | Contains config environment to be used by the config package, such as MongoDB URI, jwtSecret, and etc.                                                        |
| **dist**           | Contains the distributable (or output) from your TypeScript build                                                                                             |
| **node_modules**   | Contains all your npm dependencies                                                                                                                            |
| **src**            | Contains your source code that will be compiled to the dist dir                                                                                               |
| **src/middleware** | Contains the middlewares to intercept requests                                                                                                                |
| **src/models**     | Models define Mongoose schemas that will be used in storing and retrieving data from MongoDB                                                                  |
| **src/controller** | The controller accesses the database through the model                                                                                                        |
| **src/routes**     | Routes define the endpoints of your API                                                                                                                       |
| **src/interfaces** | Contains all your custom types to better handle type checking with TypeScript                                                                                 |
| **src/services**   | Contains custom types of services like sending mail and etc..                                                                                                                                    
| **src/index.ts**   | Entry point to your express app                                                                                                                               |
| package.json       | File that contains npm dependencies as well as build scripts                                                                                                  |
| tsconfig.json      | Config settings for compiling server code written in TypeScript                                                                                               |
| tslint.json        | Config settings for TSLint code style checking                                                                                                                |

### Configuring TypeScript compilation

TypeScript uses the file `tsconfig.json` to adjust project compile options.
Let's dissect this project's `tsconfig.json`, starting with the `compilerOptions` which details how your project is compiled.

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "lib": [
      "es2016",
      "dom"
    ],
    "allowJs": true,
    "checkJs": true,
    "declaration": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "removeComments": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "pretty": true,
    "experimentalDecorators": true,
    "typeRoots": [
      "node_modules/@types"
    ]
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}