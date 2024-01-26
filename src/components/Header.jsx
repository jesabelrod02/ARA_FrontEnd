import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Community Lab Alliance</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/busco-soluciones" className="hover:underline">
                Busco Soluciones
              </Link>
            </li>
            <li>
              <Link to="/brindo-soluciones" className="hover:underline">
                Brindo Soluciones
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:underline">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;