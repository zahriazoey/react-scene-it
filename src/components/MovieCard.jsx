import React from 'react';
import { addMovie } from '../redux/action';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function MovieCard(props) {
    return (
    <div>
        <Card style={{ width: '18rem', margin: '10px', display: 'flex', flexWrap: 'wrap', flexDirection: 'column'  }}>
            <Card.Img variant="top" src={props.movie.Poster} />
            <Card.Body>
                <Card.Title>{props.movie.Title}</Card.Title>
                <Card.Text>
                    {props.movie.Year}
                </Card.Text>
                <Button onClick={() => {props.addMovie(props.movie)}}variant="primary">Save</Button>
            </Card.Body>
        </Card>
    </div>

        // <div className='Card'>
        //     <div className='Information'>
        //         <div>
        //             <h1>{props.movie.Title}</h1>
        //             <h4>{props.movie.Year}</h4>
        //             <img src={props.movie.Poster} alt="movie poster" />
        //         </div>
        //         <button onClick={() => {props.addMovie(props.movie)}}>Save</button>
        //     </div>
        // </div>
    )
}

const mapDispatchToProps = {
    addMovie,
}

export default connect(
    null,
    mapDispatchToProps,  
)(MovieCard);