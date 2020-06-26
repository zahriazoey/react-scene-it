import React from 'react'
import { deleteMovie } from '../redux/action';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap'

function SavedCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '30px', display: 'flex', flexWrap: 'wrap', flexDirection: 'column'  }}>
                <Card.Img variant="top" src={props.movie.Poster} />
                <Card.Body>
                    <Card.Title>{props.movie.Title}</Card.Title>
                    <Card.Text>
                        {props.movie.Year}
                    </Card.Text>
                    <Button onClick={() => {props.deleteMovie(props.movie)}}variant="primary">Remove</Button>
                </Card.Body>
            </Card>
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