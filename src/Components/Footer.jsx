import React, { useContext } from 'react';
import { LanguageContext } from "../Context/LanguageContex";
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {

    const { language } = useContext(LanguageContext);

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
                <img className="logo"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-26162.appspot.com/o/logo-AY.svg?alt=media&token=d42874b4-8b64-4a4c-8fec-0e7ea593aac6"
                    alt={language === 'es' ? "Logo Aybi Yañez graphic desing + full stack developer" : "Aybi Yañez graphic desing + full stack developer logo"}
                />
            </Link>
            <ul className="linksFooter element">
                <li>
                    <Link to="/curriculum-vitae">CV</Link>
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