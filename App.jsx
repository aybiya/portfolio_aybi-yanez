import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { ToastContainer } from 'react-toastify';
import Header from './src/Components/Header'
import Home from './src/Pages/Home';
import Branding from './src/pages/Branding';
import SocialMedia from './src/pages/SocialMedia';
/* import Alta from './Pages/Alta'; */
import Footer from './src/Components/Footer'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/social-media" element={<SocialMedia />} />
        {/* <Route path="/alta" element={<Alta />} /> */}
     </Routes>
     <Footer/>
     <ToastContainer />
    </>
  )
}

export default App;
