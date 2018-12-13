import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ViewNotes from './ViewNotes';


class Notes extends Component {
    
    render() {
        return(
            

            <div id="user-panel" className="w3-container w3-padding-64 w3-display-topmiddle">
            <div className="w3-animate-top">
              
                
                <div id="bottom-section" className="w3-panel w3-border w3-light-grey w3-round-large">
              
                <h2 className="display-4 center"> All the notes </h2>
                    <div className="w3-container w3-block postion">
                        <h2><Link className="w3-button w3-display-topmiddle w3-round w3-hover-light-blue" to="/newpost">Create a new note</Link></h2> 
                    </div>
                <br></br>
                
                <br></br>
                <ViewNotes />
                </div>
        
            </div>
            </div>

            
        );
    }
}

export default Notes;