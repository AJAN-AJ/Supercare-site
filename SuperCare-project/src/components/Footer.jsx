import Cards from "/Cards.png";

function Footer() {
    return(
        <>
        <div className="bg-black text-white pt-10 pl-5 flex justify-center">
            <div className="flex flex-col lg:gap-[5%] gap-10">
                <div>
                     <h1 className="font-bold text-4xl">SUPERCARE <br /> SOLUTIONS</h1>
                <p>Scs  is an all transaction, bank services agency
                   whose work <br /> is widely recognized in Malawi.</p>
                </div>
               
                <div>
                    <p className="font-bold">Our social Media Platforms</p>
                </div>
                <div>
                    <p className="font-bold">Our Shops</p>
                    <p><span className="font-bold">Blantyre</span>-Ndirande, Market</p>
                    <p><span className="font-bold">Blantyre</span>-Chirimba, Furniture </p>
                </div>
                <div>
                    <p className="font-bold">Contact us</p>
                    <p>Phone: +265 888 350 010</p>
                    <p>Email: sucaso@gmail.com</p>
                </div>
                
            </div>
            <img src={Cards} alt="visa cards" className="hidden lg:block " />
            


        </div>
        
        </>

    )
}
export default Footer