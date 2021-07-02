import React from 'react'
import CocktailCard from '../components/CocktailCard'

class CocktailsContainer extends React.Component{
    renderCocktails(){
        if (this.props.search !== ''){
            return this.props.cocktails.filter(cocktailObj => cocktailObj.name.includes(this.props.search)).map(this.renderSingleCocktailCard)
        } else {
            return this.props.cocktails.map(this.renderSingleCocktailCard)
        }
    }

    renderSingleCocktailCard(cocktailObj){
        return <CocktailCard key={cocktailObj.name + "-card"} name={cocktailObj.name} photo={cocktailObj.photo}/>
    }

    render(){
        return (
            <div id="cocktails-container">
                {this.renderCocktails}
            </div>
        )
    }

}

export default CocktailsContainer