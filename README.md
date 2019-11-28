<h1 align="center">Fazer Työturvallisuuspeli - Frontend</h1>

Frontend for LAMK's Fazer Työturvallisuuspeli. Requires a backend (https://github.com/Fazer-Turvallisuuspeli/fazer-backend/) serving the API. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses Redux to maintain application state.

## Redux
**Redux store** holds the whole application state tree and it is divided into parts, also called slices, like categories, questions, progress, etc. Each state slice has its own **reducer** file to modify that part of the state slice. All these **reducers** are combined into a single **root reducer** which is passed to the **store**. 

**Reducers** are essentially just big switch case functions which define the initial state for that particular slice and manage changes. To modify the state, you **dispatch** an **action**. Actions have a **type** and potentially a **payload**, containing some information like data or an error object. **Reducer** receives the **action** and checks the **type** of it inside the switch case function. The **payload** can then be accessed inside the reducer and be used to make state changes. All reducers should return the current state AND the changes. 

**Types** are just arbitrary strings you've decided to use but in this project they are defined as constants, all the possible **types** are listed inside the `constants/actionTypes.js` file. 

**Selectors** are used to access the state, e.g. inside components you can access categories by using the function `selectCategories` and by passing it the current **state** as the parameter. To create more complex **selectors** like to access nested objects, other **selectors** should be used inside the selector. 

```js
export const selectCategories = state => state.categories;

export const selectCategoriesData = createSelector(
  [selectCategories],
  categories => categories.data
);
```

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Authors

- **Katri Henttonen** - [Katri Henttonen](https://github.com/KatriH)
- **Jonna Jääskeläinen** - [Jonna Jääskeläinen](https://github.com/JonnaJonna)
- **Veikko Lehmuskorpi** - [Veikko Lehmuskorpi](https://github.com/VeikkoLehmuskorpi)
- **Katri Putkonen** - [Katri Putkonen](https://github.com/Katorip)
- **Jenny Rantanen** - [Jenny Rantanen](https://github.com/jennyran)
- **Jani Selin** - [Jani Selin](https://github.com/selinjani)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
