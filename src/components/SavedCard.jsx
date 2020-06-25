import React from 'react'
import { deleteMovie } from '../redux/action';
import { connect } from 'react-redux';

function SavedCard(props) {
    return (
        <div className='Card'>
            <div className='Information'>
                <div>
                    <h1>{props.movie.Title}</h1>
                    <h4>{props.movie.Year}</h4>
                    <img src={props.movie.Poster} alt="movie poster" />
                </div>
                <button onClick={() => {props.deleteMovie(props.movie)}}>Remove</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    deleteMovie,
}

export default connect(
    null, 
    mapDispatchToProps
)(SavedCard);