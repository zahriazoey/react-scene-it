import React, { Component } from 'react'
import MovieCard from './MovieCard';

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }
    
    render() {
        return (
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                { this.props.movies.map((movie, index) => {
                    return (
                        <MovieCard movie={movie} key={index} />
                    )
                })
                }
                </div>

            
            )
    }
}
