import React from 'react';
import Header from '../header/Header';
import NavMenu from '../navMenu/NavMenu';
import './style.css';
const Layout = props => (
  <article className="layout">
    <Header />
    <section>
      <NavMenu />
      {props.children}
    </section>
  </article>
);
export default Layout;
