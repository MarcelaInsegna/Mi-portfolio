import React from 'react';
import '../styles/main.css';

const About = () => {
  return (
    <section id="about">
      <h2>Sobre Mí</h2>
      <p>Soy una desarrolladora apasionada con un sólido conocimiento en lenguajes y herramientas clave como Java, Python, GitHub, React, Node.js, C# y JavaScript. Mi objetivo es crear soluciones tecnológicas innovadoras que no solo resuelvan problemas complejos sino que también mejoren la vida de los usuarios. Me esfuerzo por mantenerme al día con las últimas tendencias y avances en el desarrollo de software, siempre buscando perfeccionar mis habilidades y colaborar en proyectos desafiantes que impulsen el progreso tecnológico. Mi meta es contribuir de manera significativa a proyectos que prioricen la excelencia y la innovación.</p>
      <table>
        <thead>
          <tr>
            <th>Tecnología</th>
            <th>Nivel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Java</td>
            <td>Avanzado</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>Avanzado</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>Avanzado</td>
          </tr>
          <tr>
            <td>React</td>
            <td>Intermedio</td>
          </tr>
          <tr>
            <td>Node.js y Express</td>
            <td>Intermedio</td>
          </tr>
          <tr>
            <td>C#</td>
            <td>Basico</td>
          </tr>

        </tbody>
      </table>
    </section>
  );
}

export default About;
