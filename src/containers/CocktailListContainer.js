import React, { Component } from 'react'
import CocktailList from '../components/CocktailList'

export default class CocktailListContainer extends Component {
    constructor() {
        super()
        this.state = {
            cocktails: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/cocktails")
        .then(response => response.json())
        .then(cocktailData => this.setState({cocktails: cocktailData.cocktails}))
    }


    render(){
        return(
            <div>
                <CocktailList cocktails={this.state.cocktails}/>
            </div>
        )
    }

}


