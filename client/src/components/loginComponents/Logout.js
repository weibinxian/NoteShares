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
                    className="btn btn-secondary" 
                    onClick={clearLocalStorage}>
                    Sign Out
                    </button>
        )
    }else {
        return (<div></div>)
    }
  

}

export default LogOut;