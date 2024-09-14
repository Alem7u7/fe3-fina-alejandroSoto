import React from 'react';
import { Link } from "react-router-dom";
import { useGlobalContext } from './utils/context'; 

const Navbar = () => {
  const { state, toggleTheme } = useGlobalContext(); 

  return (
    <nav>
      <ul className="navbar-list">
        <li><Link to='/'><h4>Home</h4></Link></li>
        <li><Link to='/contact'><h4>Contact</h4></Link></li>
        <li><Link to='/favs'><h4>Favs</h4></Link></li>
      </ul>
      <button className="themeButton" onClick={toggleTheme}>
        Theme 
      </button>
    </nav>
  );
}

export default Navbar;
