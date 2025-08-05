import React from 'react'
import Slider from './Slider'
import About from './About'
import Products from './Products'
import ProductIntro from './ProductIntro'
import Category from './Category'
import Header from "../Common Components/Header"
import Footer from "../Common Components/Footer"
import Whatsapp from "../Common Components/Whatsapp"

export default function Home() {
  return (
    <div>
      <Whatsapp />
      <Header />
      <Slider />
      <About />
      <ProductIntro />
      <Products />
      {/* <ProductShowCase /> */}
      <Category />
      <Footer />
    </div>
  )
}
