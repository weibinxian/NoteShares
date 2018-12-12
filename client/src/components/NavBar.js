import React from 'react'
import { Link } from 'react-router-dom'

//import log out button
import LogOut from './loginComponents/Logout'

const NavBar = () => {
    return (

        <div className="w3-top"> 
         
        <nav className="w3-container w3-bar w3-black">   
            <span className="branding w3-bar-item w3-mobile"> noteShare </span>
            <span className="w3-right w3-mobile">
                <Link className="w3-bar-item w3-button w3-mobile w3-hover-blue" to="/"> Home</Link>
                <Link className="w3-bar-item w3-button w3-mobile w3-hover-blue" to="/user"> User</Link>
                <Link className="w3-bar-item w3-button w3-mobile w3-hover-blue" to="/notes"> Notes</Link>
                <Link className="w3-bar-item w3-button w3-mobile w3-hover-blue" to="/search"> Search</Link>
                <LogOut />
            </span>
        </nav> 

        </div>
        


    )
}

export default NavBar;