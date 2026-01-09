import { useState } from 'react'
import '../App.css'
import Hero from '../components/Hero.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import TransactWithUs from '../components/TransactWithUs.jsx'
import OurStaff from '../components/OurStaff.jsx'
import Footer from '../components/Footer.jsx'
import BrandsSlider  from '../components/BrandsSlider.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQs from '../components/FAQs.jsx'
import Services from "../components/Services.jsx";

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Hero />
        <Services />
        <WhyChooseUs/>
        <TransactWithUs/>
        <OurStaff/>
        <BrandsSlider/>
        <Testimonials/>
        <FAQs/>
        <Footer />

    </>
  )
}

export default Home
