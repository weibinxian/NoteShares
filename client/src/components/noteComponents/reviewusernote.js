import React, {Component} from 'react';

import { getNoteByID, getAllNotes} from '../userFunctions'

import { Link } from 'react-router-dom';

function Display(props) {
        let noteID = props.id;
        let noteURL = "/viewnote/" + noteID
    return (
        <div>
            <h1><Link to={noteURL}>link</Link></h1>
            <h1>{props.title}</h1>
            <h1>{props.body}</h1>
            <h1>{props.text}</h1>
            <h1>{props.id}</h1>

        </div>
    )
}



class ViewNote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: []
        }
    }

    componentWillMount(){
        console.log('------')
        if(this.props.match) {
            let _id = this.props.match.params.id

            getNoteByID(_id)
            .then(note => {

                console.log(note.data)
                this.setState({
                    notes:note.data
                })
            })
        }  else if (this.props.findAll){
            let _id = this.props.findAll
            getAllNotes(_id)
            .then(notes => {
                console.log(notes.data)
                this.setState({notes:notes.data})
            })
            .catch(err => {
                console.log(err)
            })
        }
    }


    render(){
        console.log('inside render')
        console.log(this.state.notes)
       let notelist=[];
       
       for(let i =0; i<this.state.notes.length;i++){
           let item = this.state.notes[i];

           notelist.push(
               <Display  title ={item.title}
                        body ={item.body}
                        text = {item.text}
                        id = {item.id}
               />
           );
       }
       
        return (
            <div>
                DISPLAY NOTE <h1> {notelist}</h1>
                
            </div>
        );
    }
}
export default ViewNote;