import React, {Component} from 'react'


class SearchResults extends Component{
    constructor(props){
        super(props)

        this.state = {
            results: []
        };  
    }



    render(){
        console.log(this.props)
        return (
            <div>notessss results</div>
        )
    }
}

export default SearchResults;