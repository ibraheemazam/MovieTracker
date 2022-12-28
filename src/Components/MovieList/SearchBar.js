export default function SearchBar () {
  return (
    <div>
      <form className="searchBar">
        <input
          type="text"
          disabled={false}
          placeholder="Search for a movie in your list"
          // value={""}
          // onChange={}
        />
        <button
          type="submit"
          disabled={false}
        >
          Search
        </button>
      </form>
    </div>
  )
}