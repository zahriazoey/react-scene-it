export const ADD_MOVIE = 'ADD_MOVIE'
export const DELETE_MOVIE = 'DELETE_MOVIE'

export function addMovie(value) {
    return {
        type: ADD_MOVIE,
        value
    }
}

export function deleteMovie(value) {
    return {
        type: DELETE_MOVIE,
        value
    }
}