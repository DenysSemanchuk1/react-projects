import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>Search hacker news</h2>
      <input
        type='text'
        value={query}
        className='form-input'
        onChange={({ target }) => handleSearch(target.value)}
      />
    </form>
  );
};

export default SearchForm;
