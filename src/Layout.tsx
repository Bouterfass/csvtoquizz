import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet /> {/* Cet élément rend le composant enfant de la route actuelle */}
      </div>
    </div>
  );
};

export default Layout;
