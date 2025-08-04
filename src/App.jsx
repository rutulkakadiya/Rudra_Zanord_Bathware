import React, { useEffect } from 'react'
import Home from './Components/Home/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './Components/Contact Us/ContactUs';

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}