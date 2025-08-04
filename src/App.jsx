import React, { useEffect } from 'react'
import Home from './Components/Home/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './Components/Contact Us/ContactUs';
import EBrochure from './Components/E-Brochure/E-Brochure';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contactUs' element={<ContactUs />}></Route>
          <Route path='/e-brochure' element={<EBrochure />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}