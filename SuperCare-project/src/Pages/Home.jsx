import { useState } from 'react'
import '../App.css'
import Hero from '../components/Hero.jsx'
import WhoAreWe from '../components/WhoAreWe.jsx'
import WhenWestarted from '../components/WhenWestarted.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import TransactWithUs from '../components/TransactWithUs.jsx'
import OurStaff from '../components/OurStaff.jsx'
import Footer from '../components/Footer.jsx'
import BrandsSlider  from '../components/BrandsSlider.jsx'
import Testimonials from '../components/Testimonials.jsx'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Hero />
        <WhoAreWe />
        <WhenWestarted />
        <WhyChooseUs/>
        <TransactWithUs/>
        <OurStaff/>
        <BrandsSlider/>
        <Testimonials/>
        <Footer />
    </>
  )
}

export default Home
