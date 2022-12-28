import './App.css';
import initialMovies from './movieData'
import Title from './Components/Title';
import AddBar from './Components/AddBar';
import MovieList from './Components/MovieList/MovieList';
import { useState } from 'react';

export default function App() {
  const [movies, setMovies] = useState(initialMovies);

  return (
    <div className="App">
      <Title>Movie Tracker 🎥</Title>
      <AddBar movies={movies} setMovies={setMovies} />
      <MovieList movies={movies} setMovies={setMovies} />
    </div>
  );
}

/*

Title component

*/
