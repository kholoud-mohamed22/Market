import { NavLink } from "react-router-dom";

function Navbar() {
    return (<div className="navbar  sticky-top navbar-expand fixed-top text-blenda" style={{}}> 
        <NavLink to="/" className="m-2 navbar-brand text-black "><i class="bi bi-cart" 
        style={{ margin: 15  }}></i>Market</NavLink>
        <ul className="navbar-nav font-weight-bold">
            <li className="nav-item font-weight-bold">
                <NavLink to="/categories" className="nav-link text-black" >Categories</NavLink>  
            </li>
            <li className="nav-item">
                <NavLink to="/offers" className="nav-link text-black" >Our Offers</NavLink>  
            </li>
            <li className="nav-item">
                <NavLink to="/contact" className="nav-link text-black" >Contact Us</NavLink>  
            </li>
           
            
        </ul>
    </div>);
}
export default Navbar;