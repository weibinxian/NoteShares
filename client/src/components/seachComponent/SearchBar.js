import React, { Component } from 'react'

import {searchKeywords} from '../searchFunction'

class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = { 
            searchQuery: '',
        }
    }

    onChange(e) {
        let searchQuery = this.state.searchQuery;
        searchQuery = e.target.value;
        this.setState({ searchQuery });
    }

    onSubmit(e) {
        e.preventDefault()
        let keyword = this.state.searchQuery
        let test = keyword.split(" ")

        let keywords = {}
        test.map((val, index) => {
            keywords['key'+index] = val;
            return keywords;
        })
        searchKeywords(keywords)
        .then(test => {
            console.log(test)
        })
        .catch(err => {
            console.log(err)
        })
        console.log('________')
    }
    render(){
        return(
            <form onSubmit={(e) => this.onSubmit(e)}>
            <div className="form">
            <div className="form-row align-items-center">
                <div className="col-auto">
                    <input className="form-control"
                           onChange = { (e) => this.onChange(e) }
                           required></input>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary"
                            type="submit">search
                    </button>
                </div>
            </div>
            </div>
            </form>
        );
    }
}



export default SearchBar;
