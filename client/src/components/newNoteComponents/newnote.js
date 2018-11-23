import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createnewnote } from '../userFunctions';




/*
This is the new note test, bascilly just post the new notes.

*/
class NewNote extends Component {
    constructor(){
        super();

        this.state = {
            errors: {},
            callBackResponce: false,
            client: {
               title:'',
               body:'',
               text:''
            }
         };
    }

    
    onChange(e) {
        const client = this.state.client;
        const field = e.target.name;
        client[field] = e.target.value;
   
        this.setState({ client });
    }

    onSubmit(e) {
        e.preventDefault();

        const newNote = {
            title : this.state.client.title,
            body : this.state.client.body,
            text : this.state.client.text
        }

        console.log(newNote);

        createnewnote(newNote)
        .then(res => {
            if(res){

                this.setState({ callBackResponce : !this.state.callBackResponce });
                console.log("Registered inside register: " + res);
            }
        });
        console.log('Sending post request ');
     
    }


    render () {
        const { callBackResponce } = this.state;

        //if the new note was created with success
        //redirect to a new path to view the note
        if(callBackResponce) {
            return <Redirect to="/notes" />;

        } else {
            return(
                <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12 col-xs-12">
                <form name="login" onSubmit={ (e) => this.onSubmit(e)}>
                <div className="form-group">
                    
                    <label>Name your title</label>
                    <input name="title" 
                           className="form-control" 
                           id="title" 
                           type="text"
                           onChange = { (e) => this.onChange(e) }
                           required
                           ></input>
    
                    <label>Body</label>
                    <textarea name="body" 
                           className="form-control" 
                           id="body" 
                           type="text"
                           onChange = { (e) => this.onChange(e)}
                           required
                           ></textarea>
    
                    <label>text</label>
                    <textarea name="text" 
                           className="form-control" 
                           id="text" 
                           type="txt"
                           onChange = { (e) => this.onChange(e)}
                           required
                          ></textarea>
    
                    
                </div>
                    <button type="submit" className="btn btn-primary">Create Note</button>
                </form>
                </div>
                </div>
    
            );
        }
    }
}

export default NewNote;