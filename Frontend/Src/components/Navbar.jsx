import React from 'react';
import '../index.css';

const Navbar = () => {
  return (
    <header>
      <div className="top-bar">
        <div className="top-info">
          <a href="#">Vende en Biodiversidad</a>
          <a href="#">Registrarse</a>
        </div>
        <div className="top-contact">
          <span>📞 +56 9 0303 4567</span>
          <a href="#">Seguimiento de pedido</a>
          <a href="#">Español</a>
          <a href="#">CLP</a>
          <a href="#">Iniciar sesión</a>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <a href="/">Biodiversidad.cl</a>
        </div>
        <div className="search-bar">
          <select>
            <option value="all">Todos</option>
            <option value="products">Productos</option>
            <option value="services">Servicios</option>
          </select>
          <input type="text" placeholder="¿Qué estás buscando?" />
          <button>Buscar</button>
        </div>
        <div className="user-actions">
          <i className="bi bi-arrow-repeat"></i>
          <i className="bi bi-heart"></i>
          <i className="bi bi-cart"></i>
        </div>
      </nav>

      <nav className="menu">
        <a href="../pages/productos/Projects.jsx">Productos</a>
        <a href="../pages/servicios/Services.jsx">Servicios</a>
        <a href="./Frontend/Src/pages/Experts.html">Acerca de</a>
        <a href="./Frontend/Src/pages/blog.html">Blog</a>
        <a href="./Frontend/Src/pages/Contact.html">Contacto</a>
        <a href="./Frontend/Src/pages/Register.js">Registrarse</a>
        <a href="./Frontend/Src/pages/Login.js" className="register-link">Iniciar Sesión</a>
      </nav>
    </header>
  );
};

export default Navbar;
