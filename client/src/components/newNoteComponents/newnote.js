import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createnewnote } from '../userFunctions';

//image component 
import Images from '../imageComponents/images';


/*
This is the new note test, bascilly just post the new notes.

*/
class NewNote extends Component {
    constructor(props){
        super(props);

        this.state = {
            upload: {
                imageCB: false,
                imageURL: [],
            } ,
            errors: {},
            callBackResponce: false,
            client: {
               title:'',
               body:'',
               text:''
            }
         };
    }

    //callback function to pass down to images component 
    imageCallback = (dataFromChild) => {
        this.setState({ upload: dataFromChild})
    }

    onChange(e) {
        const client = this.state.client;
        const field = e.target.name;
        client[field] = e.target.value;
   
        this.setState({ client });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(this.state)
        /*
        if imagescb 
            var = this.state.upload.imageURL
        else 
            var=[]
        */

        const imagesCB = this.state.upload.imageCB;
    
        let images ; 
        if(imagesCB) {
             images = this.state.upload.imageURL
        } else {
             images = []
        }
    
        const newNote = {
            title : this.state.client.title,
            body : this.state.client.body,
            text : this.state.client.text,
            image : images
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
                    
                    <Images callbackFromParent={this.imageCallback}/>
                    
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