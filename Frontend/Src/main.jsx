import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'; // Ajusta la ruta según la ubicación de tu archivo Navbar.jsx
import Footer from './components/Footer'; // Ajusta la ruta según la ubicación de tu archivo Footer.jsx
import FeaturedProducts from './components/FeaturedProducts'; // Ajusta la ruta según la ubicación de tu archivo FeaturedProducts.jsx
import './index.css'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div>
      <Navbar />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
