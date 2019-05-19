import React, { Component } from "react";
import { SearchLocation } from "./SearchLocation";
import { geoLocation } from "../functions/Geo";
import { VacationSpot } from "./VacationSpot";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import { pastTime } from "../functions/time";

export class WeatherVacation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPlaces: [],
      date: moment(),
      focused: false
    };
    this.addLocation = this.addLocation.bind(this);
    this.removeLocation = this.removeLocation.bind(this);
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

  removeLocation(id) {
    const userPlaces = this.state.userPlaces.filter(place => id !== place.id);
    this.setState({ userPlaces });
  }

  componentDidMount() {
    const storedPlaces =
      JSON.parse(window.localStorage.getItem("userPlaces")) || [];
    this.setState({ userPlaces: storedPlaces });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userPlaces.length !== this.state.userPlaces.length) {
      window.localStorage.setItem(
        "userPlaces",
        JSON.stringify(this.state.userPlaces)
      );
    }
  }

  render() {
    const vacationLocations = this.state.userPlaces.map(loc => (
      <VacationSpot
        spotInfo={loc}
        key={loc.id}
        id={loc.id}
        removeLocation={this.removeLocation}
        pastOne={pastTime(this.state.date, 1)}
        pastTwo={pastTime(this.state.date, 2)}
        pastThree={pastTime(this.state.date, 3)}
      />
    ));
    return (
      <div>
        <h1 className="App-title">Decide where your next vacation will be.</h1>
        <h4 className="App-title-sub">
          Just pick the date you are planning to travel and we will show you how
          the weather was the past 3 years the same date.
        </h4>
        <SearchLocation addLocation={this.addLocation} />

        <SingleDatePicker
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id="calendar"
        />

        {vacationLocations}
      </div>
    );
  }
}

export default WeatherVacation;
