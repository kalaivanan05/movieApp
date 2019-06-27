import React from 'react';
import Header from './core/Header';
import Footer from './core/Footer';

import MovieList from './core/MovieList';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultSearch: 'Batman',
      movieData: [],
      totalResults: 0
    }
    this.getResult = this.getResult.bind(this);
  } 


  //Initial API fetch
  componentDidMount() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&&s=Batman`)

    .then(res => res.json())
    .then(result => {
      console.log(result);
      this.setState({movieData: result.Search, totalResults: result.totalResults});
    })
    .catch(error => {
      alert("something went wrong");
    })
      
  }

  // user searching particular movie
  getResult(value) {

    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&&s=${value}`)

    .then(res => res.json())
    .then(result => {
      this.setState({movieData: result.Search, totalResults: result.totalResults});
    })
    .catch(error => {
      alert("something went wrong");
    })
  }

  render() {
    return (
      <div >
          <Header onSearch = {this.getResult}/>
          <MovieList data = {this.state.movieData}/>
          {(this.state.totalResults !== undefined) ? <Footer data = {this.state.totalResults}/> : <div>No Records</div>}
      </div>
    );
  }
}

export default App;
