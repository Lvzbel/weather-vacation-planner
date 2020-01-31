import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { WeatherVacation } from "./components/WeatherVacation";
import NotFound from "./components/NotFound";
import "sanitize.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={WeatherVacation} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
