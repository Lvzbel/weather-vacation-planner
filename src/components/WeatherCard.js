import React, { Component } from "react";
import Skycons from "react-skycons";
import { prepIconString } from "../functions/iconStingPrep";

export class WeatherCard extends Component {
  render() {
    const { summary, icon, high, low, current } = this.props.weather;

    return (
      <div className="WeatherCard" style={{ border: "1px solid black" }}>
        <p>{`Summary: ${summary}`}</p>
        <Skycons
          className="WeatherCard-icon"
          color="black"
          icon={prepIconString(icon)}
          autoplay={true}
          style={{ width: "200px" }}
        />
        <p>{`High: ${high}`}</p>
        <p>{`Low: ${low}`}</p>
        <p>{`Current: ${current}`}</p>
      </div>
    );
  }
}

export default WeatherCard;
