# React Boilerplate

A scalable structure to reuse in React projects

## Organization

* **components** - shared common components
* **config** - configuration. it should use `.env` files to isolate environments
* **router** - routing. This boilerplate uses [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
* **screens** - Root level components, represents screens rendered in different routes
* **store** - state management configured with [redux](https://github.com/reduxjs/redux) following [duck pattern](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be)
* **styles** - styling. Configured with [styled-compoents](https://github.com/styled-components/styled-components)
* **utils** - utilities files, including helpers function. Components should be as clean as possible

## Project Structure

```bash
├── public
├── src
│   ├── components
|   │   ├── shared.js
│   ├── config
|   |   ├── api.js
|   |   ├── constants.js
│   ├── router
|   |   ├── index.js
│   ├── screens
|   |   ├── auth
|   |   |   ├── LoginScreen.js
|   |   |   ├── SignupScreen.js
│   ├── store
|   |   ├── auth.js
|   |   ├── index.js
|   |   ├── user.js
│   ├── styles
|   |   ├── animations.js
|   |   ├── global.js
|   |   ├── index.js
│   ├── utils
|   |   ├── helpers
|   |   |   ├── login.js
|   ├── App.js
|   ├── App.test.js
|   ├── index.js
|   ├── registerServiceWorker.js
├── .env.development
├── .env.production
├── .eslintignore
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── package.json
└── yarn.lock
```
