import React from "react";
import "./App.css";
import SearchLocation from "./components/SearchLocation";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Decide where your next vacation will be.</h1>
      <h4 className="App-title-sub">
        Just pick the date you are planning to travel and we will show you how
        the weather was the past 3 years the same date.
      </h4>
      <SearchLocation />
    </div>
  );
}

export default App;
