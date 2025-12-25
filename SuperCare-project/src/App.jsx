import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero.jsx'
import WhoAreWe from './components/WhoAreWe.jsx'
import WhenWestarted from './components/WhenWestarted.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import TransactWithUs from './components/TransactWithUs.jsx'
import OurStaff from './components/OurStaff.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Hero />
        <WhoAreWe />
        <WhenWestarted />
        <WhyChooseUs/>
        <TransactWithUs/>
        <OurStaff/>
        <Footer />
    </>
  )
}

export default App
