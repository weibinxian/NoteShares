import React, { Component } from 'react';


class Login extends Component{
    render() {
        return(
            <div className="row justify-content-center">
             <div className="col-md-6 col-sm-12 col-xs-12">
            <form name="login" action="/login" method="post" className="p-t-2">
                <div className="form-group">
                    <label>Email Address</label>
                    <input name="email" className="form-control" id="email" type="email" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" className="form-control" type="password" placeholder="Password"></input>
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
             </div>
            </div>
        );
    }
}

export default Login;