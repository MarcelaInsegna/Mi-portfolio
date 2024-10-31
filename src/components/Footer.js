import React from 'react';
import '../styles/main.css';

const Footer = () => {
  return (
    <footer>
      <p>© 2024 Marcela Alejandra Insegna. Todos los derechos reservados.</p>
      <div className="social-icons">
        <a href="https://twitter.com/tu_usuario"><i className="fa fa-twitter"></i></a>
        <a href="https://linkedin.com/in/tu_usuario"><i className="fa fa-linkedin"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
