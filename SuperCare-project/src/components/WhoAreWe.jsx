import building from '/building.png'

function WhoAreWe(){


    return(
        <>
          <div className="whoarewe-section py-20 lg:px-5 bg-gray-100">
            <div className='flex items-center justify-center flex-col mb-10 lg:mb-20'>
              <h2 className='font-bold text-4xl'>Who we are</h2>
              <div className='h-2  bg-blue-600 w-22 rounded'></div>
            </div> 
            <div className="flex flex-col lg:flex-row justify-center pl-[5%] pr-[5%] lg:pl-40 lg:pr-40 lg:gap-10">
               
                <p className='text-xl'>Supercare  Solution is a trusted and reliable
                   mobile money and banking agent service provider 
                   in Malawi. We specialize in facilitating seamless 
                    financial transactions across multiple platforms 
                    to serve our  community's diverse banking needs. <br /><br />

                    Our comprehensive services include transactions
                    for <span className="font-bold">Mpamba, Airtel Money, FDH Bank, NBS Bank,
                    National Bank, Finca,</span> and other related financial 
                    services. We are committed to providing secure,
                     fast, and professional financial solutions.</p>
                <img src={building} alt="buidings" className='flex-1 h-100'/>
            </div>
           
          </div>
        </>
    )
}       
export default WhoAreWe 