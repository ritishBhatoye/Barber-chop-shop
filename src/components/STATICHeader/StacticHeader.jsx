import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-dark.svg';
const StaticHeader = () => {
  return (
    <div>
      <div className="Static-Header">
        <div className="Static-Nav">
          <ul className="list-1">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <img src={logo} width={'65%'} />
            </li>
            <li>
              <Link to="/">SEARCH</Link>
            </li>
            <li>
              <Link to="/Menu">MENU </Link>
            </li>
            <li>
              <span className="bg-brown-out">
                <Link to="/reservation">RESERVATION</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default StaticHeader;
