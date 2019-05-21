import React, { Component } from "react";
import moment from "moment";
import { darkBuildData } from "../functions/darkFetch";
import WeatherCard from "./WeatherCard";
import "../sass/VacationSpot.scss";

export class VacationSpot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      pastWeather: [],
      currentWeather: {}
    };
    this.clickRemove = this.clickRemove.bind(this);
  }

  async componentDidMount() {
    const { pastOne, pastTwo, pastThree } = this.props;
    const { lat, lng } = this.props.spotInfo;
    const oneYear = await darkBuildData(lat, lng, pastOne);
    const twoYears = await darkBuildData(lat, lng, pastTwo);
    const threeYears = await darkBuildData(lat, lng, pastThree);
    const currentWeather = await darkBuildData(lat, lng);
    const pastWeather = [];

    pastWeather.push(oneYear, twoYears, threeYears);

    this.setState({ pastWeather, currentWeather });
  }

  clickRemove() {
    const { removeLocation, id } = this.props;
    removeLocation(id);
  }

  render() {
    const { address, countryCode } = this.props.spotInfo;
    const pastWeatherCards = this.state.pastWeather.map(weather => (
      <WeatherCard key={weather.id} weather={weather} />
    ));
    return (
      <div className="VacationSpot">
        <div className="VacationSpot-info-container">
          <img
            src={`https://www.countryflags.io/${countryCode}/flat/64.png`}
            alt=""
            className="VacationSpot-img"
          />
          <h3 className="VacationSpot-title">{address}</h3>
          <h3>
            {this.state.currentDate.format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </h3>
          <button className="VacationSpot-remove" onClick={this.clickRemove}>
            X
          </button>
        </div>

        <div className="VacationSpot-container">
          <div className="VacationSpot-past">{pastWeatherCards}</div>
          <div className="VacationSpot-current">
            <WeatherCard weather={this.state.currentWeather} />
          </div>
        </div>
      </div>
    );
  }
}

export default VacationSpot;
