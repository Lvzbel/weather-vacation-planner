import React, { Component } from "react";
import { geoLocation } from "../functions/Geo";
import { VacationSpot } from "./VacationSpot";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import { pastTime } from "../functions/time";
import "../sass/WeatherVacation.scss";
import SearchBar from "./SearchBar";

export interface IUserPlaces {
  address: string;
  countryCode: string;
  id: string;
  lat: number;
  lng: number;
}

export interface IAppProps {}

export interface IAppState {
  userPlaces: Array<IUserPlaces>;
  focused: boolean | any;
  date: moment.Moment | null;
}

export class WeatherVacation extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      userPlaces: [],
      date: moment(),
      focused: false
    };
    this.addLocation = this.addLocation.bind(this);
    this.removeLocation = this.removeLocation.bind(this);
  }

  async addLocation(loc: string) {
    // add location will clean the string and getting it ready for the the Geo API call. It removes all symbols that people tent to put on addresses
    const location = await geoLocation(loc);
    this.setState(st => {
      const userPlaces = [...st.userPlaces, location];
      window.localStorage.setItem("userPlaces", JSON.stringify(userPlaces));
      return { userPlaces };
    });
  }

  removeLocation(id: string) {
    const userPlaces = this.state.userPlaces.filter(place => id !== place.id);
    this.setState({ userPlaces });
  }

  componentDidMount() {
    const test: any = window.localStorage.getItem("userPlaces");
    const storedPlaces = JSON.parse(test) || [];
    this.setState({ userPlaces: storedPlaces });
  }

  componentDidUpdate(prevProps: IAppProps, prevState: IAppState) {
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
        date={this.state.date}
      />
    ));
    return (
      <div>
        <h1 className="WeatherVacation-title">
          Decide where your next vacation will be.
        </h1>
        <h4 className="WeatherVacation-sub">
          Just pick the date you are planning to travel and we will show you how
          the weather was the past 3 years the same date.
        </h4>

        <div className="WeatherVacation-input-container">
          <SearchBar addLocation={this.addLocation} />
          <div className="">
            <label htmlFor="calendar" className="calendar-label">
              Select a date:
            </label>
            <SingleDatePicker
              date={this.state.date}
              onDateChange={date => this.setState({ date })}
              focused={this.state.focused}
              onFocusChange={({ focused }) => this.setState({ focused })}
              numberOfMonths={1}
              id="calendar"
            />
          </div>
        </div>

        <div className="attribution">
          <a className="attribution-link" href="https://darksky.net/poweredby/">
            Powered by Dark Sky
          </a>
        </div>

        {vacationLocations}
      </div>
    );
  }
}

export default WeatherVacation;
