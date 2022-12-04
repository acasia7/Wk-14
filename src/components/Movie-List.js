//a container for all the Movie components and their data.
import React from 'react';
import Movie from './Movie';

export default class MovieList extends React.Component {
	render() {
		return(
			<div>
				<Movie
					Title= "Star Wars: Episode IV - A New Hope"
					year= "1977"
				    imdbID= "tt0076759"
				    Type= "movie"
					image= "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
				/>
				<Movie
					Title= "Star Wars: Episode V - The Empire Strikes Back"
				    year= "1980"
				    imdbID= "tt0080684"
				    Type= "movie"
				    image= "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
				/>
			</div>
		)
	}
}

//const MovieList = (props) => {
//	return (
//		<>
//			{props.movies.map((movie, index) => (
//				<div className='image-container d-flex justify-content-start m-3'>
//					<img src={movie.Poster} alt='movie'></img>
//				</div>
//			))}
//		</>
//	);
//};

//export default MovieList;