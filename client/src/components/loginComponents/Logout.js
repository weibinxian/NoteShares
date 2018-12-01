import React from 'react';

const Auth = require('../../utilities/auth')

const LogOut = () => {

    function test(e) {
        e.preventDefault();
        Auth.signout()
    }

    return (
        <button type="button" 
                className="btn btn-secondary" 
                onClick={test}>
                Sign Out
                </button>
    );
}

export default LogOut;