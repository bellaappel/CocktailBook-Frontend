import './App.css';
import React from 'react'
import CocktailHeader from '../CocktailHeader'
import SearchBar from './SearchBar'
import CocktailsContainer from '../containers/CocktailsContainer'

class App extends React.Component {

  state={search: '', cocktails: []}

  componentDidMount(){
    fetch("http://localhost:3000/cocktails")
    .then(res => res.json())
    .then(cocktailObj => this.setState({cocktails: cocktailObj}))
  }

  changeStateValue = (string) => {
    this.setState({search: string})
  }

  
  render(){
    return(
      <div className="App">
        <CocktailHeader />
        <SearchBar changeStateValue={this.changeStateValue}/>
        <CocktailsContainer cocktails={this.state.cocktails} search={this.state.search}/>
      </div>
    )
  }
}


export default App

