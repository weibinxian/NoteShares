import React, { Component } from 'react'


class DisplayNote extends Component {

    constructor(props){
        super(props)

        this.state = {
            note: []
        };
    }


    render(){  
        console.log(this.props)

        return(
        <div>
  
        </div>
        );
    }
}

export default DisplayNote;