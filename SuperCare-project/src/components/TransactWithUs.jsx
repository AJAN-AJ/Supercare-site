import PeopleTransacting from '/PeopleTransacting.webp'
import WhatsAppButton from './whatsApp/WhatsAppButton';

function TransactWithUs(){
    return(
        <>
        <div className="bg-cover bg-center mt-20 lg:h-[400px] w-[100%]" style={{backgroundImage: `url(${PeopleTransacting})`}}>
        <div className='bg-gradient-to-b from-black/70 via-black/70 to-black/70 lg:p-29 p-10 lg:p-20 lg:pt-30 text-white'>
            <div className='flex flex-col items-center  lg:gap-20 gap-5'>
                <p className='font-bold text-3xl'>Transact with us</p>
                <div className='flex lg:flex-row flex-col gap-5'>
                    <WhatsAppButton />
                    <a href="#service"><button className='border lg:pl-25 p-2 lg:pr-25 rounded hover:border-green-300 hover:text-green-300 cursor-pointer'>View our service</button></a>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default TransactWithUs;