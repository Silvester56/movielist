import React from 'react';
import Movie from './Movie';
import {getData} from './getData';
import { ReactComponent as Next } from './paginationnextarrow.svg';
import { ReactComponent as Previous } from './paginationpreviousarrow.svg';

class Bottom extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tab: [],
			filteredTab: [],
			buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
			currentIndex: 1
		};
		getData().then(movies => {
			if (movies) {
				this.setState({tab: movies.results, filteredTab: movies.results.slice(0, 10)});
			}
		});
	}

	renderMovies() {
		return this.state.filteredTab.map((row) =>
			<Movie {...row} />
		);
	}

	renderButtons() {
		return this.state.buttons.map((number) =>
			<button className={number === this.state.currentIndex ? "active" : ""} type="button" onClick={() => this.getPage(number)}>{number}</button>
		);
	}

	getPage(number) {
		if (number % 2 === 0) {
			this.setState({currentIndex: number, filteredTab: this.state.tab.slice(10, 20)});
		} else {
			let url="https://api.themoviedb.org/3/discover/movie?api_key=cfa8ac67d6d96317a23a9182f463d718&page=" + number;
			getData(url).then(movies => {
				if (movies) {
					this.setState({currentIndex: number, tab: movies.results, filteredTab: movies.results.slice(0, 10)});
				}
			});
		}
	}

	render() {
		return (
			<>
				<h3>Tous les films</h3>
				<div className="filters-container">
					<div className="filters">
						Trier par :
						<select>
							<option value="alpha">Ordre alphabétique</option>
						  <option value="none">Aucun</option>
						</select>
					</div>
					<div className="filters">
						Filtrer par :
						<select>
							<option value="genre">Genre</option>
							<option value="all">Tous</option>
							<option value="action">Action</option>
							<option value="horror">Horreur</option>
						  <option value="love">Amour</option>
						</select>
						<select>
							<option value="year">Année</option>
						</select>
					</div>
				</div>
				<div className="all-movies">
					{this.renderMovies()}
				</div>
				<div className="buttons">
					<button type="button"><Previous/></button>
					{this.renderButtons()}
					<button type="button"><Next/></button>
				</div>
			</>
		);
	}
}

 export default Bottom;
