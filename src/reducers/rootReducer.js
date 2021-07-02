import {cocktailsReducer} from ".//cocktailsReducer"

export const rootReducer = combineReducers({
    cocktails: cocktailsReducer,
})