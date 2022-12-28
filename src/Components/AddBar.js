import { useState } from 'react';

export default function AddBar ({ movies, setMovies}) {
  const [newMovie, setNewMovie] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (movies.find(m => m.title === newMovie.trim())) {
      return alert('This movie is already in your list!');
    }
    if (!newMovie) {
      return alert('Type the name of a movie you would like to add');
    }
    setMovies([...movies, {
      title: newMovie.trim(),
      watched: false,
    }])
    setNewMovie('')
  }

  return (
    <div className="container">
      <form className="addBar" onSubmit={handleSubmit}>
        <input
          type="text"
          disabled={false}
          placeholder="Search for a movie to add to your list"
          value={newMovie}
          onChange={e => setNewMovie(e.target.value)}
          />
        <button
          type="submit"
          disabled={false}
        >
          ➕
        </button>
      </form>
    </div>
  )
}