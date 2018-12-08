import React, { Component } from 'react'
import Comment from '../commentComponent/comments'
import { getNoteByID,} from '../userFunctions'
import Auth from '../../utilities/auth'



class RenderNote extends Component {

    constructor() {
        super()

        this.state = {
            note: [],
            gotData: false
        }
    }


    componentDidMount(){
            
            const id = this.props.match.params.id

            getNoteByID(id)
            .then(note => {

                this.setState({
                    note:note.data,
                    gotData: true
                })
            })
         
    }

    
    render(){

        if(this.state.gotData){
            console.log(this.state.note)
        }

         let _username=Auth.getlocal('email')
       
   

        return (
            <div>This notes created by email {_username}

                <div>
                    <Comment />

                    
                </div>
            </div>
            
        );
    }
    
}


export default RenderNote;