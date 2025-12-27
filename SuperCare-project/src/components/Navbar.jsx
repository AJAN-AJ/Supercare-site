import { NavLink } from "react-router-dom";

function Navbar(){
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Charges", path: "/charges" }
    ]

    return(
       
        <nav>
            {
                links.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 font-semibold"
                                : "text-gray-600 hover:text-blue-600"
                            }
                    >
                        {link.name}
                    </NavLink>
                        ))}
        </nav>
        
    );
}
export default Navbar;