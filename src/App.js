import './App.css';
import movies from './movieData'
import AddBar from './Components/AddBar';
import SearchBar from './Components/MovieList/SearchBar';
import Title from './Components/Title';
import MovieList from './Components/MovieList/MovieList';

export default function App() {
  return (
    <div className="App">
      <Title>Movie Tracker</Title>
      <AddBar />
      <MovieList movies={movies} />
    </div>
  );
}

/*

Title component

*/
