import axios from 'axios';


/*
    SEARCH FUNCTION
    GET reqest to api, to get note id 
*/
export const searchKeywords = keywords => {
    let queryURL = new URLSearchParams();
    for ( let key in keywords) {
        console.log(key, keywords[key])
        queryURL.append(key, keywords[key])
    }
    
    const query = queryURL.toString()
    let URL = 'http://localhost:3001/api/notes/keyword/?'+query;
    console.log(URL)
    return axios
    .get(URL);
}
