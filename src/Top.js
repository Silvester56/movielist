import React from 'react';
import Movie from './Movie';
import {getData} from './getData';
import { ReactComponent as Next } from './slidernextarrow.svg';
import { ReactComponent as Previous } from './sliderpreviousarrow.svg';

class Top extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tab: [],
			filteredTab: [],
			currentIndex: 0
		};
		getData("https://api.themoviedb.org/3/movie/top_rated?api_key=cfa8ac67d6d96317a23a9182f463d718").then(movies => {
			if (movies) {
				this.setState({tab: movies.results.slice(0, 10), filteredTab: movies.results.slice(0, 4)});
			}
		});
	}

	renderMovies() {
		return this.state.filteredTab.map((row) =>
			<Movie {...row} />
		);
	}

	changeIndex(offset) {
		let newIndex = this.state.currentIndex + offset;
		if (newIndex < 0 || newIndex > 6) {
			return;
		}
		this.setState({currentIndex: newIndex, filteredTab: this.state.tab.slice(newIndex, newIndex + 4)});
	}

	render() {
		return (
			<>
				<h3>Les 10 meilleurs films</h3>
				<div class="top-movies">
					<button className="slider" type="button" onClick={() => this.changeIndex(-1)}><Previous/></button>
					{this.renderMovies()}
					<button className="slider" type="button" onClick={() => this.changeIndex(1)}><Next/></button>
				</div>
			</>
		);
	}
}

 export default Top;
