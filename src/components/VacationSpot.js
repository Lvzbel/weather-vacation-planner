import React, { Component } from "react";
import moment from "moment";
import { darkBuildData } from "../functions/darkFetch";

export class VacationSpot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      pastWeather: [],
      currentWeather: {}
    };
  }

  async componentDidMount() {
    const { pastOne, pastTwo, pastThree } = this.props;
    const { lat, lng } = this.props.spotInfo;
    console.log("One: ", pastOne);
    console.log("Two: ", pastTwo);
    console.log("Three: ", pastThree);
    const oneYear = await darkBuildData(lat, lng, pastOne);
    const twoYears = await darkBuildData(lat, lng, pastTwo);
    const threeYears = await darkBuildData(lat, lng, pastThree);
    const currentWeather = await darkBuildData(lat, lng);
    const pastWeather = [];

    pastWeather.push(oneYear, twoYears, threeYears);

    this.setState({ pastWeather, currentWeather });
  }

  render() {
    const { id, address, lat, lng, countryCode } = this.props.spotInfo;
    return (
      <div className="VacationSpot">
        <h3 className="VacationSpot-title">{address}</h3>
        {this.state.currentDate.format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </div>
    );
  }
}

export default VacationSpot;
