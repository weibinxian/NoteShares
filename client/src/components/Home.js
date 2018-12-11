import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Jumbo from "./Jumbrotron";
import Auth from '../utilities/auth'

class Home extends Component {

    

    render() {
        const name = Auth.getlocal('firstName')
        let logStatus;
        if (Auth.getlocal('id')){
            logStatus = <h1>Welcome {name}</h1>
        }else {
            logStatus = <div>
                        <Link to="/login">Login</Link> 
                        <br></br>
                        <Link to="/signup">Register</Link>
                        </div>
        }
        return (
            <div className="home-page">  
                <div>{logStatus}</div>
                 <Jumbo /> 
                <br/>
            </div>
        );
    }
}

export default Home;