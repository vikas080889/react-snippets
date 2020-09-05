import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchFunctionAsync = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    const response = await axios.get(
      "http://hn.algolia.com/api/v1/search?query=reacthooks"
    );
    setResults(response.data.hits);
    console.log(results);
  };

  return (
    <div>
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

export default SearchFunctionAsync;
