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

         let _username=Auth.getlocal('username')
       
   

        return (
            <div id="user-panel" className="w3-container w3-padding-64 w3-display-topmiddle">
            <div className="w3-animate-top">
                <div id="bottom-section" className="w3-panel w3-border w3-light-grey w3-round-large">
                  <h1>This notes created by {_username} </h1>
                </div>
                <Comment />
          
            </div>
            </div>
                    
         
            

                
        );
    }
    
}


export default RenderNote;