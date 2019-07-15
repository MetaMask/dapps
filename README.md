# home.metamask.io

## Contributing

### Managing featured dapps

You need to submit a pull request to this repo with your changes to the file:
https://github.com/MetaMask/dapps/blob/master/src/data/featured-dapps.js

### Managing dapps inside categories

You need to submit a pull request to this repo with your changes to the file:
https://github.com/MetaMask/dapps/blob/master/src/data/all-dapps.js

### Dapp icons

If you're adding a new dapp to the list, make sure you add its icon under ./public/images/dapps/

If you're deleting a dapp from the list, make sure that you're deleting its icon (but check it's not in use in another category!)

## Development

Available commands:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployments

- Make sure you have the netlify client configured with your credentials and you have access to the project.

#### Staging

- `npm run deploy`

#### Production

- `npm run deploy:prod`
