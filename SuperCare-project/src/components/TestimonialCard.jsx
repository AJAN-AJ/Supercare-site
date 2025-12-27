function TestimonialCard(props) {
    const {name, feedback,image} = props;

    return (
        <>
            <div className="p-2 rounded border border-gray-300 shadow-xl flex lg:flex-row flex-col items-center gap-2">
                <img src={image} alt={name} className="w-15"/>
                <div>
                    <h3>{name}</h3>
                    <p>"{feedback}"</p>
                </div>
            </div>
        </>
    )

}
export default TestimonialCard;