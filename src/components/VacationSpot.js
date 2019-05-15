import React, { Component } from "react";
import moment from "moment";
import { darkFetch } from "../functions/darkFetch";

export class VacationSpot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      pastWeather: []
    };
  }

  async componentDidMount() {
    const { passOne, passTwo, passThree } = this.props;
    const { lat, lng } = this.props.spotInfo;
    const pastWeather = [];
    const oneYear = await darkFetch(lat, lng, passOne);
    const twoYears = await darkFetch(lat, lng, passTwo);
    const threeYears = await darkFetch(lat, lng, passThree);
    pastWeather.push(oneYear, twoYears, threeYears);
    this.setState({ pastWeather });
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
