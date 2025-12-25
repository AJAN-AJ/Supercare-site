import StaffCard from './StaffCard.jsx';
import build from '/building.png'

function OurStaff(){
    return(
        <>
          <div className='flex items-center justify-center flex-col mb-20 mt-20'>
                       <h2 className='font-bold text-4xl'>Our Staff members</h2>
                       <div className='h-2  bg-blue-600 w-22 rounded'></div>
          </div> 

          <div className="flex flex-col gap-10 justify-center items-center mb-20">
            <div className="flex flex-row gap-5">
            <StaffCard 
                image={build}
                name="S.A Nkhoma"
                position="Chief Executive Officer"
            />
            <StaffCard 
                image={build}
                name="M Nkhoma"
                position="Chirimba Branch Manager"
            />
            <StaffCard 
                image={build}
                name="Victoria Nkhoma"
                position="Ndirande Branch Manager"
            />
            </div>
           <div className="flex flex-row gap-5">
            <StaffCard 
                image={build}
                name="Miss Grolia Muhara"
                position="Staff Member"
            />
            <StaffCard 
                image={build}
                name="Mrs Nyawete Ngomano"
                position="Staff Member"
            />
            <StaffCard 
                image={build}
                name="Miss Becalo"
                position="Staff Member"
            />
           </div>
           

          </div>
        </>
    )
}

export default OurStaff;