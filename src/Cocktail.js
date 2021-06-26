import React from 'react'


const Cocktail = ({name, photo}) => (
    <div className="cocktail-card">
        <img src={photo} alt={name}/>
        <h3>{name}</h3>
    </div>
)

export default Cocktail;