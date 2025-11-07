import React from 'react'
import Hero from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'
import RecentProject from './components/RecentProject'
import Approaches from './components/Approaches'
import Discussion from './components/Discussion'
import ConatctSection from './components/ConatctSection'
import Testimonials from './components/Testimonials'
import ImageTextSection from './components/IndustriesData'


function page() {
  return (
    <div>
      <Hero/>
      <ServicesSection/>
      <StatsSection/>
      <RecentProject/>
      <Approaches/>
      <Discussion/>
      <ImageTextSection/>
      <Testimonials/>
      <ConatctSection/>
    </div>
  )
}

export default page
