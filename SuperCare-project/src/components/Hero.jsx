import bg1 from '/bgpng1.png'
import logicon from '/Scslogo.png'

function Hero(){

    return(
        <>
           <div className="bg-cover bg-center" 
                style={{backgroundImage: `url(${bg1})`, height: '650px', width: '100%'}}>
             <div className="bg-gradient-to-b 
                             from-black/200 via-black/50 to-black/90  p-50 pt-10">
               <div className='flex'>
                    <img src={logicon} alt="logo" width={250} />

               </div>
               
               <p className='text-white text-6xl  w-[60%] mt-20 font-bold'>We are <span className='text-blue-400'>authorized</span> agents offering mobile money and banking services</p>
             </div>
            </div>  
        </>
    )
}

export default Hero