import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <main className="home-container">
        <picture className="home-img">
          <img
            src="https://aybiya.github.io/portfolio-aybi-yanez/images/portada-portfolio.png"
            alt="portada de mi portfolio como diseñadora gráfica y full stack developer"
          />
        </picture>
        {/* Botón para ver el currículum */}
        <Link to="/curriculum-vitae">
          <button className='home-btn'>Ver curriculum</button>
        </Link>
    </main>
  );
};

export default Home;
