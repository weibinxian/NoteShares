import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {searchKeywords} from '../searchFunction'


//display function to display the notes that were found
function Display(props) {

    const note = props.note
    const noteURL = "/viewnote/" + note.id
    let date =  note.updatedAt.substr(0,10);
    return (
        <div className="w3-card-4">
        <h1>Title: <Link to={noteURL}>{note.title}</Link></h1>
        <p>last update: {date}</p>
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
            <div className="w3-container">
                <div  id="user-panel" className="w3-container w3-block w3-padding-64 w3-display-topmiddle">
                <div className="">
                    <form className="" onSubmit={(e) => this.onSubmit(e)}>
                    <div className="">
                    <div className="w3-row-padding">
                        <div className="">
                            <input className="w3-input w3-third w3-border"
                                    onChange = { (e) => this.onChange(e) }
                                    required></input>
                        </div>

                        <div className="w3-third  w3-dropdown-hover">
                            <select className="" value={this.state.searchValue} onChange = { (e) => this.onChangeValue(e)}>
                            <option value="title">title</option>
                            <option value="body">body</option>

                            </select>
                        </div>

                        <div className="w3-third">

                            <button className="w3-btn w3-white w3-border-blue w3-round"
                                    type="submit">search
                            </button>
                        </div>
                    </div>
                    </div>
                    </form>
                </div>

                <div  id="bottom-section" className="w3-panel w3-border w3-margin-64 w3-light-grey w3-round-large">
                 <div className="w3-container ">
                         {results}
                         <br></br>
                        {message}
                 </div>
                 </div>
                </div>

                 </div>
        )

    }
}



export default SearchBar;
