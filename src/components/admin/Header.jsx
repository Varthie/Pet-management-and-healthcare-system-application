// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="navbar navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">My Dashboard</a>
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <a className="nav-link" href="/AdminLogin">Logout</a>
          </li>
          
        </ul>
      </div>
    </header>
  );
};

export default Header;
