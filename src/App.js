import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SearchFunction1 from "./components/search/SearchFunction1";
import SearchFunctionAsync from "./components/search/SearchFunctionAsync";
import SearchComponent from "./components/search/SearchComponent";
import SearchComponentSubmit from "./components/search/SearchComponentSubmit";
import SearchFormClear from "./components/search/SearchFormClear";
import Header from "./components/layout/Header";
import SearchWithCard from "./components/search/SearchWithCards";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          {/* <SearchFunction1 /> */}
          {/* <SearchFunctionAsync /> */}
          {/* <SearchComponent /> */}
          {/* <SearchComponentSubmit /> */}
          <div className="mb-4">
            <Header />
          </div>
          {/* <Home />  */}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search1" component={SearchFunction1} />
            <Route path="/search2" component={SearchComponent} />
            <Route path="/search3" component={SearchComponentSubmit} />
            <Route path="/about-us" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
