import React, { Component } from 'react'




export default class SearchBar extends Component {
     constructor() {
        super()
        this.state = {
            searchTerm: ""
        }
    }
    render() {
        return (
            <div id="search-bar">
                {/* <form onSubmit={handleSubmit} id="search">
                    <input name="drink-input" type="text" />
                    <input type="submit" value="Search!" />
                </form> */}
            </div>
           
        )
    }
}

