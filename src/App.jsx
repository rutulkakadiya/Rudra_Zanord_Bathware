import React, { useEffect } from 'react'
import Home from './Components/Home/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  )
}
