import React, { useState, useContext, useEffect } from 'react';
import { LanguageContext } from "../Context/LanguageContex";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";


const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
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
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-26162.appspot.com/o/images%2Flogo-AY.svg?alt=media&token=0040bac0-9bdf-4661-a8f1-bd8118598af4"
            alt={language === 'es' ? "Logo Aybi Yañez graphic desing | web developer" : "Aybi Yañez graphic desing + full stack developer logo"}
            />
            </Link>
            <button onClick={toggleLanguage} className='language-btn'>
              {language === "es" ? "Español" : "English"}
            </button>
            {isMobile ? (
            <Link to="#" onClick={menuOpen ? closeMenu : toggleMenu} className='navBar-menu'>
                {menuOpen ? <FaTimesCircle className='menu-bars-btn' /> : <FaBars className='menu-bars-btn' />}
            </Link>
            ) : (
                <ul id="links">
                  <li>
                  <Link to="/curriculum-vitae">Curriculum Vitae</Link>
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
                  <Link to="/curriculum-vitae" onClick={closeMenu}>
                      Curriculum Vitae
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
