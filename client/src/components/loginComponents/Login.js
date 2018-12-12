import React, { Component } from 'react';
import { Redirect } from 'react-router';


const Auth = require('../../utilities/auth')

//Error function
//renders the error message
function Error(props) {
    return(
        <div>
            <h3 className='error'>{props.message}</h3>
        </div>
    );
}

class Login extends Component{
    constructor() {
        super();

        this.state = {
            errors: '',
            callBackResponce: false,
            User: {
                email: '',
                password: '',
            }
        };
    }

    onChange(e) {
        const User = this.state.User;
        const field = e.target.name;
        User[field] = e.target.value;

        this.setState({ User });
    }

    onSubmit(e) {
        e.preventDefault();
        
        //Authenticate the user
        Auth.authenticate(this.state.User.email, this.state.User.password, () => {
                //cb 
                if(Auth.getlocal('hasLoginError') === 'true'){
                    //there was a 401 error, not authorized 
                    this.setState({ error: 'Incorrect password or email'})
                }else {
                    //there was no login errors
                    //route to user page 
                    this.setState({ callBackResponce : !this.state.callBackResponce });
                }
        });
    }


    render() {
        const { callBackResponce } = this.state;
        const { error } = this.state;
       
        //if the user was able to sign in 
        //redirect to user landing page
        if(callBackResponce) {
            return <Redirect to="/user" />;
        } else {
            return(
                 <div className="w3-container w3-display-middle">
                 <div className="w3-card-4">
                 <div className="w3-container w3-blue">
                    <br></br>
                </div>
                 <Error message={error} />
                    <form className="w3-container w3-center" name="login" onSubmit={ (e) => this.onSubmit(e)}>
                    <div className="">
                        <label>Email Address</label>
                        <input name="email" 
                               className="w3-input" 
                               type="email" 
                               placeholder="Enter email"
                               onChange = { (e) => this.onChange(e)}>
                        </input>
                    </div>
    
                    <div className="">
                        <label>Password</label>
                        <input name="password" 
                               className="w3-input" 
                               type="password" 
                               placeholder="Password"
                               onChange = { (e) => this.onChange(e)}>
                        </input>
                    </div>
                    <button type="submit" className="w3-btn w3-text-white">Sign In</button>
                </form>
                </div>
                 </div>
            );
        }
    }
}

export default Login;