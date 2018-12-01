import React from "react";
import { Route, Redirect } from 'react-router-dom'

import Auth from '../utilities/auth'

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          Auth.getlocal('isAuthenticated') ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
  
