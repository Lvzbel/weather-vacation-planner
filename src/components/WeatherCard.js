import React, { Component } from "react";
import Skycons from "react-skycons";
import { prepIconString } from "../functions/iconStingPrep";
import "../sass/WeatherCard.scss";

export class WeatherCard extends Component {
  render() {
    const { year, summary, icon, high, low, current } = this.props.weather;

    return (
      <div className="WeatherCard">
        <h4 className="WeatherCard-year">{year}</h4>
        <p className="WeatherCard-summary">{`${summary}`}</p>
        <Skycons
          className="WeatherCard-icon"
          color="white"
          icon={prepIconString(icon)}
          autoplay={true}
          style={{ width: "150px" }}
        />
        <p className="WeatherCard-high WeatherCard-temp">{`High: ${high}`}</p>
        <p className="WeatherCard-low WeatherCard-temp">{`Low: ${low}`}</p>
        <p className="WeatherCard-current WeatherCard-temp">{`Current: ${current}`}</p>
      </div>
    );
  }
}

export default WeatherCard;
