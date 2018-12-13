import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { getAllNotes } from '../userFunctions'

function Display(props) {

    const note = props.note
    const noteURL = "/viewnote/" + note.id
    let date =  note.updatedAt.substr(0,10);
    // console.log(note)
    return (
        <div className="w3-card-2">

            

            <h1>{note.title}</h1>
            <p>last update: {date}</p> 

            <div>
            <Link to={noteURL}> <p><button class="w3-button w3-padding-large w3-white w3-border readmore"><b>READ MORE »</b></button></p> </Link>
            </div>
        </div>
    )
}

class ViewUserNotes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            callbackResponce: false,
        }
    }

    componentDidMount(){
            //get the notes from the user ID passed through props
            let _id = this.props.findAllByID
            getAllNotes(_id)
            .then(notes => {
                let noteArray = notes.data;
                this.setState({notes: noteArray,
                               callbackResponce: true})
            })
            .catch(err => {
                console.log(err)
            })

    }


    render(){
        if(this.state.callbackResponce){

            const notes = this.state.notes.map( note => {
                return(       
                    <div>
                        <Display key={note.id} note={note} />    
                        
                    </div>
                );
            })
     
            return (

                <div className="w3-container w3-center">
                <div>
                    {notes}
                </div>
                
                
                </div>

            );
        }
       
        return (
            <div>
                LOADING NOTESSSS
            </div>
        );
    }
}
export default ViewUserNotes;