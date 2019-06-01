import React, { Component } from "react";
import "../sass/SearchLocation.scss";
/* global google */

export class SearchLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = this.state.value;
    if (value !== "") {
      this.props.addLocation(this.state.value);
    }
    this.setState({
      value: ""
    });
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    console.log(place.formatted_address);
    // this.props.addLocation(place.formatted_address);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  render() {
    const value = this.state.value;
    return (
      <form className="SearchLocation" onSubmit={this.handleSubmit}>
        <label htmlFor="autocomplete" className="SearchLocation-label">
          Search Location
        </label>
        <input
          type="text"
          id="autocomplete"
          className="SearchLocation-input"
          placeholder="Where do you want to go?"
          ref={this.autocompleteInput}
          value={value}
          onChange={this.handleChange}
        />
        <button disabled={value.length < 3} className="SearchLocation-button">
          Search
        </button>
      </form>
    );
  }
}

export default SearchLocation;
