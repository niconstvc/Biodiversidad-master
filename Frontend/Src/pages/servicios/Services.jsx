import React, { useState } from 'react';
import './index.css'; // Asegúrate de que los estilos están en este archivo

const Products = () => {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (name, price) => {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { name, price, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateCart = () => {
    return cart.map((item, index) => (
      <div className="cart-item" key={index}>
        <p>{item.name} x {item.quantity}</p>
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    ));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="/">Biodiversidad.cl</a>
        </div>
        <ul className="nav-links">
          <li><a href="./Projects.html">Productos</a></li>
          <li><a href="./Experts.html">Acerca de</a></li>
          <li><a href="./blog.html">Blog</a></li>
          <li><a href="./Contact.html">Contacto</a></li>
          <li><a href="./Register.js">Registrarse</a></li>
          <li><a href="./Login.js" className="register-link">Iniciar Sesión</a></li>
          <li className="cart" onClick={() => setCartVisible(!cartVisible)}>
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cart.length}</span>
            <div className={`cart-popup ${cartVisible ? 'show' : ''}`}>
              <h3>Carrito</h3>
              <div id="cart-items">{updateCart()}</div>
              <p className="cart-total">Total: ${total.toFixed(2)}</p>
              <div className="cart-buttons">
                <button className="btn" onClick={() => alert('Proceso de pago')}>Pagar</button>
                <button className="btn" onClick={clearCart}>Borrar</button>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <header className="header">
        <div className="container">
          <h1 className="main-title">Nuestros Servicios</h1>
        </div>
      </header>

      <section id="projects" className="section">
        <div className="container">
          <h5 className="section-title">Productos</h5>
          <p className="section-description">
            Encuentra el producto que necesitas...
          </p>
          <div className="projects-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <div className="project-card" key={num}>
                <img src={`https://via.placeholder.com/150`} alt={`Producto ${num}`} className="project-image" />
                <h3>Producto {num}</h3>
                <p>${num * 10}.00</p>
                <button className="add-to-cart-btn" onClick={() => addToCart(`Producto ${num}`, num * 10)}>Añadir al Carrito</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <p>Dirección: Avenida Egaña 1638, B. Peñalolén, Santiago, Chile</p>
          <div className="contact-social-container">
            <p className="contact-info">Contacto: <a href="mailto:info@biodiversidad.cl">info@biodiversidad.cl</a></p>
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
          <p>&copy; 2024 Biodiversidad.cl. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Products;
