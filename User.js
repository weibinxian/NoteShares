import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import { getUserByID } from '../userFunctions'
import  ViewUserNote  from '../noteComponents/reviewusernote'


import Auth from '../../utilities/auth'


/*
    Display user info 
    and if any note, render the notes
    else say no notes, publish a note 


*/

class User extends Component {

    constructor(){
        super()
        this.state = {
            name: '',
            id: '',
            callbackResponce: false
        }
    }

    componentDidMount(){

        const _id = Auth.getlocal('id')
        getUserByID(_id)
        .then(user => {
            this.setState({name: user.data.firstName,
                                 id: user.data.id,
                                 callbackResponce: true})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        
        if(this.state.callbackResponce){
            let name = this.state.name

            return(
                <div id="user-panel1" className="w3-container w3-padding-64 w3-display-topmiddle">
             
                <div className="w3-animate-top">
                    <header className="showcase1">

                        <div className="words wordpostion">
                            {name}'s profile 
                        </div>
                                        
                         <div className="words wordpostion">
                            <br></br>
                            Notes created by {this.state.name}
                            <br></br>
                        </div>
                    </header>

                    <div className="w3-container w3-block ">
                            <div className="w3-container w3-center">
                                <h2><Link className="w3-button w3-round w3-hover-black wordsforbutton" to="/newpost">Create a new note</Link></h2>
                            </div>
                            
                            <div className="w3-container w3-panel w3-border w3-light-gray w3-round-large">
                               
                                    <div >
                                        <ViewUserNote findAllByID={this.state.id} />
                                    </div>
                                    
                            </div>

                    </div>
                    

                </div>
                </div>
            )
        }
            return(<div>loading dataa</div>) 
    }
;
}

export default User;