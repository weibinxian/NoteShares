import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Notes extends Component {
    
    render() {
        return(
            

            <div id="user-panel" className="w3-container w3-padding-64 w3-display-topmiddle">
            <div className="w3-animate-top">
                <h1><Link to="/newpost">Create a new note</Link></h1>
                <h1><Link to="/search">Search notes</Link></h1>
                <h1 className="main-page, display-4">This is the Note page</h1>
                
            </div>  
            </div>
        );
    }
}

export default Notes;