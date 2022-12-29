import { useState } from 'react';
import Movie from './Movie';
import SearchBar from './SearchBar';

export default function MovieList({ movies, setMovies }) {
  const [status, setStatus] = useState('all')
  const [searchQuery, setSearchQuery] = useState();

  const filteredMovies = (
    searchQuery
    ? movies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : status === 'all'
    ? movies
    : status === 'watched'
    ? movies.filter(m => m.watched === true)
    : movies.filter(m => m.watched === false)
  );

  return (
    <div className="container">
      <div className="navBar">
        <div className="statusHolder">
          <div className={`statusBar ${status === 'all' ? 'highlighted' : ''}`} onClick={() => setStatus('all')}>All</div>
          <div className={`statusBar ${status === 'watched' ? 'highlighted' : ''}`} onClick={() => setStatus('watched')}>Watched</div>
          <div className={`statusBar ${status === 'notWatched' ? 'highlighted' : ''}`} onClick={() => setStatus('notWatched')}>To Watch</div>
        </div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      </div>
      {filteredMovies.length > 0 ? <div className="movieList">
        {filteredMovies.map(movie => (
          <Movie key={movie.title} movie={movie} movies={movies} setMovies={setMovies}/>
        ))}
      </div> : <div>No movies found...</div>}
    </ div>
  )
}