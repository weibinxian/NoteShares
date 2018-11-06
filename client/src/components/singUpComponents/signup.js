import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { register } from '../userFunctions';




/*
This is the sign up form, we can have a search bar for users to pick their cuny school

the register form can be added to another component, this way we can render to the register form with
errors or redirect to another path

*/
class SignUp extends Component {
    constructor(){
        super();

        this.state = {
            errors: {},
            callBackResponce: false,
            client: {
                fname : '', 
                lname : '',   
                username : '',
                school : '',  
                email : '',
                password : ''
            }
         };


    }

    
    onChange(e) {
        const client = this.state.client;
        const field = e.target.name;
        client[field] = e.target.value;
   
        this.setState({ client });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            fname : this.state.client.fname,
            lname : this.state.client.lname,
            username : this.state.client.username,
            school : this.state.client.school,
            email : this.state.client.email,
            passw : this.state.client.password
        }

        console.log(newUser)

        register(newUser)
        .then(res => {
            if(res){

                //it is not setting the set for the redirect
                this.setState({ callBackResponce : !this.state.callBackResponce });
                console.log(res);
            }
        });
        console.log('Sending post request ');
     
    }


    render () {
        const { callBackResponce } = this.state;

        //if the account was created with success
        //redirect to a new path 
        if(callBackResponce) {
            return <Redirect to="/" />;

        } else {
            return(
                <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12 col-xs-12">
                <form name="login" onSubmit={ (e) => this.onSubmit(e)}>
                <div className="form-group">
                    <label>Enter name</label>
                    <div className="form-row">
                        <div className="col">
                        <input name="fname" 
                               type="text" 
                               className="form-control"
                               placeholder="First name"
                               onChange = { (e) => this.onChange(e)}
                                ></input>
    
                        </div>
                        <div className="col">
                        <input  name="lname" 
                                type="text" 
                                className="form-control" 
                                placeholder="Last name"
                                onChange = { (e) => this.onChange(e)}
                                ></input>
    
                        </div>
                    </div>
                    <label>Enter a username</label>
                    <input name="username" 
                           className="form-control" 
                           id="username" 
                           type="text"
                           onChange = { (e) => this.onChange(e)}
                           ></input>
    
                    <label>Enter school</label>
                    <input name="school" 
                           className="form-control" 
                           id="school" 
                           type="text"
                           onChange = { (e) => this.onChange(e)}
                           ></input>
    
                    <label>Enter CUNY email</label>
                    <input name="email" 
                           className="form-control" 
                           id="email" 
                           type="email" 
                           placeholder="example@...cuny.edu"
                           onChange = { (e) => this.onChange(e)}
                          ></input>
    
                    <label>Password</label>
                    <input name="password" 
                           className="form-control" 
                           id="password" 
                           type="password"
                           onChange = { (e) => this.onChange(e)}
                           ></input>
    
                    <label>Repeat Password</label>
                    <input name="password2" 
                           className="form-control" 
                           id="password2" 
                           type="password"></input>
                </div>
                    <button type="submit" className="btn btn-primary">Create Account</button>
                </form>
                </div>
                </div>
    
            );
        }
    }
}

export default SignUp;