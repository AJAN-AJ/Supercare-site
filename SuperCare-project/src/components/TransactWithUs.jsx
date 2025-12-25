import PeopleTransacting from '/PeopleTransacting.jpg'

function TransactWithUs(){
    return(
        <>
        <div className="bg-cover bg-center mt-20" style={{backgroundImage: `url(${PeopleTransacting})`, height: '400px', width: '100%'}}>
        <div className='bg-gradient-to-b from-black/70 via-black/70 to-black/70 p-31 pt-30 text-white'>
            <div className='flex flex-col items-center gap-20'>
                <p className='font-bold text-3xl'>Transact with us</p>
                <div className='flex gap-10'>
                    <button className='bg-green-400 p-2 pl-25 pr-25 rounded'>Whats App</button>
                    <button className='border pl-25 p-2 pr-25 rounded'>View our service</button>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default TransactWithUs;