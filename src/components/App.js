import './App.css';
import React from 'react'
import CocktailListContainer from '../containers/CocktailListContainer'
import CocktailHeader from '../CocktailHeader'

const App = () => {
  return (
    <div className="App">
        <CocktailListContainer />
        <CocktailHeader />
    </div>
  )
}

export default App

