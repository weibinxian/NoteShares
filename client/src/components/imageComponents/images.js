import React, { Component } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'



class Images extends Component{
    constructor() {
        super()

        this.state = {
            imageURL : [],
            imageCB : false,
        };
    }

    handleDrop = files => {
        console.log(files)
        // Push all the axios request promise into a single array
        const uploaders = files.map(file => {
          // Initial FormData
          console.log(file)
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "db30ujvt"); // Replace the preset name with your own
          formData.append("api_key", "837478342353245"); // Replace API key with your own Cloudinary key
          formData.append("timestamp", (Date.now() / 1000) | 0);
          
          // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
          return axios.post("https://api.cloudinary.com/v1_1/sronikle/image/upload", formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }).then(response => {
            let urlArray = this.state.imageURL.concat(response.data.secure_url)
            this.setState({ imageURL: urlArray})
          })
          .catch(err => {
              console.log(err)
          })
        });
      
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            this.setState({ imageCB: true})
            const test = this.state;
            this.props.callbackFromParent(test)
        });
      }

    render(){
        return(
            <Dropzone 
                onDrop={this.handleDrop} 
                multiple 
                accept="image/*" 
            >
            <p>Drop your files or click here to upload</p>
            </Dropzone>
        );

    }

}

export default Images;