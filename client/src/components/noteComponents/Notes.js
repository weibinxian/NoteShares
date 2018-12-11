import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Notes extends Component {
    
    render() {
        return(
            

            <div className="home-page">
                <h1><Link to="/newpost">Create a new note</Link></h1>
                <h1 className="main-page, display-4">This is the Note page</h1>
                
            </div>  
           
        );
    }
}

export default Notes;