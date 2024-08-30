import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, onCartToggle }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Biodiversidad.cl</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/Services">Servicios</Link></li>
        <li><Link to="/Experts">Acerca de</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/Contact">Contacto</Link></li>
        <li><Link to="/Register">Registrarse</Link></li>
        <li><Link to="/Login" className="register-link">Iniciar Sesión</Link></li>
        <li className="cart" onClick={onCartToggle}>
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
