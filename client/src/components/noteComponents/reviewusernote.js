import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { getAllNotes } from '../userFunctions'

function Display(props) {

    const note = props.note
    const noteURL = "/viewnote/" + note.id
    let date =  note.updatedAt.substr(0,10);
    console.log(note)
    return (
        <div className="w3-card-4">
            <h1>Title: <Link to={noteURL}>{note.title}</Link></h1>
            <p>last update: {date}</p>
        
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
                    <Display key={note.id} note={note} />    
                );
            })
     
            return (

                <div className="w3-container w3-center">{notes}</div>

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