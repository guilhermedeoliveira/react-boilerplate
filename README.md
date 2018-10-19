# React Boilerplate

A scalable structure to use in React projects

## Organization

* **components** - UI components
* **config** - configuration, should use `.env` files to isolate environments
* **modules** - app modules
* **router** - routing, uses [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
* **screens** - root level components, represents screens rendered in different routes. Screens should be functional components
* **store** - state management configured with [redux](https://github.com/reduxjs/redux) following [duck pattern](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be)
* **styles** - styling, uses [styled-components](https://github.com/styled-components/styled-components)
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
│   ├── modules
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
