import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
const NavMenu = () => (
  <div className="menu">
    <nav>
      <NavLink to="/books" activeClassName="activeclass">
        Books
      </NavLink>
      <NavLink to="/articles" activeClassName="activeclass">
        Articles
      </NavLink>
    </nav>
  </div>
);
export default NavMenu;
