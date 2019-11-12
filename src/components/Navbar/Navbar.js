import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


function Navbar({ isMobile, onBurgerButton }) {
  const getMenuMobile = () => {
    onBurgerButton(!isMobile);
  }
  return (
    <div className="Navbar">
      <FontAwesomeIcon onClick={getMenuMobile} id="open-menu" icon={isMobile ? faTimes : faBars} />
      <div className="Navbar">
        <ul className={isMobile ? "Navbar-group Navbar-group--mobile" : "Navbar-group"}>
          <li className="Navbar-group-item">
          <Link to="/">Accueil</Link>
          </li>
          <li className="Navbar-group-item">
            <Link to="/search-bar">Search</Link>
          </li>
          <li className="Navbar-group-item">
            <Link to="/search-map">Map</Link>
          </li>
          <li className="Navbar-group-item">
            <Link to="/search-geolocation">Geolocation</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
