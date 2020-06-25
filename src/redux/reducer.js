import { ADD_MOVIE } from './action'
import { DELETE_MOVIE } from './action'

const initialState = {
    movies: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_MOVIE: 
        return {
            movies: [...state.movies, action.value]
        }
        case DELETE_MOVIE: 
        let results = state.movies.filter(movie => movie.imdbID !== action.value.imdbID)
        return {
            movies: results
        }
    default: 
        return state;
    }
}

export default reducer;
