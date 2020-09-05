import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const SearchFormClear = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("java");
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);

  const searchInputRef = useRef();

  useEffect(() => {
    getresults();
  }, []);

  const getresults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setResults(response.data.hits);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    getresults();
  };

  const handleClearSearch = () => {
    setQuery("");
    searchInputRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={searchInputRef}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClearSearch}>
          Clear
        </button>
      </form>

      {loading ? (
        <div>Data loading</div>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.objectID}>
              <a href={result.url}>{result.title}</a>
            </li>
          ))}
        </ul>
      )}

      {err && <div> {err.message} </div>}
    </div>
  );
};

export default SearchFormClear;
