import React, { Component } from 'react';

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
            return(
            <div>
                 <h1 className="display-4"> This is User profile </h1>
                 <h1 className="display-4"> User notes </h1> 
                 <ViewUserNote findAllByID={this.state.id} />    
            </div>
            )
        }
            return(<div>loading dataa</div>) 
    }
;
}

export default User;