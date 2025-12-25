import building from '/building.png'

function WhenWestarted(){
    let num1 = 7;
    let num2 = 5;

    return(
        <>
          <div className="whoarewe-section py-20 px-5 bg-gray-100">
                     <div className='flex items-center justify-center flex-col mb-20'>
                       <h2 className='font-bold text-4xl'>When we started</h2>
                       <div className='h-2  bg-blue-600 w-22 rounded'></div>
                     </div> 
                     <div className="flex  justify-center pl-40 pr-40 gap-10">
                         <img src={building} alt="buidings" className='flex-1 h-100'/>
                         <div>
                            <p className='text-xl'><span className='font-bold'>Our Journey & Experience</span><br /><br />

                               Supercare Solutions was established with a vision to 
                               bridge the gap in financial  services accessibility 
                               in Malawi. Since our inception, we have been  committed
                               to providing reliable and secure mobile money and banking
                               services to our community. <br /><br />

                               Over the years, we have built strong partnerships with 
                               major financial  institutions and mobile money providers, 
                               enabling us to offer  comprehensive services that meet the
                               diverse needs of our customers.

                             </p>
                             <div className='flex gap-30 mt-10'>
                                <div className='flex flex-col text-center justify-center'>
                                     <p className='text-green-400 font-bold text-3xl'>{num1}</p>
                                     <p>Partner Platform</p>    
                                </div>
                               <div className='flex flex-col text-center justify-center'>
                                     <p className='text-red-400 font-bold text-3xl'>{num2}+</p>
                                     <p>Years of service</p>    
                                </div>

                             </div>


                         </div>
                        
                         
                     </div>
                    
                   </div>
        </>
    )
}

export default WhenWestarted;