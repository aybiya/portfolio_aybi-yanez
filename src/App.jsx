import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from "./Context/LanguageContex";
import './App.css'
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header'
import Home from './Pages/Home';
import CV from './Pages/CV';
import Branding from './Pages/Branding';
import SocialMedia from './Pages/SocialMedia';
import Alta from './Pages/Alta';
import Footer from './Components/Footer'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (
    <>
      <LanguageProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Curriculum-vitae" element={<CV />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/alta" element={<Alta />} />
      </Routes>
      <Footer/>
      <ToastContainer />
      </LanguageProvider>
    </>
  )
}

export default App;
