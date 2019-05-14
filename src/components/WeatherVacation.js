import React, { Component } from "react";
import { SearchLocation } from "./SearchLocation";

export class WeatherVacation extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">Decide where your next vacation will be.</h1>
        <h4 className="App-title-sub">
          Just pick the date you are planning to travel and we will show you how
          the weather was the past 3 years the same date.
        </h4>
        <SearchLocation />
      </div>
    );
  }
}

export default WeatherVacation;
