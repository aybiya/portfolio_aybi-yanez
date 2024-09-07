import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  // cerrar el menu cuando se hace click afuera
  const handleClickOutside = (event) => {
    const navBar = document.querySelector('.navBar');
    if (menuOpen && !navBar.contains(event.target)) {
      closeMenu();
    }
  };

  //cerrar el menu con 'esc'
  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [menuOpen]);

  

  return (
    <header>
        <nav className="navBar">
            <Link to="/">
            <img className='logo' 
            src="https://aybiya.github.io/portfolio-aybi-yanez/images/logo-AY.svg"
            alt="Logo Aybi Yañez graphic desing + full stack developer"
            />
            </Link>
            {isMobile ? (
            <Link to="#" onClick={menuOpen ? closeMenu : toggleMenu} className='navBar-menu'>
                {menuOpen ? <FaTimesCircle className='menu-bars-btn' /> : <FaBars className='menu-bars-btn' />}
            </Link>
            ) : (
                <ul id="links">
                    <li>
                    <Link to="/">Inicio</Link>
                    </li>
                    <li>
                    <Link to="/curriculum-vitae">CV</Link>
                    </li>
                    <li>
                    <Link to="/branding">Branding</Link>
                    </li>
                    <li>
                    <Link to="/social-media">Social Media</Link>
                    </li>
                    {/* <li>
                    <Link to="/alta">Alta</Link>
                    </li> */}
                </ul>
            )}
            {isMobile && (
              <ul style={{ display: menuOpen ? 'flex' : 'none' }}>
                <li>
                  <Link to="/" onClick={closeMenu}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/curriculum-vitae" onClick={closeMenu}>
                      CV
                    </Link>
                    </li>
                <li>
                  <Link to="/branding" onClick={closeMenu}>
                    Branding
                  </Link>
                </li>
                <li>
                  <Link to="/social-media" onClick={closeMenu}>
                    Social Media
                  </Link>
                </li>
              </ul>
            )}
                
        </nav>
    </header>
  );
};

export default Header;
