import React from "react";
import "./App.css";

import SearchFunction1 from "./components/search/SearchFunction1";
import SearchFunctionAsync from "./components/search/SearchFunctionAsync";
import SearchComponent from "./components/search/SearchComponent";
import SearchComponentSubmit from "./components/search/SearchComponentSubmit";
import SearchFormClear from "./components/search/SearchFormClear";

function App() {
  return (
    <div className="App">
      {/* <SearchFunction1 /> */}
      {/* <SearchFunctionAsync /> */}
      {/* <SearchComponent /> */}
      {/* <SearchComponentSubmit /> */}
      <SearchFormClear />
    </div>
  );
}

export default App;
