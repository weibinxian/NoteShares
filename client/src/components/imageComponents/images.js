import React, { Component } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'


// axios post call to API
const {imagesCall} = require('../userFunctions')


/*
    We can store the id of each id,
    Inside the Parent Component we can have a button to reset the images
*/
class Images extends Component{
    constructor() {
        super()

        this.state = {
            imageURL : [],
            imageCB : false,
        };
    }

    handleDrop = files => {
        //console.log(files)
        // Push all the axios request promise into a single array
        const uploaders = files.map(file => {
          // Initial FormData
          //console.log(file)
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "db30ujvt"); // Replace the preset name with your own
          formData.append("api_key", "837478342353245"); // Replace API key with your own Cloudinary key
          formData.append("timestamp", (Date.now() / 1000) | 0);
          
          //submit each image to Cloudinary cloud
          return imagesCall(formData)
          .then(response => {
              //add the URL to the state a
              //we can also store IDs 
              let urlArray = this.state.imageURL.concat(response.data.secure_url)
              this.setState({ imageURL: urlArray})
          })
          .catch(err => {
              //error posting image to server 
              console.log(err)
          })
        });
      
        //Once all the files are uploaded from axios 
        //callback to parent component with state
        axios.all(uploaders).then(() => {
            this.setState({ imageCB: true})
            const state = this.state;
            this.props.callbackFromParent(state)
            console.log('image upload cb')
        });
    }


    render(){
        return(<div>
            <Dropzone 
                className="images w3-outline"
                onDrop={this.handleDrop} 
                multiple 
                accept="image/*" 
            >
            <p>Drop your files or click here to upload</p>
            </Dropzone>
            <div>
            </div>
        </div>
        );

    }

}

export default Images;