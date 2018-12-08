import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { getAllNotes } from '../userFunctions'

function Display(props) {

    const note = props.note
    const noteURL = "/viewnote/" + note.id

    return (
        <div>
            <h1><Link to={noteURL}>link</Link></h1>
            <h1>{note.title}</h1>
        
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

                <div>{notes}</div>



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