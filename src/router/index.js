import React from 'react'
import { func, shape, string } from 'prop-types'
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom'

import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'

import '../styles/global'
import { getUserToken } from '../utils/helpers/login'

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (getUserToken() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location }
        }}
      />
    ))
    }
  />
)

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (getUserToken() ? (
      <Redirect
        to={{
          pathname: '/',
          state: { from: props.location }
        }}
      />
    ) : (
      <Component {...props} />
    ))
    }
  />
)

const Router = () => (
  <BrowserRouter>
    <Switch>
      <LoginRoute path="/login" component={LoginScreen} />

      <AuthenticatedRoute path="/" component={() => <h1>Protected Route</h1>} />

      <Route path="/signup" component={SignupScreen} />
      <Route path="*" component={() => <h1>Essa rota não existe!</h1>} />
    </Switch>
  </BrowserRouter>
)

AuthenticatedRoute.propTypes = {
  component: func.isRequired,
  location: shape({
    pathname: string
  })
}

LoginRoute.propTypes = {
  component: func.isRequired,
  location: shape({
    pathname: string
  })
}

export default Router
