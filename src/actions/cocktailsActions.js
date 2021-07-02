export const fetchCocktails = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/cocktails')
        .then(resp => resp.json())
        .then(cocktails => dispatch({type: 'FETCH_COCKTAILS', payload: breweries}))
    }
}