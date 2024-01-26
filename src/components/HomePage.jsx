import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/SolutionsPage">Busco Soluciones</Link>
          </li>
          <li>
            <Link to="/ContributePage">Brindo Soluciones</Link>
          </li>
          <li>
            <Link to="/AboutPage">Nosotros</Link>
          </li>
          <li>
            <Link to="/BlogPage">Blog</Link>
          </li>
        </ul>
      </nav>
      <div className="cta-button">
        <Link to="/solutions">Busco Soluciones</Link>
      </div>
    </div>
  );
};

export default HomePage;