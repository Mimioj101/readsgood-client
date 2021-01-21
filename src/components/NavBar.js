import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#A7C957',
  textDecoration: 'none',
  color: 'white',
}


class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{background: '#6A994E'}}>
        Search</NavLink>
        <NavLink
          to="/read"
          exact
          style={link}
          activeStyle={{background: '#6A994E'}}>
        My Books</NavLink>
        <NavLink
          to="/wannaread"
          exact
          style={link}
          activeStyle={{background: '#6A994E'}}>
        Books I Want to read</NavLink>
      </div>
    );
  }
};

export default NavBar;
