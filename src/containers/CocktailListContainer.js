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
            fetch('www.thecocktaildb.com/api/json/v1/1/randomselection.php')
            .then(response => response.json())
            .then(data => this.setState({
            gifs: [data.data[0], data.data[1], data.data[2]]
            }));
        }



    render() {
        return (
            <div>
            <CocktailList initialCocktails={this.state.cocktails} />
            </div>
        )
    }
}


