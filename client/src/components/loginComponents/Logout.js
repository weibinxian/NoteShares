import React from 'react';


const Auth = require('../../utilities/auth')

const LogOut = () => {

    function clearLocalStorage(e) {
        e.preventDefault();
        Auth.signout()

    }

    if (Auth.getlocal('id')){
        return (
            <button type="button" 
                    className="w3-button w3-round w3-hover-red" 
                    onClick={clearLocalStorage}>
                    Sign Out
                    </button>
        )
    }else {
        return (<div></div>)
    }
  

}

export default LogOut;