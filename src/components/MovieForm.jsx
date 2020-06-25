import React from 'react'
import { Link } from 'react-router-dom'



// functional 

export default function MovieForm(props) {
    

    const handleSubmit = props.handleFormSubmit
    const movieName = props.movieName
    const handleChange = props.handleChange


    return (
        <div>
            <h1>Search Movies You Would Like to Watch: </h1>
            <form id="search-form" onSubmit={handleSubmit}>
                <input id='search' value={movieName} onChange={handleChange} />
                <button type="submit"> Search</button>
                <button>
                    <Link to='/watchlist'>Go to Watchlist</Link>
                </button>
            </form>
        </div>
        )
    }



