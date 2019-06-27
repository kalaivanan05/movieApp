
import React from 'react';

import movieStyle from '../web/movieContainerStyle';

 class MovieList extends React.Component {

  constructor(props) {
  	super(props);
  }	
  
  /* render movie list 
     this list render dynamically based on the input value*/
  renderMovieList = (data) => {

  	let movieList = [];
  	if(data && data.length > 1) {
	  	for(let i=0; i < data.length; i++) {
		  	movieList.push(
		  		<div key = {i} style={movieStyle.container}>
		     	<img style = {movieStyle.img} src = {data[i].Poster}/>
		     	<div style={movieStyle.movieContainer}>
			     	<label>Name: {data[i].Title}</label>
			     	<label>Year: {data[i].Year}</label>
			     	<label>imdbID: {data[i].imdbID}</label>
			     	<label>Type: {data[i].Type}</label>
		     	</div>
		     	</div>
		  	);
	  	}
  	}
  	return movieList;
  }

  render() {
    return (
     <div style= {movieStyle.block}>
     	{this.renderMovieList(this.props.data)}
     </div>
    );
  }
}

export default MovieList;