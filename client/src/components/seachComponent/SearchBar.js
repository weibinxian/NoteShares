import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {searchKeywords} from '../searchFunction'


//display function to display the notes that were found
function Display(props) {

    const note = props.note
    const noteURL = "/viewnote/" + note.id

    return (
        <div>
            <h1><Link to={noteURL}>link</Link></h1>
            <h1>{note.title}</h1>
        
        </div>
    )
}

class SearchBar extends Component {
    constructor(){
        super()

        this.state = { 
            searchQuery: '',
            searchValue: 'title',
            callBackResponce: false,
            queryResult : [],
        }
    }

    //change value for what part to search to in notes 
    onChangeValue(e) {
        let searchValue = e.target.value;
        this.setState({ searchValue});
    }

    onChange(e) {
        let searchQuery = this.state.searchQuery;
        searchQuery = e.target.value;
        this.setState({ searchQuery });
    }

    onSubmit(e) {
        e.preventDefault()

        //get criteria for search 
        let keyword = this.state.searchQuery
        let test = keyword.split(" ")
        let path = this.state.searchValue

        //create object with keywords
        let keywords = {}
        test.map((val, index) => {
            keywords['key'+index] = val;
            return keywords;
        })

        //search for notes with keywords 
        searchKeywords(keywords,path)
        .then(results => {
            console.log(results.data)
            let queryResult = results.data;
            this.setState({queryResult,
                           callBackResponce: true})

        })
        .catch(err => {
            console.log(err)
        })

    }


    render(){


        //get the links for results
        const results =  this.state.queryResult.map( note => {
            return( <Display key={note.id} note={note} />)
        })

        //message
        let message = <h1>Search in notes</h1>
        let numberFound = this.state.queryResult.length

        if(this.state.callBackResponce){
            if(this.state.queryResult.length === 0){
                message = <h1>Found no results</h1>
            }else {
                message = <h3>Number of notes found: {numberFound}</h3>
            }
        }

        return(
            <div>
                <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="form">
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <input className="form-control"
                                    onChange = { (e) => this.onChange(e) }
                                    required></input>
                        </div>

                        <div className="col-auto">
                            <select className="custom-select my-1 mr-sm-2" value={this.state.searchValue} onChange = { (e) => this.onChangeValue(e)}>
                            <option value="title">title</option>
                            <option value="body">body</option>

                            </select>
                        </div>

                        <div className="col-auto">
                            <button className="btn btn-primary"
                                    type="submit">search
                            </button>
                        </div>
                    </div>
                    </div>
                    </form>
                </div>
                </div>

                <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12 col-xs-12">
                        {results}
                        <br></br>
                        {message}
                </div>
                </div>
        </div>
            
        )

    }
}



export default SearchBar;
