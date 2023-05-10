import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/lemonslogo.png'
import "./NavBar.css";
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="nav-container">

        {/* Botón de menú  */}
     {/*  <div className="menu-botton">
      <FontAwesomeIcon icon={faBars} size="lg" color="black"/>
      <span>Menu</span>
      </div> */}
        
      <header>
      <img src={Logo} className="nav-brand" />
      </header>
     

   

     {/* links de navegación */}
      <ul className="nav__link nav__link--menu">
        <li className="nav__items">
          <Link to={'/'}> Inicio</Link>
          
        </li>
        <li className="nav__items">
          <Link to={'/items'}> Catalogo</Link>
          
        </li>
        <li className="nav__items">
           <Link to={'/category/otoño'}>Otoño</Link>
            
          
        </li>
        <li className="nav__items">
          <Link to={'/category/verano'}>Verano</Link>
            
          
        </li>
        <li className="nav__items">
        <Link to={'/category/invierno'}> Invierno</Link>
          
            
          
        </li>
      </ul>
     

      <div className="dropdown dropdown-end">
        <label tabindex="0" className="btn btn-ghost btn-circle" >
        <div className="indicator">
         
          <span className="badge badge-sm indicator-item">5</span>

        </div>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
