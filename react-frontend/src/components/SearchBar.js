import React from "react";
/* global google */
import "../sass/SearchLocation.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    this.props.addLocation(place.formatted_address);
  }

  render() {
    return (
      <div className="SearchBar">
        <label htmlFor="autocomplete" className="SearchLocation-label">
          Search Location
        </label>
        <input
          ref={this.autocompleteInput}
          id="autocomplete"
          className="SearchLocation-input1"
          placeholder="Enter your address"
          type="text"
        />
      </div>
    );
  }
}

export default SearchBar;
