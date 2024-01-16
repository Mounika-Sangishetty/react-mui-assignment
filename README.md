
## Project Details:

A simple website for courses and blogs developer using React js as frontend and Material UI as framework.

## Deployment Link:
[Link](https://mounika-sangishetty.github.io/react-mui-assignment/)

![localhost_3000_react-mui-assignment](https://github.com/Mounika-Sangishetty/react-mui-assignment/assets/127507517/cf297680-1aa0-4fa7-aeaa-781b5bb01812)

## Prerequisites:
1. React Js
2. Material UI
3. Fundamentals of Html, Css and JS

## Project Setup:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Build and Deploy react app using `gh-pages`

1. Install the [`gh-pages`](https://github.com/tschaub/gh-pages) npm package and designate it as a [development dependency](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file):
 
    ```shell
    $ npm install gh-pages --save-dev
    ```
  
2. Add a `homepage` property in this format\*: `https://{username}.github.io/{repo-name}`
3. Open the `package.json` 
   
    ```shell
    $ vi package.json
    ```

4. Add a `predeploy` property and a `deploy` property to the `scripts` object:

    ```diff
    "scripts": {
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",

    ``
5.  Push the React app to the GitHub repository

    ```shell
    $ npm run deploy
    ```

The above process will configure all the settings in the github pages. To know more details visit [Github pages Deploy}(https://github.com/gitname/react-gh-pages/blob/master/README.md)




