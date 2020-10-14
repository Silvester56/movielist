import React from 'react';

class Movie extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div key={this.props.id} className="movie">
				<img className="poster" src={`https://image.tmdb.org/t/p/w500/${this.props.poster_path}`}/>
				<p className="title">{this.props.title}</p>
				<p className="year">{this.props.release_date.substring(0, 4)}</p>
			</div>
		);
	}
}

 export default Movie;
