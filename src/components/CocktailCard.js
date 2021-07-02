import React, { PureComponent } from 'react'

export class CocktailCard extends PureComponent {
    render() {
        return (
            <div className="cocktail-card">
                <h2>{this.props.name}</h2>
                <img alt={"photo of " + this.props.name} src={this.props.photo} className="cocktail-avatar"/>
            </div>
        )
    }
}

export default CocktailCard
