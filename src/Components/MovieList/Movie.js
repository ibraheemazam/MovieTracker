export default function Movie({ movie, movies, setMovies }) {
  const color = movie.watched ? "watched" : "notWatched";

  function handleClick() {
    const newMoviesList = movies.map(m => {
      if (m.title === movie.title) {
        return {...movie, watched: !movie.watched};
      } else {
        return m;
      }
    });
    setMovies(newMoviesList);
  }

  return (
    <div
      className={`movieEntry ${color}`}
      onClick={handleClick}
    >
      {movie.title}
      {movie.watched && "  ✔️"}
    </div>
  )
}