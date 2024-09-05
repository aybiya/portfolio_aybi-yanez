import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <>
        <footer>
            <section className="socialMedia element">
                <article>
                {/* Redes sociales */}
                    <a href="https://api.whatsapp.com/send/?phone=5493875822304" target="_blank">
                        <IoLogoWhatsapp />
                    </a>
                    <a href="mailto:yanez.aybi@gmail.com" target="_blank">
                        <IoIosMail />
                    </a>
                    <a href="https://www.linkedin.com/in/aybi-yanez/" target="_blank">
                        <FaLinkedinIn />
                    </a>
                </article>
            </section>
            <Link to="/">
                <img className="logo" src="https://aybiya.github.io/portfolio-aybi-yanez/images/logo-AY.svg" alt="Logo Aybi Yañez graphic desing + full stack developer" />
            </Link>
            <ul className="linksFooter element">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/branding">Branding</Link>
                </li>
                <li>
                    <Link to="/social-media">Social Media</Link>
                </li>
            </ul>
        </footer>
    </>
  )
}

export default Footer