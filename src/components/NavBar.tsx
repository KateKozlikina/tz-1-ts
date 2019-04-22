import React from 'react';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from '@reach/router';
import { DiReact } from "react-icons/di";
import { NavBarProps } from '../containers/NavBar';

const NavBar:React.FC<NavBarProps> = (props) => {

  return (
    <Navbar color="light" light expand="md">
      <Link className="navbar-brand" to="/"><DiReact size={64}/></Link>
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="news">Новости</Link>{' '}
          </NavItem>
          <NavItem>
          <Link className="nav-link" to="profile">Профиль</Link>{' '}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
        //{checkAuthStatus() ? <button onClick={logout}>Выйти</button> : null}