import './App.css';
import React from 'react'
import CocktailListContainer from '../containers/CocktailListContainer'
import CocktailHeader from '../CocktailHeader'
import SearchBar from './SearchBar'

class App extends React.Component {
  

  render(){
    return(
      <div className="App">
        <CocktailListContainer />
        <CocktailHeader />
        <SearchBar />
      </div>
    )
  }
}


export default App

