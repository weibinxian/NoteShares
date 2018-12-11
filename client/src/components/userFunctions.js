import axios from 'axios';

/*
    USER FUNCTION
    Post reqest to api, to register a new user  
*/
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
    USER FUNCTION
    Post reqest to api, to login in and user authentication 
*/
export const loginAccount = User => {
    return axios
    .post('api/account/signin', {
        email: User.email,
        password: User.password,
    });
}
/*
    USER FUNCTION
    GET reqest to api, to get note id 
*/
export const getUserByID = _id => {
    let URL = 'http://localhost:3001/api/user/' + _id
    return axios
    .get(URL);
}


/*
    NOTE FUNCTION
    Post reqest to api, for create new post 
*/
export const createnewnote = newNote => {
    return axios
    .post('api/notes/newpost', {
          title: newNote.title,
         body : newNote.body,
         text : newNote.text,
         image : newNote.image,
    });
}
export const newcom = newComment => {
    return axios
    .post('http://localhost:3001/api/comments', {
       
       body : newComment.body,

  });
}
/*
    NOTE FUNCTION
    GET reqest to api, to get note id 
*/
export const getNoteByID = _id => {
    let URL = 'http://localhost:3001/api/notes/note/' + _id
    return axios
    .get(URL);
}

/*
    NOTE FUNCTION
    GET reqest to api, to get note id 
*/
export const getAllNotes = _id => {
    let URL = 'http://localhost:3001/api/notes/all/' + _id
    return axios
    .get(URL);
}


/*
    IMAGE FUNCTION
    Post request to Cloudinary  
*/
export const imagesCall = formData => {
    return axios.post("https://api.cloudinary.com/v1_1/sronikle/image/upload", formData, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      })
}