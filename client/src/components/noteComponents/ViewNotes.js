import React, {Component} from 'react';

import { getNoteByID, getAllNotes} from '../userFunctions'


class ViewNote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: []
        }
    }

    componentDidMount(){
        if(this.props.match) {
            let _id = this.props.match.params.id

            getNoteByID(_id)
            .then(note => {

                console.log(note.data)
            })
        }  else if (this.props.findAll){
            let _id = this.props.findAll
            getAllNotes(_id)
            .then(notes => {
                console.log(notes)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }


    render(){
       
        return (
            <div>
                DISPLAY NOTE 
            </div>
        );
    }
}
export default ViewNote;