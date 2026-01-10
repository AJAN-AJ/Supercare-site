import WhoAreWe from '../components/WhoAreWe.jsx'
import WhenWestarted from '../components/WhenWestarted.jsx'
import Footer from '../components/Footer.jsx';
import bg1 from '/bgpng.webp'
function About() {
  return (
    <> <div className="bg-cover bg-center w-[100%]" 
                      style={{backgroundImage: `url(${bg1})`}}>
                   <div className="bg-gradient-to-l 
                                   from-black/200 via-black/80 to-black/90  lg:p-30 p-[10%] pt-30 lg:pt-[10%] pb-[10%]">
                     <p className='text-white text-5xl md:text-6xl lg:w-[60%] lg:mb-0 mb-15 font-bold'>About Us</p>
                   </div>
       </div> 
       <WhoAreWe />
       <WhenWestarted />
       <Footer />
       </>
  );
}

export default About;
