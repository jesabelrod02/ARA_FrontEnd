import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/SolutionsPage">Busco Soluciones</NavLink>
          </li>
          {/* ... Otros elementos ... */}
        </ul>
      </nav>
      <div className="cta-button">
        <NavLink to="/solutions">Busco Soluciones</NavLink>
      </div>
    </div>
  );
};

export default HomePage;