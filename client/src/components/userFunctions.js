import axios from 'axios';

export const register = newUser => {
    return axios
    .post('api/account/signup', {
         fname : newUser.fname,
         lname : newUser.lname,
         username : newUser.username,
         school : newUser.school,
         email : newUser.email,
         passw : newUser.passw,
    });
}

/*
    Post reqest to api, for create new post 
*/
export const createnewnote = newNote => {
    return axios
    .post('api/notes/newpost', {
          title: newNote.title,
         body : newNote.body,
         text : newNote.text
    });

}

/*
    Post reqest to api, to login in and user authentication 
*/
export const loginAccount = User => {
    return axios
    .post('api/account/signin', {
        email: User.email,
        password: User.password,
    });
}