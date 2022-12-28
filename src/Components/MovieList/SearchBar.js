export default function SearchBar ({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <form className="searchBar">
        <div className="searchIcon">🔍</div>
        <input
          type="text"
          disabled={false}
          placeholder="Search for a movie in your list"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onFocus={() => {}}
        />
        {searchQuery && <div
          className="closeIcon"
          onClick={() => setSearchQuery('')}
        >
          X
        </div>}
        {/* <button
          type="submit"
          disabled={false}
        >
          Search
        </button> */}
      </form>
    </div>
  )
}