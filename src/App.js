import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import Router from './router'
import store from './store'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
