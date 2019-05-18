import React, { Component } from "react";

export class WeatherCard extends Component {
  render() {
    const { summary, icon, high, low, current } = this.props.weather;
    return (
      <div className="WeatherCard" style={{ border: "1px solid black" }}>
        <p>{`Summary: ${summary}`}</p>
        <p>{`Icon: ${icon}`}</p>
        <p>{`High: ${high}`}</p>
        <p>{`Low: ${low}`}</p>
        <p>{`Current: ${current}`}</p>
      </div>
    );
  }
}

export default WeatherCard;
