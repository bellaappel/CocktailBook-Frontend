import React from 'react';
import Cocktail from '../Cocktail.js';

const CocktailList = ({cocktails}) => (
    <div className="cocktail-list">
        {cocktails.map(cocktail => < Cocktail name={cocktail.name} photo={cocktail.photo} />)}
    </div>

)

export default CocktailList;
