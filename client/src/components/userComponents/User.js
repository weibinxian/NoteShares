import React, { Component } from 'react';

import { getUserByID } from '../userFunctions'
import  ViewNote  from '../noteComponents/ViewNotes'


import Auth from '../../utilities/auth'

class User extends Component {
    
    componentDidMount(){

        const _id = Auth.getlocal('id')
        getUserByID(_id)
        .then(user => {
            console.log(user)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const _id = Auth.getlocal('id')
        return (
            <div className="home-page">   
                    <h1 className="display-4"> This is User profile </h1>
                    <h1 className="display-4"> User notes </h1>     
                    <ViewNote findAll={_id} />
            </div>
        );
    }
;
}

export default User;