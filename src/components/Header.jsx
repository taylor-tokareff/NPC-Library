import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>NPC Library</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Character List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Character
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
