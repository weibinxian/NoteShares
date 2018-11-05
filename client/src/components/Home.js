import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Jumbo from "./Jumbrotron";

class Home extends Component {
    render() {
        return (
           
            <div className="home-page">  
                <Link to="/login">Login</Link> 
                <br/>
                <Link to="/signup">Register</Link>
                 <Jumbo /> 
                <br/>
                Home Page
            </div>
        );
    }
}

export default Home;