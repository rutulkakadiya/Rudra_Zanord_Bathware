import React from 'react'
import Slider from './Slider'
import About from './About'
import Products from './Products'
import ProductIntro from './ProductIntro'
import Category from './Category'
import Header from "../Common Components/Header"
import Footer from "../Common Components/Footer"
import Whatsapp from "../Common Components/Whatsapp"
import TextScroll from '../Common Components/TextScroll'

export default function Home() {
  const collections = [
    "Ovel Collection",
    "Square Collection",
    "Aristo Collection",
    "Shelf & Corner Collection"
  ];
  return (
    <div>
      <Whatsapp />
      <Header />
      <Slider />
      <About />

      <ProductIntro />
      <TextScroll
        text={collections}
        default_velocity={1.5}
        className="text-4xl sm:text-5xl md:text-6xl font-bold"
      />
      <Products />
      {/* <ProductShowCase /> */}
      <Category />
      <Footer />
    </div>
  )
}
