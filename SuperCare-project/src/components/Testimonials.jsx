import TestimonialCard from "./TestimonialCard";
import finca from "/brandslogo/finca.png"

function Testimonials(){
    return(
        <>
        <div className="flex flex-col gap-5 items-center mb-20 mt-20">
            <h2 className="text-center font-bold text-4xl">What our cutomers <br />Say About Us</h2>
            <p>Transact with supercare today</p>
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-14">
                <TestimonialCard 
                    name="John Doe"
                    feedback="Great service and support!"
                    image={finca}/>
                <TestimonialCard 
                    name="Jane Smith"
                    feedback="Highly recommend Supercare."
                    image={finca}/>
                <TestimonialCard 
                    name="Mike Johnson"
                    feedback="Exceptional experience from start to finish."
                    image={finca}/>
            </div>
        </div>
        </>
    )
}
export default Testimonials;