import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../../index.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (name, price) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(item => item.name === name);
      if (itemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { name, price, quantity: 1 }];
      }
    });
  };

  const updateCart = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    alert('Proceso de pago');
  };

  return (
    <div>
      <Navbar cartCount={cart.length} onCartToggle={() => setCartVisible(!cartVisible)} />
      
      <header className="header">
        <div className="container">
          <h1 className="main-title">Nuestros Productos</h1>
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
              <div key={num} className="project-card">
                <img
                  src={`https://via.placeholder.com/150`}
                  alt={`Producto ${num}`}
                  className="project-image"
                />
                <h3>Producto {num}</h3>
                <p>${num * 10}.00</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(`Producto ${num}`, num * 10)}
                >
                  Añadir al Carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {cartVisible && (
        <div className="cart-popup">
          <h3>Carrito</h3>
          <div id="cart-items">
            {cart.map(item => (
              <div key={item.name} className="cart-item">
                <p>{item.name} x {item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <p className="cart-total">Total: ${updateCart().toFixed(2)}</p>
          <div className="cart-buttons">
            <button className="btn" onClick={handleCheckout}>Pagar</button>
            <button className="btn" onClick={handleClearCart}>Borrar</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
