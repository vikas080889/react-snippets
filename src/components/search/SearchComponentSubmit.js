import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchComponentSubmit = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("java");

  useEffect(() => {
    getresults();
  }, []);

  const getresults = async () => {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${query}`
    );
    setResults(response.data.hits);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    getresults();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {results.map((result) => (
          <li key={result.objectID}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponentSubmit;
