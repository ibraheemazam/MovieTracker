import Movie from './Movie';
import SearchBar from './SearchBar';

export default function MovieList({ movies }) {
  return (
    <div className="container">
      <div className="navBar">
        <button>Watched</button>
        <button>To Watch</button>
        <SearchBar />
      </div>
      <div className="movieList">
        {movies.map(movie => <Movie key={movie.title} movie={movie}/>)}
      </div>
    </ div>
  )
}