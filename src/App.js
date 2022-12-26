import './App.css';
import movies from './movieData'
import AddBar from './Components/AddBar';
import SearchBar from './Components/MovieList/SearchBar';
import Title from './Components/Title';
import Movie from './Components/Movie';

export default function App() {
  console.log(movies)
  return (
    <div className="App">
      <Title>Movie Tracker</Title>
      <AddBar />
      <SearchBar />
      <Movie />
    </div>
  );
}

/*

Title component

*/
