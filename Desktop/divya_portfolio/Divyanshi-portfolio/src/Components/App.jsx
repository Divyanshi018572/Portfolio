import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import Data_Science from './Data_Science_Data/Data_Science'
import Helping_Tools from './Helping_Tools_Data/Helping_Tools'
import MyWork from './MyWork/MyWork'
import Python_Data from './Python_Data/Python_Data'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyWork/>
      <Python_Data/>
      <Data_Science/>
      <Helping_Tools/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
