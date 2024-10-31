import React from 'react';
import '../styles/main.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="project">
        <h3>Codeki-Flight-Api</h3>
        <p>En mi proyecto para CODEKI, he diseñado un sistema de microservicios para una empresa de vuelos que mejora significativamente la eficiencia operativa y la experiencia del cliente. Utilizando tecnologías como Java y Docker, he desarrollado servicios independientes que gestionan reservas, inventarios de vuelos y notificaciones en tiempo real. Cada microservicio es escalable y se comunica de manera segura a través de API RESTful. Este enfoque modular permite una implementación más ágil de actualizaciones y una fácil integración con otros sistemas de terceros. Mi objetivo con este proyecto es proporcionar una arquitectura robusta y flexible que soporte el crecimiento sostenido de la empresa y optimice sus procesos operativos, garantizando así un servicio al cliente excepcional</p>
        <a href="https://github.com/MarcelaInsegna/Codeki-Flight-Api/tree/master/src">Ver Proyecto</a>
      </div>
      <div className="project">
        <h3>demoConfigServer</h3>
        <p>En mi reciente proyecto, he implementado una solución innovadora utilizando GitLab Duo, Eureka y Docker. Este proyecto se centra en optimizar el despliegue y la gestión de microservicios para una empresa. Con GitLab Duo, hemos automatizado el pipeline de integración y entrega continua, asegurando que cada cambio en el código se pruebe y despliegue eficientemente. Eureka actúa como servidor de descubrimiento, facilitando la comunicación y escalabilidad dinámica entre los microservicios. Docker se encarga de la contenedorización, proporcionando un entorno consistente y aislado para cada servicio, lo que simplifica el desarrollo y la implementación. Este enfoque moderno permite una mayor flexibilidad, escalabilidad y resiliencia del sistema, garantizando una entrega de servicio más rápida y confiable.</p>
        <a href="https://github.com/MarcelaInsegna/demoConfigServer/tree/master/eureka-server">Ver Proyecto</a>
      </div>
      <div className="project">
        <h3>TP-INTEGRADOR Argentina Programa 4.0</h3>
        <p>En uno de mis proyectos para Argentina Programa 4.0, desarrollé una página web utilizando JavaScript que proporciona información nutricional detallada. Este proyecto se alimenta de datos de una API externa, asegurando que la información presentada esté siempre actualizada y precisa. La interfaz es intuitiva y accesible, permitiendo a los usuarios buscar alimentos y obtener datos nutricionales completos, como calorías, macronutrientes y vitaminas. Este proyecto no solo destaca por su funcionalidad, sino también por su diseño atractivo y su capacidad para mejorar la educación nutricional de los usuarios.</p>
        <a href="https://github.com/MarcelaInsegna/TP-INTEGRADOR/tree/main">Ver Proyecto</a>
      </div>
    </section>
  );
}

export default Projects;
