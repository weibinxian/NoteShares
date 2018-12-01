import React from 'react'
import { Link } from 'react-router-dom'

//import log out button
import LogOut from './loginComponents/Logout'

const NavBar = () => {
    return (

        <div>  
        <nav className="navBar">   
            <h3 className="logo"> NoteShare App </h3>
            <div className="links">
                <Link to="/"> Home</Link>
                <Link to="/user"> User</Link>
                <Link to="/notes"> Notes</Link>
                <LogOut />
            </div>
        </nav> 

        </div>
        


    )
}

export default NavBar;