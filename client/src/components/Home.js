import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Auth from '../utilities/auth'

class Home extends Component {

    

    render() {
        const name = Auth.getlocal('firstName')
        let logStatus;
        if (Auth.getlocal('id')){
            logStatus = <h1 className="">Welcome {name}</h1>
        }else {
            logStatus = (<div>
                        <Link className="w3-btn w3-blue w3-large w3-margin-bottom" to="/login">Login</Link> 
                        <br></br>
                        <Link className="w3-btn w3-blue-gray w3-large w3-margin-bottom" to="/signup">Register</Link>
                        </div>)
        }
        return (
            <div className="home-page">  
                <section className="showcase">
                <div className="w3-container w3-display-middle">
		            <div className="w3-text-shadow w3-animate-opacity">{logStatus}</div>
                    <hr></hr>
                    <h4 className="w3-animate-opacity">
                    Welcome to noteShare, a one stop shop for CUNY students to freely share and view notes among students, for free. 
                    </h4>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;