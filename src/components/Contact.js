import React from 'react';
import '../styles/main.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form>
        <div className="form-group">
          <label>
            Nombre:
            <input type="text" name="name" />
          </label>
          <label>
            Correo:
            <input type="email" name="email" />
          </label>
        </div>
        <label>
          Mensaje:
          <textarea name="message"></textarea>
        </label>
        <div className="form-button">
          <button type="submit">Enviar <i className="fa fa-paper-plane"></i></button>
        </div>
      </form>
    </section>
  );
}

export default Contact;

