import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/search"
        className="navlink"
        activeStyle={{ borderBottom: '3px solid #758582' }}
      >
        Search
      </NavLink>
      <NavLink
        to="/upcoming"
        className="navlink"
        activeStyle={{ borderBottom: '3px solid #758582' }}
      >
        Upcoming
      </NavLink>
      <NavLink
        to="/popular"
        className="navlink"
        activeStyle={{ borderBottom: '3px solid #758582' }}
      >
        Popular
      </NavLink>
    </nav>
  );
};

export default NavBar;
