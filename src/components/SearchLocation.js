import React, { Component } from "react";

export class SearchLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <form className="SearchLocation" onSubmit={this.handleSubmit}>
        <label htmlFor="location" className="SearchLocation-label">
          Search Location
        </label>
        <input
          type="text"
          id="location"
          className="SearchLocation-input"
          placeholder="Address or Location"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="SearchLocation-button">Get Location</button>
      </form>
    );
  }
}

export default SearchLocation;
