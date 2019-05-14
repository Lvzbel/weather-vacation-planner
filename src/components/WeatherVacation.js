import React, { Component } from "react";
import { SearchLocation } from "./SearchLocation";
import { geoLocation } from "../functions/Geo";
import { VacationSpot } from "./VacationSpot";

export class WeatherVacation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPlaces: []
    };
    this.addLocation = this.addLocation.bind(this);
  }

  async addLocation(loc) {
    // add location will clean the string and getting it ready for the the Geo API call. It removes all symbols that people tent to put on addresses
    const location = await geoLocation(loc);
    this.setState(st => {
      const userPlaces = [...st.userPlaces, location];
      window.localStorage.setItem("userPlaces", JSON.stringify(userPlaces));
      return { userPlaces };
    });
  }

  componentDidMount() {
    const storedPlaces =
      JSON.parse(window.localStorage.getItem("userPlaces")) || [];
    this.setState({ userPlaces: storedPlaces });
  }

  render() {
    const vacationLocations = this.state.userPlaces.map(loc => (
      <VacationSpot spotInfo={loc} key={loc.id} />
    ));
    return (
      <div>
        <h1 className="App-title">Decide where your next vacation will be.</h1>
        <h4 className="App-title-sub">
          Just pick the date you are planning to travel and we will show you how
          the weather was the past 3 years the same date.
        </h4>
        <SearchLocation addLocation={this.addLocation} />
        {vacationLocations}
      </div>
    );
  }
}

export default WeatherVacation;
