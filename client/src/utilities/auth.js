const {loginAccount} = require('../components/userFunctions')

module.exports = {

    isAuthenticated: false,
    hasLoginError: false,
    loggedUser: {
        id: '',
        firstName:'',
        lastName:'',
        email: '',
    },

    authenticate(email,password,cb) {
        const user = {
            email: email,
            password: password,
        }
        loginAccount(user)
            .then(res => {
                if(res.status === 200){
                    this.hasLoginError = false;
                    this.loggedUser = res.data;
                    
                    for ( let key in res.data ) {
                        localStorage.setItem(key, res.data[key])
                    }
                    this.isAuthenticated = true;
                    cb();
                }
            })
            .catch(err => {
                this.hasLoginError = true
                console.log(err)
                cb();
            })
    },

    signout(cb) {
        localStorage.clear();
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}