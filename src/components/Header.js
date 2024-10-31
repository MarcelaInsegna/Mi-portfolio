import React from 'react';
import '../styles/main.css';
import imagen from '../img/perfil.jpg';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src={imagen} alt="Tu Nombre" className="header-img" />
        <div className="mi-nombre">
          <h1>Marcela Alejandra Insegna</h1>
        </div>
        
      </div>      
      <nav>
        <ul>
          <li><a href="#about">Sobre Mí</a></li>          
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#education">Estudios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
