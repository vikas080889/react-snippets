import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchComponent = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    getresults();
  }, [query]);

  const getresults = async () => {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${query}`
    );
    setResults(response.data.hits);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />

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

export default SearchComponent;
