export const SearchBar = ({ onSubmit, inputData, queryString, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <span>
        <input
          id="movies"
          type="text"
          name="search"
          value={inputData}
          onChange={onChange}
          placeholder="Probably Comedy"
          autoComplete="off"
        />
        <label htmlFor="movies"></label>
      </span>
      <button type="submit">Search</button>
    </form>
  );
};
