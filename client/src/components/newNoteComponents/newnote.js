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

    clear(e){
        e.preventDefault()
        this.setState({upload: {
            imageCB: false,
            imageURL: [],
        }})
    }
    render () {
       
        const { callBackResponce } = this.state;

        //if the new note was created with success
        //redirect to a new path to view the note
        if(callBackResponce) {
            return <Redirect to="/notes" />;

        } else {
 
            let imagesInfo;
            if(this.state.upload.imageCB){
                if(this.state.upload.imageURL.length !== 0){
                    imagesInfo = <div>
                    <p>Images uploaded {this.state.upload.imageURL.length}</p>
                    <button className="w3-btn" onClick={(e) => this.clear(e)} >clear</button>
                </div>
                } else {
                    imagesInfo = <div></div>
                }
            }
            return(
                <div id="user-panel" className="w3-container w3-padding-64 w3-display-topmiddle">
                <div  className="w3-container">
                <div className="w3-card-4">
                <form className="w3-container w3-center" name="login" onSubmit={ (e) => this.onSubmit(e)}>
                <div className="">
                    
                    <label>Name your title</label>
                    <input name="title" 
                           className="w3-input"
                           id="title" 
                           type="text"
                           onChange = { (e) => this.onChange(e) }
                           required
                           ></input>

                    <label>Body</label>
                    <textarea name="body" 
                           className="w3-input"
                           id="body" 
                           type="text"
                           onChange = { (e) => this.onChange(e)}
                           required
                           ></textarea>
                    <br></br>
                    <label>keywords(optional)</label>
                    <textarea name="text" 
                           className="w3-input"
                           id="text" 
                           type="txt"
                           onChange = { (e) => this.onChange(e)}
                           required
                          ></textarea>
                    <br></br>

                    <div >
                    <Images callbackFromParent={this.imageCallback}/>
                    </div>
                    {imagesInfo}
                </div >
                    <button type="submit" className="">Create Note</button>
                </form>
                </div>
                </div>
                </div>
    
            );
        }
    }
}

export default NewNote;