import "./NavBar.css"


import { NavLink } from "react-router-dom";
import DarkModeBtn from "../darkModeBtn/DarkModeBtn";

const NavBar = () => {

    const activeLink = "navList__link--active";
    const normalLink = "navList__link"

    return ( 

        <nav className="nav">
        <div className="container">
          <div className="navRow">

            <NavLink to="/" className="logo">
              <strong>Frontender</strong>portfolio
            </NavLink>

            <DarkModeBtn/>

            <ul className="navList">
              <li className="navList__item">
                <NavLink to="/" className={({isActive}) => isActive?activeLink:normalLink}>
                  Home
                </NavLink>
              </li>
              <li className="navList__item">
                <NavLink to="/projects" className={({isActive}) => isActive?activeLink:normalLink}>
                  Projects
                </NavLink>
              </li>
              <li className="navList__item">
                <NavLink to="/contacts" className={({isActive}) => isActive?activeLink:normalLink} >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    );
}
 
export default NavBar;