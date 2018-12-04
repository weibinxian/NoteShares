import React, { Component } from 'react'


import Auth from '../../utilities/auth'

class RenderNote extends Component {
    construstor(props){
        super(props)

        this.state = {
            note: {
            }
        }
    }


    componentDidMount(){

    }

    render(){
        let _id = Auth.getlocal('id')
        return (
            <div>Show all notes by user {_id}</div>
        );
    }
}


export default RenderNote;