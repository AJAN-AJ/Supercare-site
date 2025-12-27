import bg1 from '/bgpng1.jpg'
import logicon from '/Scslogo.png'

function Hero(){

    return(
        <>
           <div className="bg-cover  bg-center h-650px w-[100%]" 
                style={{backgroundImage: `url(${bg1})`}}>
             <div className="bg-gradient-to-b 
                             from-black/200 via-black/50 to-black/90  lg:p-50 p-[5%] lg:pt-10">
               <div className='flex'>
                    <img src={logicon} alt="logo" className="w-50 lg:w-[250px]" />

               </div>
               
               <p className='text-white text-3xl md:text-6xl  lg:w-[60%] mt-20 lg:mb-0 mb-15 font-bold'>We are <span className='text-blue-400'>authorized</span> agents offering mobile money and banking services</p>
             </div>
            </div>  
        </>
    )
}

export default Hero