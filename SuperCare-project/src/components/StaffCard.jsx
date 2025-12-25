function staffCard(props) {
    const {name, position, image} = props

    return (
        <>
         <div className="rounded-xl shadow-md hover:shadow-lg transition p-6 
                         text-center w-80">
            <img src={image} 
                 alt={name} 
                 className="w-24 h-24 mx-auto rounded-full object-cover mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-500 text-sm">{position}</p>

         </div>
        </>
    )
}
export default staffCard;