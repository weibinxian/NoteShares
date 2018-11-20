import axios from 'axios';

export const createnewnote = newNote => {
    return axios
    .post('api/notes/newpost', {
          title: newNote.title,
         body : newNote.body,
         text : newNote.text
    });

}

