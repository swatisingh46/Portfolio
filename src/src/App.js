import React, { useEffect } from 'react'
import Expertise from './components/Expertise';
import Hero from "./components/Hero";
import LatestProjects from './components/LatestProjects';
import Qualification from './components/Qualification';
import Specializing from './components/Specializing';
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"

const App=(props)=> {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
  })
  return (
    <div>
      <Hero />
      <Specializing />
      <Expertise />
      <LatestProjects />
      <Qualification />
      <Footer />
    </div>
  )
}
export default App;


