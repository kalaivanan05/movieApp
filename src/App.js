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
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&&s=Batman";
    this.fetchFromAPI(url);      
  }

  // user searching particular movie
  getResult(value) {
    const searchUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&&s=${value}`;
    this.fetchFromAPI(searchUrl);
  }

  // fetch value from API
  fetchFromAPI(url) {
    fetch(url)
    .then(res => res.json())
    .then(result => {
      console.log(result);
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
