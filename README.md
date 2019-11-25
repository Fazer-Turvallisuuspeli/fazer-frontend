<h1 align="center">Fazer Työturvallisuuspeli - Frontend</h1>

Frontend for LAMK's Fazer Työturvallisuuspeli. Requires a backend API for running in production mode. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses Redux to maintain application state. DBjson is used to serve a mock API locally for development.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node and NPM package manager

### Installing

Install the required dependecies to get started

```
npm ci
```

Run in development mode

```
npm run server    # Starts mock API server
npm run build     # Starts hot reloading build
```

## Deployment

After running the **`build`** script, you can use the "public" folder that was created to distribute your application

# File structure

```
.
├── public                # Compiled files
├── src                   # Source files
|   ├── __tests__         # Test files
|   ├── actions           # Redux actions
|   ├── assets            # Project assets
|   ├── components        # "Dumb" React components
|   ├── constants         # Widely used constants
|   ├── containers        # "Smart" React components
|   ├── reducers          # Redux reducers
|   ├── selectors         # Redux selectors
|   ├── store             # Redux store
|   ├── styles            # Styled components
|   └── utils             # Utility files
|   index.jsx             # Root React component
|   serviceWorker.js      # Service worker
|   setupTests.js         # Jest setup file
├── .eslintignore         # ESLint ignored files
├── .eslintrc.js          # ESLint config file
├── .gitignore
├── .prettierignore       # Prettier ignored files
├── .prettierrc           # Prettier config
├── .travis.yml           # Travis config file
├── LICENSE
├── README.md
├── db.json               # DBjson mock api data
├── jest.config.js        # Jest config file
├── package-lock.json
├── package.json
└── routes.json           # DBjson mock API routing config file
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test:coverage`

See above command. Collects test coverage.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm setup`

An alias for `npm ci`, installs project dependencies without changing the dependecy version numbers.

### `npm lint`

Runs ESLint linting tool on project files to **check** for potential issues.

### `npm lint:fix`

See above command. Fixes all fixable linting issues.

### `npm format`

Runs Prettier code formatting tool to **check** for potential issues.

### `npm format:fix`

See above command. Fixes all fixable formatting issues.

### `npm server`

Runs DBJson mock API server on port http://localhost:8080. Uses `db.json` for data and `routes.json` for routes. ":id" in the route URLs can be used as a parameter.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
