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
            return(
                <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div>
                    <h2 className="display-4 center"> This is User profile </h2>
                    <h2><Link to="/newpost">Create a new note</Link></h2> 
                    <br></br>
                    <h1>Note by {this.state.name}</h1>
                    <br></br>
                    <ViewUserNote findAllByID={this.state.id} />    
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