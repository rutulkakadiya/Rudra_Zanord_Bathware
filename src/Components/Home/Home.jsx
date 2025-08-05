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
  return (
    <div>
      <Whatsapp />
      <Header />
      <Slider />
      <About />

      <ProductIntro />
      <TextScroll
        className="heading-text text-center mt-[50px] bg-white text-4xl font-semibold tracking-tighter text-black md:text-7xl md:leading-[5rem]"
        text="Ovel Collection &nbsp;&nbsp; • &nbsp;&nbsp; Square Collection &nbsp;&nbsp; • &nbsp;&nbsp; Aristo Collection &nbsp;&nbsp; • &nbsp;&nbsp; Shelf & Corner Collection"
        default_velocity={1}
      />
      <Products />
      {/* <ProductShowCase /> */}
      <Category />
      <Footer />
    </div>
  )
}
