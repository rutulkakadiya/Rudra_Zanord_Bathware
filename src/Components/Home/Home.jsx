import React from 'react'
import Header from './Header'
import Slider from './Slider'
import About from './About'
import Products from './Products'
import Footer from './Footer'
import ProductIntro from './ProductIntro'
import Category from './Category'
import Whatsapp from '../Whatsapp'
import ProductShowCase from './ProductShowCase'

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
