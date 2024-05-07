import React from 'react'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import Latestnews from './pages/Latestnews'
import Welcome from './pages/Welcome'
import Servicessection from './pages/Servicessection'
import Statssection from './pages/Statssection'
import Testimonials from './pages/Testimonials'
import Clientlogos from './pages/Clientlogos'


const Main = () => {
  return (
    <div>
       <Header />
      <Homepage />
      <hr />
      <Welcome />
      <hr />
      <Servicessection />
      <hr />
      <Statssection />
      <hr />
      <Testimonials />
      <hr />
      <Clientlogos />
      <Latestnews />
      <hr />
      
      <Footer />
   </div>
  )
}

export default Main
