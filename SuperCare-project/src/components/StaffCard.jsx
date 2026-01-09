function StaffCard({ name, position, image, active }) {
  return (
    <div
      className={`snap-start flex-shrink-0 rounded-xl shadow-md border border-gray-200 transition-transform duration-500 p-6 text-center
        ${active ? "scale-100 opacity-100" : "scale-90 opacity-50"}
        w-[80vw] lg:w-80`}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-64 rounded object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-500 text-sm">{position}</p>
    </div>
  );
}

export default StaffCard;
