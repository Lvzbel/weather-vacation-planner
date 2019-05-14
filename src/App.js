import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { WeatherVacation } from "./components/WeatherVacation";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={WeatherVacation} />
      </Switch>
    </div>
  );
}

export default App;
