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

### Release

The project follows the same release process as the other projects in the MetaMask organization. 

1. Choose a release version.

   - The release version should be chosen according to SemVer. Analyze the changes to see whether they include any breaking changes, new features, or deprecations, then choose the appropriate SemVer version. See [the SemVer specification](https://semver.org/) for more information.

2. If this release is backporting changes onto a previous release, then ensure there is a major version branch for that version (e.g. `1.x` for a `v1` backport release).

   - The major version branch should be set to the most recent release with that major version. For example, when backporting a `v1.0.2` release, you'd want to ensure there was a `1.x` branch that was set to the `v1.0.1` tag.

4. Create a release PR branch using the following syntax `release/x.x.x`.

4. Run `yarn auto-changelog` on the release branch and check that the changelog is correctly formatted.

   - Generally any changes that don't affect consumers of the package (e.g. lockfile changes or development environment changes) are omitted. Exceptions may be made for changes that might be of interest despite not having an effect upon the published package (e.g. major test improvements, security improvements, improved documentation, etc.).
   - Try to explain each change in terms that users of the package would understand (e.g. avoid referencing internal variables/concepts).
   - Consolidate related changes into one change entry if it makes it easier to explain.

5. Dev review and QA the release.

   - If changes are made to the base branch, the release branch will need to be updated with these changes and review/QA will need to restart again. As such, it's probably best to avoid merging other PRs into the base branch while review is underway.

### Deployments

#### Repository Release Process Documentation

This section provides a detailed explanation of the release process for this repository, which is managed through a GitHub Action workflow.

##### Workflow Overview

The GitHub Action workflow is named `master` and it is triggered on every pull request and push to the `master` branch. The workflow consists of four jobs:

1. `check-workflows`
2. `build-test`
3. `release-uat`
4. `release-prd`

###### 1. Check Workflows

This job performs the following steps:

- Checks out the repository using the `actions/checkout` action.
- Downloads `actionlint`, a tool for linting GitHub Actions workflow files.
- Checks the workflow files using `actionlint`.

###### 2. Build and Test

This job uses the workflow defined in `./.github/workflows/build-test.yml`. It is responsible for building the project and running tests to ensure the code is working as expected.

###### 3. UAT Release

This job uses the workflow defined in `./.github/workflows/release.yml`. It is dependent on the `build-test` job and only runs if the `build-test` job is successful and the current branch is `master`. This job is responsible for releasing the project to the User Acceptance Testing (UAT) environment.

###### 4. PRD Release

This job is similar to the `release-uat` job but it releases the project to the Production (PRD) environment. It also depends on the `build-test` job and only runs if the `build-test` job is successful and the current branch is `master`.

##### Release Process

The release process is initiated when a pull request is merged into the `master` branch or when a direct push is made to the `master` branch. Here are the steps that are followed:

1. The `check-workflows` job is run to ensure the workflow files are valid.
2. If the workflow files are valid, the `build-test` job is run to build the project and run tests.
3. If the `build-test` job is successful, the `release-uat` job is run to release the project to the UAT environment.
4. If the `release-uat` job is successful, the `release-prd` job is run to release the project to the PRD environment, ideally `prd` GitHub environment has configured environment deployment policy (approvals).

