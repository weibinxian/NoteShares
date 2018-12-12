import axios from 'axios';


/*
    SEARCH FUNCTION
    GET reqest to api, to get note id 
*/
export const searchKeywords = (keywords, path) => {

    //create query path for keywords
    //back-end parses the url
    let queryURL = new URLSearchParams();
    for ( let key in keywords) {
        queryURL.append(key, keywords[key])
    }
    
    const query = queryURL.toString()
    let URL = 'http://localhost:3001/api/notes/search/'+ path+'/keywords/?'+query;
    return axios
    .get(URL);
}