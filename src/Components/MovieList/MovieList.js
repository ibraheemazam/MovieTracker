import { useState } from 'react';
import Movie from './Movie';
import SearchBar from './SearchBar';

export default function MovieList({ movies, setMovies }) {
  const [status, setStatus] = useState('all')
  const filteredMovies = (
    status === 'all'
    ? movies
    : status === 'watched'
    ? movies.filter(m => m.watched === true)
    : movies.filter(m => m.watched === false)
  );

  return (
    <div className="container">
      <div className="navBar">
        <div className={`sBar ${status === 'all' ? 'highlighted' : ''}`} onClick={() => setStatus('all')}>All</div>
        <div className={`sBar ${status === 'watched' ? 'highlighted' : ''}`} onClick={() => setStatus('watched')}>Watched</div>
        <div className={`sBar ${status === 'notWatched' ? 'highlighted' : ''}`} onClick={() => setStatus('notWatched')}>To Watch</div>
        <SearchBar />
      </div>
      <div className="movieList">
        {filteredMovies.map(movie => (
          <Movie key={movie.title} movie={movie} movies={movies} setMovies={setMovies}/>
        ))}
      </div>
    </ div>
  )
}