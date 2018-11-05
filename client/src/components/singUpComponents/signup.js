import React, { Component } from 'react';
import { register } from '../userFunctions';




/*
This is the sign up form, we can have a search bar for users to pick their cuny school

*/
class SignUp extends Component {
    constructor(){
        super();

        this.state = {
            fname : '', 
            lname : '',   
            username : '',
            school : '',  
            email : '',
            password : ''
         };
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            fname : this.state.fname,
            lname : this.state.lname,
            username : this.state.username,
            school : this.state.school,
            email : this.state.email,
            passw : this.state.password
        }

        register(newUser)
        .then(res => {
            if(res){
                console.log(res)
            }
        });
        console.log('Sending post request ');
    }


    render () {
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
                           value = { this.setState.fname}></input>

                    </div>
                    <div className="col">
                    <input  name="lname" 
                            type="text" 
                            className="form-control" 
                            placeholder="Last name"
                            onChange = { (e) => this.onChange(e)}
                            value = { this.setState.lname}></input>

                    </div>
                </div>
                <label>Enter a username</label>
                <input name="username" 
                       className="form-control" 
                       id="username" 
                       type="text"
                       onChange = { (e) => this.onChange(e)}
                       value = { this.setState.username}></input>

                <label>Enter school</label>
                <input name="school" 
                       className="form-control" 
                       id="school" 
                       type="text"
                       onChange = { (e) => this.onChange(e)}
                       value = { this.setState.school}></input>

                <label>Enter CUNY email</label>
                <input name="email" 
                       className="form-control" 
                       id="email" 
                       type="email" 
                       placeholder="example@...cuny.edu"
                       onChange = { (e) => this.onChange(e)}
                       value = { this.setState.email}></input>

                <label>Password</label>
                <input name="password" 
                       className="form-control" 
                       id="password" 
                       type="password"
                       onChange = { (e) => this.onChange(e)}
                       value = { this.setState.password}></input>

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

export default SignUp;