import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FurnitureBanner from './Components/FurnitureBanner'
import Navbar from './Components/Navbar'
import AboutUs from './Components/AboutUs'
import MissionVision from './Components/MissionVision'
import OurExpertise from './Components/OurExpertise'
import StatsSection from './Components/StatsSection'
import WhyChooseUs from './Components/WhyChooseUs'
import IndustriesWeServe from './Components/IndustriesWeServe'
import OurProcess from './Components/OurProcess'
import CoreValues from './Components/CoreValues'
import ProjectsSection from './Components/ProjectsSection'
import ContactSection from './Components/ContactSection'
import TestimonialSection from './Components/TestimonialSection'
import ClientsMarquee from './Components/ClientsMarquee'
import Footer from './Components/Footer'
import GallerySection from './Components/GallerySection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FurnitureBanner/>
    <Navbar/>
    <AboutUs/>
    <MissionVision/>
    <OurExpertise/>
   <WhyChooseUs/>
    <IndustriesWeServe/>
    <CoreValues/>
    <OurProcess/>
    <ProjectsSection/>
    <GallerySection/>
      <StatsSection/>
    <ContactSection/>
    <ClientsMarquee/>
    <TestimonialSection/>
    <Footer/>
     
    </>
  )
}

export default App
