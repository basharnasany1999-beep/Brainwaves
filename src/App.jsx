import React from 'react'
import Header from './component/Header'
import ButtonGradient from './assets/svg/ButtonGradient'
import Hero from './component/Hero'
import Fetures from './component/Benefits'
import Collaboration from './component/Collaboration'
import Services from './component/services'
import Pricing from './component/Pricing'
import RoudMap from './component/RoudMap'
import Footer from './component/Footer'
const App = () => {
  return (
    <>
    <div className=' my-2  overflow-hidden relative ' >
      <Header />
      <Hero />
      <Fetures />
      <Collaboration />
      <Services />
      <Pricing />
      <RoudMap />
      <Footer/>
    </div>
   <ButtonGradient />
    </>
  )
}

export default App
