import React, { Component } from 'react'

import { getNoteByID,getAllNotes} from '../userFunctions'
import Auth from '../../utilities/auth'

function Display(props) {
    
return (
    <div>
        
     
     
        
        <h1>{props.title}</h1>
        <h1>{props.body}</h1>
        <h1>{props.text}</h1>
        <h1>{props.id}</h1>

    </div>
)
}

class RenderNote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: []
        }
    }


    async componentWillMount(){
        
        if(this.props.match) {
            let _id = this.props.match.params.id

            await getNoteByID(_id)
            .then(note => {

                console.log(note.data)
                this.setState({
                    notes:note.data
                })
            })
        }  
    }

    
    render(){
       
        let notelist=[];
        let _username=Auth.getlocal('email')
       
        notelist.push(
            this.state.notes.title,
            this.state.notes.body,
            this.state.notes.text,
            
        )
            
                console.log(notelist.image)
            
            
        
        return (
            <div>This notes created by email {_username}
                <div>
                    {notelist}
                </div>
            </div>
            
        );
    }
    
}


export default RenderNote;