import axios from 'axios';

export const register = newUser => {
    return axios
    .post('api/account/signup', {
         fname : newUser.fname,
         lname : newUser.lname,
         username : newUser.username,
         school : newUser.school,
         email : newUser.email,
         passw : newUser.password
    })
    .then( res => {
        console.log('Account Created')
    });
}

