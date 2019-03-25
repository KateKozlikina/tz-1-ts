import React, { Fragment } from 'react';
import { Redirect, RouteComponentProps  } from '@reach/router';
import { checkAuthStatus } from '../../api/Auth';

const Authenticated: React.FC<RouteComponentProps> = ({ children }) => {

  return checkAuthStatus() ? 
    (<Fragment>{children}</Fragment>)
    : (
      <Redirect to="./login" noThrow={true} />
    )
}

export { Authenticated }
