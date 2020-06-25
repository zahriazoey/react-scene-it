import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import SavedMovies from './components/SavedMovies';


// class
export default class App extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      movieName: '',
      movies: []
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let name = this.state.movieName
    fetch(`https://www.omdbapi.com/?apikey=b43843a0&s=${name}`)
        .then(res => res.json())
        .then(data => {
          if (data.Search) {
            this.setState({
              movies: data.Search
          })
        }
      })
}

handleChange = (e) => {
  console.log(e)
    this.setState({
        movieName: e.target.value
    })
}
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Switch>
          <Route path='/' exact>
            <MovieForm handleFormSubmit={this.handleFormSubmit} handleChange={this.handleChange} movieName={this.state.movieName} />
            <MovieList movies={this.state.movies} />
          </Route> 
          <Route path='/watchlist' component={SavedMovies} />
      </Switch>
      </div>
      
      </BrowserRouter>
    
    )
  }
}