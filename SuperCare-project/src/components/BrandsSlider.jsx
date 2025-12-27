import airtel from "/brandslogo/airtel.png"

import tnm from "/brandslogo/tnm.png"
import finca from "/brandslogo/finca.png"
import standard from "/brandslogo/standard.png"
import fcapital from "/brandslogo/firstCapital.png"

function BrandsSlider() {
    const logos = [
        airtel,
        tnm,
        finca,
        standard,
        fcapital,
    ]
    return (
    <>
     <p className="text-center font-bold">Brands we work for</p>
    <div className="flex justify-center  mt-5 mb-5">
    
     <div className="w-[73%] flex items-center justify-center overflow-hidden bg-white py-6">
        <div className="flex w-[80%] items-center justify-center logo-scroll">
            {[...logos, ...logos].map((logo, index) => (
                <div
                    key={index}
                    className="flex items-center justify-center w-64 mx-4 shrink-0">
                        <img
                            src={logo}
                            alt="brand logo"
                            className="h-16 w-auto"/>
                </div>
            ))}
        </div>

    </div>
    </div>
    
    </>
    )

}
export default BrandsSlider;