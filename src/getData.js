export function getData(url="https://api.themoviedb.org/3/discover/movie?api_key=cfa8ac67d6d96317a23a9182f463d718") {
	return fetch(url)
		.then(movies => movies.json(), err => console.error('failed to load movies', err));
}
