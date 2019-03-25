import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { News } from './pages/News';
//import { About } from './pages/About';
import { Login } from './pages/Login';
import { Authenticated } from './components/common/Authenticated';
import { checkAuthStatus, logout } from './api/Auth';
import { Link, Router, RouteComponentProps } from '@reach/router';
//import { Profile } from './pages/Profile';


const App: React.FC<RouteComponentProps> = props => {
  return (
    <div className="container">
      <h1>TZ #1 with hooks & TypeScript</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">Home</Link>{' '}
        <Link to="profile">Профиль</Link>{' '}
        <Link to="news">News</Link>{' '}
        <Link to="/about/habr">Про habr</Link>{' '}
        {checkAuthStatus() ? <button onClick={logout}>Выйти</button> : null}
      </nav>
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
        <Authenticated path="/profile">
        </Authenticated>
      </App>
    </Router>
    )

}

export { RoutedApp }