import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (

        <div>  
        <nav className="navBar">   
            <h3 className="logo"> NoteShare App </h3>
            <div className="links">
                <Link to="/"> Home</Link>
                <Link to="/user"> User</Link>
                <Link to="/notes"> Notes</Link>
            </div>
        </nav> 

        </div>
        


    )
}

export default NavBar;