import React, { Component } from 'react'
import SavedCard from './SavedCard'
import { connect } from 'react-redux';

class SavedMovies extends Component {
    render() {
        return (
            <div>
                <h2>Watchlist</h2>
                <div>
                { this.props.movies.map((movie, index) => {
                return (
                    <SavedCard movie={movie} key={index} /> )
            })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{ 
        movies: state.movies
    }
}

export default connect(
    mapStateToProps,
    null,
)(SavedMovies);
