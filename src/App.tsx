import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import News from './containers/News';
//import { About } from './pages/About';
import Login from './containers/Login';
import { Authenticated } from './components/common/Authenticated';
//import { checkAuthStatus, logout } from './api/Auth';
import { Router, RouteComponentProps } from '@reach/router';
import NavBar from './containers/NavBar';
//import { Profile } from './pages/Profile';


const App: React.FC<RouteComponentProps> = props => {
  return (
    <div>
      <h1>TZ #1 with hooks & TypeScript</h1>
      <NavBar />
      {props.children}
    </div>
  )
}

const RoutedApp = () => {
  return (
    <Router>
      <App path="/">
        <Login path="/login" />
        <News path="/news" />
        <Authenticated path="/profile" />
      </App>
    </Router>
    )

}

export { RoutedApp }