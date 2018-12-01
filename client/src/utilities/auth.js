const {loginAccount} = require('../components/userFunctions')

module.exports = {
    /*
        return the value of requested item from localStorage
    */
    getlocal(item){
        return localStorage.getItem(item)
    },
    /*
        authentication and set localStorage with the logged user information
    */
    authenticate(email,password,cb) {

        const user = {
            email: email,
            password: password,
        }

        //post request to API
        loginAccount(user)
            .then(res => {
                if(res.status === 200){
                    //set localStorage info
                    for ( let key in res.data ) {
                        localStorage.setItem(key, res.data[key])
                    }
                    localStorage.setItem('isAuthenticated', 'true')
                    localStorage.setItem('hasLoginError', 'false')
                    //callback
                    cb();
                }
            })
            .catch(err => { 
                //there was a 401 status, the password/email are incorrect
                localStorage.setItem('hasLoginError', 'true')
                console.log(err)
                //callback
                cb();
            })
    },
    /*
        sign out and clear the localStorage
    */
    signout() {
        localStorage.clear();
        console.log(localStorage)
    }
}